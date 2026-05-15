// ============================================================
// Charles Lamarque — Portfolio main.js
// ============================================================

let allRepos = []

// ------------------------------------------------------------
// Cached GitHub data layer
// ------------------------------------------------------------

const GH_USER = "clamarque"
const GH_CACHE_TTL = 60 * 60 * 1000 // 1h

function readCache(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    if (Date.now() - ts > GH_CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }))
  } catch {
    // localStorage might be full / disabled — ignore
  }
}

async function cachedFetch(key, url) {
  const cached = readCache(key)
  if (cached) return cached
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}`)
  }
  const data = await res.json()
  writeCache(key, data)
  return data
}

let _userPromise = null
let _reposPromise = null

function getUser() {
  if (!_userPromise) {
    _userPromise = cachedFetch(
      "gh:user",
      `https://api.github.com/users/${GH_USER}`
    ).catch((e) => {
      _userPromise = null
      throw e
    })
  }
  return _userPromise
}

function getRepos() {
  if (!_reposPromise) {
    _reposPromise = cachedFetch(
      "gh:repos",
      `https://api.github.com/users/${GH_USER}/repos?per_page=100&type=owner&sort=pushed`
    )
      .then((repos) => (Array.isArray(repos) ? repos : []))
      .catch((e) => {
        _reposPromise = null
        throw e
      })
  }
  return _reposPromise
}

// ------------------------------------------------------------
// README badges carousel
// ------------------------------------------------------------

async function fetchReadme() {
  const url =
    "https://raw.githubusercontent.com/clamarque/clamarque/main/README.md"
  const response = await fetch(url)
  return response.text()
}

function extractBadges(markdown) {
  const regex = /####\s+.*?\n([\s\S]*?)(?=###|$)/g
  let badges = []
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const sectionContent = match[1]
    const badgeLines = sectionContent
      .split("\n")
      .filter((line) => line.startsWith("!["))
    badges.push(...badgeLines)
  }
  return badges
}

function createCarouselContent(badges) {
  return badges
    .map((badge) => `<div>${marked.parseInline(badge)}</div>`)
    .join("")
}

async function initCarousel() {
  try {
    const markdown = await fetchReadme()
    const badges = extractBadges(markdown)
    const carousel = document.getElementById("carousel")
    if (!carousel) return

    if (badges.length === 0) {
      carousel.innerHTML = "<div>No badges found.</div>"
      return
    }
    carousel.innerHTML = createCarouselContent([...badges, ...badges])
  } catch (e) {
    console.error("carousel init failed", e)
  }
}

async function showCarouselWhenImagesLoaded() {
  const carouselContainer = document.querySelector(".carousel-container")
  if (!carouselContainer) return
  const images = carouselContainer.querySelectorAll("img")
  if (images.length === 0) {
    carouselContainer.classList.remove("hidden")
    return
  }
  let imagesLoaded = 0
  return new Promise((resolve) => {
    images.forEach((img) => {
      img.addEventListener("load", () => {
        imagesLoaded++
        if (imagesLoaded === images.length) {
          carouselContainer.classList.remove("hidden")
          resolve()
        }
      })
      if (img.complete) img.dispatchEvent(new Event("load"))
    })
  })
}

// ------------------------------------------------------------
// Repo cards
// ------------------------------------------------------------

function buildLanguageTags(repo) {
  return repo.language ? `#${repo.language}` : ""
}

function createRepoItem(repo) {
  const li = document.createElement("li")
  const safeDesc = (repo.description || "").replace(/</g, "&lt;")
  li.innerHTML = `
    <a href="${repo.html_url}" target="_blank" rel="noopener">
        <h3 class="repo-title">${repo.name}</h3>
        <span>${repo.stargazers_count} <i class="fa fa-star"></i></span>
        <p>${safeDesc}</p>
        <span class="repo-language">${buildLanguageTags(repo)}</span>
    </a>
  `
  return li
}

