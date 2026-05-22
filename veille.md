---
title: Veille dev
layout: layouts/post.njk
css: veille.css
---
<body>
<h1>Articles externes</h1>
<div class="container">
{% for post in externalPosts %}
  <div class="card">
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <p>{{ post.description }}</p>
    <small>{{ post.date }}</small>
  </div>
{% endfor %}
</div>
</body>