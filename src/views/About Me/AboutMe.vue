<template>
  <section class="about-me page">
    <div class="container container-lf">
      <!-- Body -->
      <div class="body" id="top">
        <!-- Personal Profile -->
        <div class="section" id="personal-profile">
          <div class="start">
            <h2 id="titleAbout1">About me</h2>
            <div class="btn-group">
              <a class="btn" href="/pdf/cv-resume.pdf" target="_blank"
                >Download CV Resume</a
              >
              <a class="btn" href="#skills-section">See skills</a>
            </div>
          </div>
          <div class="end">
            <h2>Personal Profile</h2>
            <div class="data">
              <p>
                I'm a man who loves computer science, from a very young age I
                fell in love with computer programming I started with
                <strong>my first computer language </strong> at 12 years old, it
                was <strong>c#</strong> and now with
                <strong>Web Technologies</strong>. Also, I have knowledge of
                customer support because I have been working in the family
                business since a very young age.
              </p>
              <p>
                <strong>I also like photography</strong> and all audio visual
                material, so much so that in my free time I dedicate myself to
                edit, take and / or manipulate videos and photographs, knowing
                how to use <strong>Photoshop</strong> and
                <strong>Premiere</strong>, and on the other hand, I use a little
                <strong>Illustrator</strong>, <strong>Corel Draw</strong>,
                <strong>After effects</strong> and <strong>Audition</strong>.
              </p>
            </div>
          </div>
        </div>
        <!-- End Personal profile -->
        <!-- Group-->
        <div class="group section" id="skills-section">
          <!-- Skills -->
          <section id="skills" class="panel">
            <h2>Skills</h2>
            <div class="data">
              <ul>
                <li>- Autodidact</li>
                <li>- Knowledge in Backend and Frontend</li>
                <li>
                  - Basic knowledge in database management and server
                  management.
                </li>
                <li>- Linux and Windows</li>
                <li>- Networks</li>
                <li>- Photoshop, Premiere pro (photo and video edition)</li>
                <li>- Illustrator &amp; Corel Draw (Basic Knowledge)</li>
                <li>- English &amp; Spanish</li>
              </ul>
            </div>
            <a class="btn" href="#idioms">See Idioms skills</a>
          </section>
          <!-- Technologies -->
          <section id="technologies" class="panel">
            <h2>Technologies</h2>
            <div class="data">
              <ul>
                <li><HtmlIcon class="icon-about-me" /></li>
                <li><CssIcon class="icon-about-me" /></li>
                <li><JavascriptIcon class="icon-about-me" /></li>
                <li><NodeJsIcon class="icon-about-me" /></li>
                <li><TypescriptIcon class="icon-about-me" /></li>
                <li><ReactIcon class="icon-about-me" /></li>
                <li><VueIcon class="icon-about-me" /></li>
                <li><ExpressIcon class="icon-about-me" /></li>
                <li><PythonIcon class="icon-about-me" /></li>
              </ul>
            </div>
          </section>
          <router-link class="btn float-btn" to="/projects"
            >See projects</router-link
          >
        </div>
        <!-- End Group -->
        <!-- groupTwo -->
        <div class="groupTwo section" id="idioms">
          <!-- Languages -->
          <section id="languages" class="panel">
            <h2>Idioms</h2>
            <div class="data">
              <div class="spanish">
                <span>Spanish</span>
                <span>Native</span>
              </div>
              <div class="english">
                <span>English</span>
                <div>
                  <span>Written - high</span> / <span>Oral - medium</span>
                </div>
              </div>
            </div>
          </section>
          <!-- End Lenguages -->

          <!-- Hobies -->
          <section id="hobies" class="panel">
            <h2>Hobies</h2>
            <div class="data">
              <ul>
                <li>- Programming and learn about that</li>
                <li>- Photography</li>
                <li>- Music</li>
              </ul>
            </div>
          </section>
          <!-- End Hobies -->
          <!-- Goals -->
          <section id="goals-to-learn" class="panel">
            <h2>Goals to Learn</h2>
            <div class="data">
              <ul>
                <li>- Go</li>
                <li>- Machine learning</li>
                <li>- Dart</li>
                <li>- Django (python)</li>
                <li>- GraphQL</li>
                <li>- Sockets</li>
                <li>- CCNA</li>
              </ul>
            </div>
          </section>
          <!-- End Golas -->
          <div class="float-btn">
            <router-link class="btn " to="/projects">See projects</router-link>
            <router-link class="btn " to="/contact">Contact</router-link>
            <a class="btn " href="#top">Go top</a>
          </div>
        </div>
        <!-- End Final Group -->
      </div>
      <!-- End Body -->
    </div>
  </section>
</template>

<script lang="ts">
export { default } from "./about.controller";
</script>

<style lang="scss" scoped>
@import "./styles/About.style.scss";
</style>
