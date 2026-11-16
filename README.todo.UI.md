# UI TODO

Outstanding UI/UX suggestions for the repo overview page.

## Motto styling

The intro blockquote ("routine work should disappear...") currently uses
jekyll-theme-modernist's generic blockquote style. Give it a dedicated
class so it reads as an intentional tagline:

- Change the markdown quote to `<blockquote class="motto">...</blockquote>`
- Add CSS in `assets/css/projects.css`: larger font, accent left border
  in `--link`, normal (non-italic) weight

## Language chip per repo

`repos.json` already has `primaryLanguage.name` for every repo. Render a
small colored language dot + label next to the repo name (or as a 4th
column) in `repo-row.html`. Data is already there — zero maintenance.

## Topics as tags

`repositoryTopics` is also in `repos.json`. Render the first 3-4 topics
as small chips under the description to make rows more scannable.

## Mobile layout

Under 900px the table currently scrolls horizontally
(`projects.css` media query). Alternative: stack each row as a card —
repo name on top, description, then badges. Better UX but needs
restructured markup in `repo-row.html` (or a second, mobile-only layout
toggled via CSS).

## Quality badges per repo

Optionally surface the quality tooling (SonarQube / Semgrep / CodeFactor)
as shields.io badges in the Status column. Requires per-repo badge
config in `repos.json` — only worth it if the badges are uniform across
repos, otherwise it adds maintenance.
