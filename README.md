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
