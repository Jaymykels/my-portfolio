<template>
  <div id="app">
    <div class="background-grid height-100 position-fixed">
      <span class="column height-100"></span>
      <span class="column height-100"></span>
      <span class="column height-100"></span>
      <span class="column height-100 hidden-xs"></span>
      <span class="column height-100 hidden-xs hidden-sm"></span>
      <span class="column height-100 hidden-xs hidden-sm"></span>
    </div>

    <header class="header">
      <div class="logo btn-shadow text-center">
        <div class="display-table height-100 width-100">
          <div class="display-table-cell vertical-align-middle">
            <span
              class="display-inline-block font-weight-700 title-large position-relative"
              >ME</span
            >
          </div>
        </div>
      </div>

      <div class="nav-trigger nav-trigger-open">
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>

    <div id="navigation" class="navbar navbar-display-block" role="navigation">
      <div class="container-fluid display-table height-100 width-100">
        <div class="display-table-cell vertical-align-middle width-100">
          <div class="nav-trigger nav-trigger-close">
            <span></span>
            <span></span>
          </div>

          <ul class="nav navbar-nav text-center text-small text-uppercase">
            <li class="page-scroll"><a href="#home">Home</a></li>
            <li class="page-scroll"><a href="#profile">Profile</a></li>
            <!-- <li class="page-scroll"><a href="#work-experiences">Resume</a></li> -->
            <li class="page-scroll"><a href="#services">Skills</a></li>
            <li class="page-scroll"><a href="#contact">Contact</a></li>
          </ul>

          <div class="nav-social hidden-md hidden-lg text-center">
            <ul
              class="list-unstyled list-inline no-letter-spacing title-medium"
            >
              <li>
                <a :href="social_media.facebook" target="_blank"
                  ><i class="ion-social-facebook"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.twitter" target="_blank"
                  ><i class="ion-social-twitter"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.github" target="_blank"
                  ><i class="ion-social-github"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.linkedin" target="_blank"
                  ><i class="ion-social-linkedin"></i
                ></a>
              </li>
            </ul>

            <span class="display-inline-block text-large">{{ email }}</span>
          </div>
        </div>
      </div>
    </div>

    <router-view />

    <footer class="footer position-relative">
      <div
        class="page-scroll background-color display-block position-absolute text-center"
      >
        <a
          href="#page-top"
          class="btn-shadow display-block text-white title-medium"
        >
          <i class="ion-chevron-up"></i>
        </a>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <ul
              class="list-unstyled list-inline margin-2 no-margin-top no-margin-rl no-letter-spacing title-medium"
            >
              <li>
                <a :href="social_media.facebook" target="_blank"
                  ><i class="ion-social-facebook"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.twitter" target="_blank"
                  ><i class="ion-social-twitter"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.github" target="_blank"
                  ><i class="ion-social-github"></i
                ></a>
              </li>
              <li>
                <a :href="social_media.linkedin" target="_blank"
                  ><i class="ion-social-linkedin"></i
                ></a>
              </li>
            </ul>

            <p class="font-family-alt text-medium">
              <strong>&copy; 2019</strong>
              <strong> Developed</strong> by Michael Ezeokoye.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["email", "social_media"])
  }
};
</script>
