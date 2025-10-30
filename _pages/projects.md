---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
entries_layout: list   # liste + küçük görsel
---

{% include base_path %}
{% for post in site.portfolio reversed %}
  {% include archive-single.html %}
{% endfor %}
