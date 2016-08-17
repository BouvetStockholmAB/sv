---
title: Scripts and stylesheets
---

<div class="ct ct--2col">
    <div class="col">1Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">2Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
</div>

<div class="ct ct--3col">
    <div class="col">1Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">2Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">3Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
</div>


<div class="ct ct--pull-in">

    <p>Simple table with header</p>
    <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
      </tr>
    </table>

</div>

## {{ page.title }}

*Last build: {{ site.time | date: "%Y-%m-%d %H:%M" }}*

<ul>
{% for file in site.static_files %}
    {% if file.path contains '/dist/' %}
        <li><a href="{{ site.github.url | replace: 'http:', '' }}{{ file.path }}" title="Updated: {{ file.modified_time | date: "%Y-%m-%d %H:%M" }}">{{ site.github.url | replace: 'http:', '' }}{{ file.path }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<p>GitHub repo: <a href="{{ site.github.repository_url }}">{{ site.github.project_title }}</a></p>

