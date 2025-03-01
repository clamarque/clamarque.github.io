//Init const
const token = "1c6ce1a76cf195b536c6e0af14e8d71e6e804f7e"
let allRepos = []

/**
 * fetch markdown from the readme file
 * @returns String
 */
async function fetchReadme() {
  const url =
    "https://raw.githubusercontent.com/clamarque/clamarque/main/README.md"
  const response = await fetch(url)
  const markdown = await response.text()

  return markdown
}

/**
 * Extract badges from markdown
 * @param {string} markdown
 * @returns
 */
function extractBadges(markdown) {
  const regex = /####\s+.*?\n([\s\S]*?)(?=###|$)/g // Capture le contenu sous chaque titre "####"
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

/**
 * Create carousel content
 * @param {string} badges
 * @returns HTMLElement
 */
function createCarouselContent(badges) {
  return badges
    .map((badge) => `<div>${marked.parseInline(badge)}</div>`)
    .join("")
}

async function initCarousel() {
  const markdown = await fetchReadme()
  const badges = extractBadges(markdown)

  if (badges.length === 0) {
    document.getElementById("carousel").innerHTML =
      "<div>Aucun badge trouvé.</div>"
    return
  }

  const carousel = document.getElementById("carousel")

  carousel.innerHTML = createCarouselContent([...badges, ...badges]) // Duplication pour boucle infinie
}

/**
 * Displays the carousel once all the images (badges) have been loaded
 * @returns Promise
 */
async function showCarouselWhenImagesLoaded() {
  const carouselContainer = document.querySelector(".carousel-container")
  const images = carouselContainer.querySelectorAll("img")
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

      // Pour gérer le cas où l'image est déjà en cache
      if (img.complete) {
        img.dispatchEvent(new Event("load"))
      }
    })
  })
}

async function fetchStarredRepos() {
  const username = "clamarque"
  const url = `https://api.github.com/users/${username}/repos?client_secret=${token}`

  try {
    const response = await fetch(url)
    const repos = await response.json()

    // Filtrer les repos avec au moins 1 étoile
    return repos.filter((repo) => repo.stargazers_count >= 1)
  } catch (error) {
    console.error("Erreur lors de la récupération des repos:", error)
    return []
  }
}

async function getLanguages(url) {
  try {
    const response = await fetch(url)
    const languages = await response.json()
    console.log("🚀 ~ getLanguages ~ languages", languages)

    const languageNames = Object.keys(languages)
      .map((language) => `#${language}`)
      .join(" ")

    console.log("🚀 ~ getLanguages ~ languageNames:", languageNames)
    return languageNames
  } catch (error) {
    console.error("🚀 ~ getLanguages ~ error", error)
  }
}

async function createRepoItem(repo) {
  const li = document.createElement("li")
  const languages = await getLanguages(repo.languages_url)

  li.innerHTML = `
<div class="card">
  <div class="card-front">
    <a href="${repo.html_url}" target="_blank">
        <h4 class="project-title">${repo.name}</h4>

        <span>${repo.stargazers_count} <i class="fa fa-star"></i></span>

        <p>${repo.description}</p>

        <span class="project-language">${languages}</span>
    </a>

  </div>
     <div class="card-back">
        <button class="show-readme">Voir README</button>
      </div>
</div>
`

  li.setAttribute(
    "data-type",
    repo.description.toLowerCase().includes("showcase")
      ? "showcase"
      : "application"
  )

  return li
}

async function displayRepos(repos) {
  const list = document.getElementById("repo-list")

  // Disparition avec animation
  const items = document.querySelectorAll(".repo-list li") || []
  items.forEach((item) => {
    item.classList.remove("visible-repos")
    item.classList.add("hidden-repos")
  })

  setTimeout(() => {
    list.innerHTML = "" // Vider la liste après la disparition
    repos.forEach(async (repo) => {
      const item = await createRepoItem(repo)
      console.log("🚀 ~ repos.forEach ~ item:", item)
      item?.classList?.add("hidden-repos")
      list.appendChild(item)

      // Utiliser requestAnimationFrame pour forcer la transition
      requestAnimationFrame(() => {
        item.classList.remove("hidden-repos")
        item.classList.add("visible-repos")
      })
    })
  }, 500) // Attendre la fin de l'animation de disparition
}

function filterReposV1(category) {
  const items = document.querySelectorAll(".repo-list li")

  items.forEach((item) => {
    const shouldShow = shouldShowItem(item, category)

    item.classList.toggle("hidden-repos", !shouldShow)
    item.classList.toggle("visible-repos", shouldShow)
  })
}

function shouldShowItem(item, category) {
  const type = item.getAttribute("data-type")

  const categoryMap = {
    all: true,
    showcase: type === "showcase",
    application: type === "application",
  }
  console.log("🚀 ~ shouldShowItem ~ categoryMap:", categoryMap)

  return categoryMap[category] || false
}

async function init() {
  allRepos = await fetchStarredRepos()
  await displayRepos(allRepos)
}

document.addEventListener("DOMContentLoaded", async function () {
  const birthYear = 1991
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear
  const ageElements = document.querySelectorAll("#age")
  ageElements.forEach(function (element) {
    element.textContent = age
  })

  await initCarousel()
  await showCarouselWhenImagesLoaded()

  await init()
})
