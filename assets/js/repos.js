const categories = {
  "Jekyll Plugins": [
    "jekyll-plugin-1",
    "jekyll-plugin-2"
  ],

  "Websites": [
    "website-project"
  ],

  "Webserver Tools": [
    "server-tool"
  ],

  "Other": [
    "research-article-fetcher",
    "Sundhedsplatformen",
    "tools"
  ]
};

const user = "gundestrup";

async function getRepo(repoName) {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repoName}`
  );

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

async function buildPage() {
  const container = document.getElementById("repos");
  container.innerHTML = "";

  for (const [category, repos] of Object.entries(categories)) {

    const heading = document.createElement("h2");
    heading.textContent = category;
    container.appendChild(heading);

    const table = document.createElement("table");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Repository</th>
          <th>Description</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    for (const repoName of repos) {

      const repo = await getRepo(repoName);

      if (!repo) continue;

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <a href="${repo.html_url}">
            ${repo.name}
          </a>
        </td>

        <td>
          ${repo.description ?? ""}
        </td>

        <td>
          <img
            src="https://img.shields.io/github/v/tag/${user}/${repo.name}"
            alt="version"
          >
        </td>
      `;

      tbody.appendChild(row);
    }

    container.appendChild(table);
  }
}

buildPage();
