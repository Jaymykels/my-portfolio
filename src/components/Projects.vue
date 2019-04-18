<template>
  <section id="project" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Selected Projects
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-md-6"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="projects popup-container background-white">
              <div class="inner-content position-relative">
                <div class="project-title position-relative width-100">
                  <h3
                    class="letter-spacing-1 text-extra-large text-uppercase position-absolute"
                  >
                    {{ project.title }}
                  </h3>
                </div>

                <div class="project-about position-relative">
                  <div class="thumb">
                    <img :src="project.image" alt="" class="img-responsive" />
                  </div>
                </div>

                <div class="project-summary">
                  <div
                    class="project-number font-weight-700 letter-spacing-1 pull-left title-small"
                  >
                    0{{ index + 1 }}.
                  </div>

                  <div class="project-link pull-right">
                    <a
                      :href="project.link"
                      target="_blank"
                      class="font-weight-600 text-small text-uppercase"
                      >View Project</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array
    }
  }
};
</script>
