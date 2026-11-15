const CACHE_HOURS = 24;

async function getRepo(repoName) {

    const cacheKey = `repo-${repoName}`;

    const cached =
        localStorage.getItem(cacheKey);

    if (cached) {

        const data = JSON.parse(cached);

        const age =
            (Date.now() - data.timestamp)
            / 1000 / 60 / 60;

        if (age < CACHE_HOURS) {
            return data.repo;
        }
    }

    try {

        const response = await fetch(
            `https://api.github.com/repos/${window.githubUser}/${repoName}`
        );

        if (!response.ok) {
            throw new Error();
        }

        const repo = await response.json();

        localStorage.setItem(
            cacheKey,
            JSON.stringify({
                timestamp: Date.now(),
                repo: repo
            })
        );

        return repo;

    } catch {

        if (cached) {
            return JSON.parse(cached).repo;
        }

        return null;
    }
}

function createBadgeCell(repo) {

    return `
        <img
          alt="version"
          src="https://img.shields.io/github/v/tag/${window.githubUser}/${repo.name}?sort=semver"
        >

        <img
          alt="updated"
          src="https://img.shields.io/github/last-commit/${window.githubUser}/${repo.name}"
        >
    `;
}

async function renderCategory(category) {

    let html = `

    <section class="repo-category">

      <h2>${category.name}</h2>

      <p class="category-description">
        ${category.description}
      </p>

      <table class="repo-table">

        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
    `;

    for (const repoName of category.repos) {

        const repo =
            await getRepo(repoName);

        if (!repo) continue;

        html += `
            <tr>

              <td>
                <a
                 href="${repo.html_url}"
                 target="_blank"
                >
                  ${repo.name}
                </a>
              </td>

              <td>
                ${repo.description || ""}
              </td>

              <td>
                ${createBadgeCell(repo)}
              </td>

            </tr>
        `;
    }

    html += `
         </tbody>
      </table>
    </section>
    `;

    return html;
}

async function render() {

    const container =
        document.getElementById(
            "repo-overview"
        );

    let html = "";

    for (const category of window.repoCategories) {
        html += await renderCategory(
            category
        );
    }

    container.innerHTML = html;
}

render();
