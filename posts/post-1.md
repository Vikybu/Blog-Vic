---
title : Mini-blog avec ElevenTy
image: /assets/eleventy-ssg.png
alt: Logo Eleventy
date: 2026-05-22
description : Création d'un mini-blog avec Eleventy
css: post-1.css
layout: layouts/post.njk
---
<div class="container_total">
<h1>Eleventy: un générateur simple de site statique</h1>
<p>L’objectif de cette semaine de séminaire était de générer un site statique afin de créer un mini-blog.
Parmi les stacks proposées, il y avait Astro et Eleventy. Après plusieurs recherches, j’ai décidé de partir sur 11ty pour son approche simple et légère.<br>
<h3>Les avantages d'11ty</h3>
<ul>
<li>Il propose des compilations rapides et des sites web encore plus rapides</li>
<li>Il est stable</li>
<li>Il ne nécessite aucune configuration initiale et peut être étendu grâce à des options de configuration flexibles.</li>
<li>prend en charge plusieurs langages de modèles. Vous pouvez en choisir un seul ou les utiliser tous ensemble dans un même projet (pug, Markdown, HTML, liquid, Nunjucks)</li>
</ul>
<h3>Comment fonctionne 11ty</h3>
<img src="{{ '/assets/schema.png' | url }}" alt="Schéma Eleventy">
<br>
Simple au premier abord… mais une fois plongé dans les liens entre les différents fichiers, la difficulté commence rapidement à apparaître.<br>
<br>
J’ai rencontré pas mal de problèmes de déploiement, notamment avec les images et les fichiers CSS. Après plusieurs recherches et quelques moments de frustration, j’ai finalement réussi à déployer mon site correctement et à récupérer mon style CSS.<br>
<br>
L’étape suivante a été la mise en place d’un <u>flux RSS</u>.
RSS = « Rich Site Summary” ou ”Really Simple Syndication”, désigne un fichier texte au format XML, utilisé pour la syndication de contenu Web. Il permet de repérer les modifications de contenu d'un site. </p>
</div>
    