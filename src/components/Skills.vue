<template>
  <!-- SECTION - SKILLS BAR CHART START -->
  <section id="skills-bar-chart" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Technical Skills
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4" v-for="(skill, index) in skills" :key="index">
            <div class="skills-bar-chart position-relative width-100">
              <div
                class="chart-item background-gray-light-2 position-relative width-100"
              >
                <div class="chart-bar height-100 position-relative width-100">
                  <label
                    class="font-weight-700 letter-spacing-1 position-absolute text-small text-uppercase text-white"
                    >{{ skill.technology }}</label
                  >

                  <span
                    class="chart-progress background-color display-block height-100 position-absolute"
                  >
                    <span
                      class="chart-percent font-weight-600"
                      :data-percent="skill.percentage"
                    ></span>
                  </span>
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
    technical_skills: {
      type: Array
    }
  },
  computed: {
    skills() {
      const skills = this.technical_skills;
      return skills.sort((a, b) =>
        a.percentage < b.percentage ? 1 : b.percentage < a.percentage ? -1 : 0
      );
    }
  }
};
</script>
