# Software overview

![Borg-Collective Flow Software](assets/badges/list_of-flow_software-brightgreen.svg)

Flow is a philosophy:
> routine work should disappear so you can focus on the interesting parts.  

All software listed is held to a high standard
>- High test coverage
>- Continuous security analysis
>   - SonarQube
>   - Semgrep
>   - CodeFactor.

The Jekyll plugins form a complete pipeline for authoring
and shipping optimized, best-practice static sites — from images and search
to minification, compression, and cache-busting.  

The tools cover the gaps the ecosystem leaves open:  
- self-hosted performance monitoring
- secrets sync
- LLM-assisted knowledge curation with human review
- safe container migration
When possiable exposed over MCP so your IDE/LLM/AI can use them too

<nav class="toc" aria-label="Categories">

<h2>Categories</h2>

<ul>
{% for category in site.data.categories %}
<li>
  <a href="#{{ category.name | slugify }}">
    {{ category.name }} <span class="count">{{ category.repos.size }}</span>
  </a>
</li>
{% endfor %}
</ul>

</nav>

{% for category in site.data.categories %}

<section class="repo-category">

<h2 id="{{ category.name | slugify }}">{{ category.name }}</h2>

<p class="category-description">{{ category.description }}</p>

<table class="repo-table">

<thead>
<tr>
<th scope="col">Repository</th>
<th scope="col">Description</th>
<th scope="col">Status</th>
</tr>
</thead>

<tbody>

{% for repo in category.repos %}
{% include repo-row.html repo=repo %}
{% endfor %}

</tbody>
</table>

</section>

{% endfor %}

## License

Copyright (C) 2026 Svend Gundestrup

This project is licensed under the GNU Affero General Public License
v3.0 — see [LICENSE](LICENSE).
