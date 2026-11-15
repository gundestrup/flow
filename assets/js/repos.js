const USER = "gundestrup";

async function getRepo(repo) {
    const response = await fetch(
        `https://api.github.com/repos/${USER}/${repo}`
    );

    return response.ok
        ? await response.json()
        : null;
}

async function getLatestTag(repo) {
    const response = await fetch(
        `https://api.github.com/repos/${USER}/${repo}/tags`
    );

    if (!response.ok) return null;

    const tags = await response.json();

    if (!tags.length) return null;

    const tag = tags[0];

    const commitResponse = await fetch(
        tag.commit.url
    );

    if (!commitResponse.ok) {
        return {
            name: tag.name,
            date: ""
        };
    }

    const commit = await commitResponse.json();

    return {
        name: tag.name,
        date: commit.commit.committer.date
    };
}

async function createTable(category) {

    const section = document.createElement("section");

    section.innerHTML = `
        <h2>${category.name}</h2>
        <p>${category.description}</p>

        <table>
            <thead>
            <tr>
                <th>Repository</th>
                <th>Description</th>
                <th>Latest Tag</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    const tbody = section.querySelector("tbody");

    for (const repoName of category.repos) {

        const repo = await getRepo(repoName);

        if (!repo) continue;

        const tag = await getLatestTag(repoName);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <a href="${repo.html_url}">
                    ${repo.name}
                </a>
            </td>

            <td>
                ${repo.description || ""}
            </td>

            <td>
                ${
                    tag
                    ? `<img src="https://img.shields.io/badge/tag-${encodeURIComponent(tag.name)}-blue">`
                    : "-"
                }
            </td>

            <td>
                ${
                    tag
                    ? new Date(tag.date).toLocaleDateString()
                    : "-"
                }
            </td>
        `;

        tbody.appendChild(row);
    }

    return section;
}

async function render() {

    const container =
        document.getElementById("repos");

    container.innerHTML = "";

    for (const category of window.repoCategories) {

        container.appendChild(
            await createTable(category)
        );
    }
}

render();
