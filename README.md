# Borg-Collective Flow software overview

<nav class="toc">

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
<th>Repository</th>
<th>Description</th>
<th>Status</th>
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

## Jekyll plugins
| Name  | Description | Latest Release |
| ------------- | ------------- | ------------- |
| [logo-generator-flow](https://github.com/gundestrup/logo-generator-flow)  | Content Cell  | ![Tag](https://img.shields.io/github/v/tag/gundestrup/logo-generator-flow?label=latest)  |
| Content Cell  | Content Cell  | Content Cell  |
https://github.com/gundestrup/jekyll-paginate-v3

## Logo

## Website/Webserver tuning
| Name  | Description | Last Release |
| ------------- | ------------- | ------------- |
| [logo-generator-flow](https://github.com/gundestrup/logo-generator-flow)  | Logo generator  | ![Updated](https://img.shields.io/github/last-commit/gundestrup/logo-generator-flow) ![Tag](https://img.shields.io/github/v/tag/gundestrup/logo-generator-flow?label=latest)  |
| [website-vitals-flow](https://github.com/gundestrup/website-vitals-flow)  |website-vitals-flow  | ![GitHub Tag Date](https://img.shields.io/github/last-commit/gundestrup/website-vitals-flow) ![Tag](https://img.shields.io/github/v/tag/gundestrup/website-vitals-flow?label=latest)  |
