---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
entries_layout: list
---

{% include base_path %}
{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}
