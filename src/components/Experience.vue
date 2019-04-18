<template>
  <section id="work-experiences" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Work Experiences
              </h2>
            </div>

            <div id="panel-group-work" class="panel-group panel-resume">
              <div
                class="item position-relative"
                v-for="(experience, index) in professional_experience"
                :key="index"
              >
                <div
                  class="panel-label display-block letter-spacing-1 text-extra-large text-uppercase position-absolute"
                >
                  {{ experience.period }}
                </div>

                <a
                  :href="`#resume-work-${index}`"
                  data-parent="panel-group-work"
                  class="panel-button background-color btn-shadow display-block text-center text-white title-large position-absolute"
                  :class="[index !== 0 && 'collapsed']"
                  data-toggle="collapse"
                ></a>

                <div class="panel">
                  <div class="panel-heading background-gray-light-2">
                    <h4
                      class="panel-title letter-spacing-1 text-extra-large text-uppercase"
                    >
                      {{ experience.position }}, {{ experience.company }}
                    </h4>
                  </div>

                  <div
                    :id="`resume-work-${index}`"
                    class="panel-collapse collapse"
                    :class="[index === 0 && 'in']"
                  >
                    <div class="panel-body text-large">
                      <p class="font-weight-700 text-color text-uppercase">
                        Responsibilities:
                      </p>
                      <p>
                        {{ experience.responsibilities }}
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
    professional_experience: {
      type: Array
    }
  }
};
</script>
