<template>
  <section id="education" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                My Education
              </h2>
            </div>

            <div id="panel-group-education" class="panel-group panel-resume">
              <div
                class="item position-relative"
                v-for="(certification, index) in education"
                :key="index"
              >
                <div
                  class="panel-label display-block letter-spacing-1 text-extra-large text-uppercase position-absolute"
                >
                  {{ certification.period }}
                </div>

                <a
                  :href="`#resume-education-${index}`"
                  data-parent="panel-group-education"
                  class="panel-button background-color btn-shadow display-block text-center text-white title-large position-absolute"
                  :class="[index !== 0 && 'collapsed']"
                  data-toggle="collapse"
                ></a>

                <div class="panel">
                  <div class="panel-heading background-gray-light-2">
                    <h4
                      class="panel-title letter-spacing-1 text-extra-large text-uppercase"
                    >
                      {{ certification.institution }},
                      {{ certification.degree }}
                    </h4>
                  </div>

                  <div
                    :id="`resume-education-${index}`"
                    class="panel-collapse collapse in"
                    :class="[index === 0 && 'in']"
                  >
                    <div class="panel-body text-large">
                      <p>
                        {{ certification.summary }}
                      </p>
                    </div>
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
    education: {
      type: Array
    }
  }
};
</script>