async function displayRepos(repos) {
  const list = document.getElementById("repo-list")
  if (!list) return

  const existingTitles = new Set(
    Array.from(list.querySelectorAll(".repo-title")).map((el) =>
      el.textContent.trim().toLowerCase()
    )
  )

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  let i = 0
  for (const repo of repos) {
    if (existingTitles.has(repo.name.toLowerCase())) continue

    const item = createRepoItem(repo)
    item.classList.add("visible-repos")
    list.appendChild(item)

    if (!reduceMotion && typeof item.animate === "function") {
      item.animate(
        [
          { opacity: 0, transform: "translateY(14px) scale(0.97)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ],
        {
          duration: 420,
          delay: i * 60,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        }
      )
    }
    i++
  }
}

async function loadAndRenderRepos() {
  try {
    const repos = await getRepos()
    allRepos = repos
      .filter((r) => !r.fork && !r.archived && r.description)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 9)
    await displayRepos(allRepos)
  } catch (e) {
    console.error("repo render failed", e)
  }
}

// ------------------------------------------------------------
// Stats strip + GitHub card
// ------------------------------------------------------------

function getExpYears() {
  const startYear = 2016
  const currentYear = new Date().getFullYear()
  const yearsExperience = currentYear - startYear
  const yearsEl = document.getElementById("years-experience")
  if (yearsEl) yearsEl.textContent = yearsExperience
  const statsYearsEl = document.getElementById("stats-years")
  if (statsYearsEl) statsYearsEl.textContent = yearsExperience
}

async function renderStatsAndCard() {
  const statsReposEl = document.getElementById("stats-repos")
  const reposEl = document.getElementById("gh-repos")
  const starsEl = document.getElementById("gh-stars")
  const followersEl = document.getElementById("gh-followers")
  const langsEl = document.getElementById("gh-langs")

  try {
    const [user, repos] = await Promise.all([getUser(), getRepos()])

    if (typeof user.public_repos === "number") {
      if (statsReposEl) statsReposEl.textContent = user.public_repos + "+"
      if (reposEl) reposEl.textContent = user.public_repos
    }
    if (followersEl && typeof user.followers === "number") {
      followersEl.textContent = user.followers
    }

    const totalStars = repos.reduce(
      (sum, r) => sum + (r.stargazers_count || 0),
      0
    )
    if (starsEl) starsEl.textContent = totalStars

    if (langsEl) {
      const langTotals = {}
      repos.forEach((r) => {
        if (r.fork || !r.language) return
        langTotals[r.language] = (langTotals[r.language] || 0) + (r.size || 1)
      })
      const sorted = Object.entries(langTotals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
      const sum = sorted.reduce((a, [, v]) => a + v, 0) || 1

      if (sorted.length === 0) {
        langsEl.innerHTML =
          '<li class="gh-langs__loading">No language data</li>'
      } else {
        langsEl.innerHTML = sorted
          .map(([name, val]) => {
            const pct = ((val / sum) * 100).toFixed(1)
            return `
              <li class="gh-lang">
                <span class="gh-lang__name">${name}</span>
                <span class="gh-lang__bar" style="--w: ${pct}%"></span>
                <span class="gh-lang__pct">${pct}%</span>
              </li>`
          })
          .join("")
      }
    }
  } catch (e) {
    console.error("stats/card render failed", e)
    if (langsEl) {
      langsEl.innerHTML =
        '<li class="gh-langs__loading">Rate limit reached — try again later</li>'
    }
  }
}

// ------------------------------------------------------------
// Scroll reveal + footer year
// ------------------------------------------------------------

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal")
  if (!("IntersectionObserver" in window) || elements.length === 0) {
    elements.forEach((el) => el.classList.add("is-visible"))
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  )
  elements.forEach((el) => observer.observe(el))
}

function initFooterYear() {
  const el = document.getElementById("footer-year")
  if (el && !el.textContent) el.textContent = new Date().getFullYear()
}

function initBackToTop() {
  const btn = document.getElementById("to-top")
  if (!btn) return
  const threshold = 400
  const onScroll = () => {
    btn.classList.toggle("is-visible", window.scrollY > threshold)
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
  btn.addEventListener("click", () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    })
  })
}

// ------------------------------------------------------------
// Bootstrap
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", async function () {
  const birthYear = 1991
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear
  document.querySelectorAll("#age").forEach((el) => (el.textContent = age))

  getExpYears()
  initFooterYear()
  initScrollReveal()
  initBackToTop()

  renderStatsAndCard()
  loadAndRenderRepos()

  initCarousel().then(() => showCarouselWhenImagesLoaded())
})
