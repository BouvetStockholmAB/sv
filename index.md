---
title: Scripts and stylesheets
---

{% include_relative _content/hero.html %}

<div class="ct ct--std block block--largeTxtBlock">
    
    <h2 class="heading heading--large">Lorem</h2>
    <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros.</p>
    
</div>

<div class="ct ct--3col" id="feature-1">
    <div class="col">
        
        <div class="block block--small block--img js-expanding-article">
            
            <div class="blockBg blockBg--1x"
                 style="background-image: url( 'assets/img/samspel-414x860.jpg' );"></div>
            <div class="blockBg blockBg--2x"
                 style="background-image: url( 'assets/img/samspel-828x860.jpg' );"></div>
            <div class="blockBg__txt">
                <h2>Samspel</h2>
                <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div>
            <div class="js-article visuallyhidden">
                <h2>Samspel</h2>
                                <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div> 
                     
        </div>
        
    </div>
    <div class="col">
    
        <div class="block block--small block--img js-expanding-article">
            <div class="blockBg blockBg--1x"
                 style="background-image: url( 'assets/img/jonkoping-414x860.jpg' );"></div>
            <div class="blockBg blockBg--2x"
                 style="background-image: url( 'assets/img/jonkoping-828x860.jpg' );"></div>
                 
            <div class="blockBg__txt">
             <h2>Jönköping</h2>
             <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div>
            <div class="js-article visuallyhidden">
             <h2>Jönköping</h2>
                             <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div>
        </div>
            
         
        
    </div>
    <div class="col">
    
        <div class="block block--small block--img js-expanding-article">
            <div class="blockBg blockBg--1x"
                 style="background-image: url( 'assets/img/nrm-414x860.jpg' );"></div>
            <div class="blockBg blockBg--2x"
                 style="background-image: url( 'assets/img/nrm-828x860.jpg' );"></div>
                 
            <div class="blockBg__txt">
                <h2>Naturhistoriska muséet</h2>
                <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div>
            <div class="js-article visuallyhidden">
             <h2>Naturhistoriska muséet</h2>
             <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
</div>

<div class="ct ct--2col">
    <div class="col">1Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">2Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
</div>

<div class="ct ct--3col">
    <div class="col">1Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">2Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
    <div class="col">3Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Nulla non magna id lacus semper elementum in ac eros...Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</div>
</div>


<div class="ct ct--pull-in" id="test">

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

