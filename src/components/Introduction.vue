<template>
  <section id="introduction" class="section no-padding-tb">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Introduction
              </h2>
            </div>

            <p
              class="margin-2-5 no-margin-bottom no-margin-rl title-extra-large-3"
            >
              I'm <span class="text-color">{{ fullname }}</span> a
              {{ occupation }} with {{ years_experience }} years of professional
              experience, currently living
              <span class="text-color">and</span> working in
              <span class="text-color">{{ location }}</span
              >.
            </p>

            <p
              class="margin-5 no-margin-bottom no-margin-rl title-extra-large-3"
            >
              In the last few years I worked and
              <span class="text-color">collaborated</span> with agencies such as
              {{ agencies }} & many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    fullname: {
      type: String
    },
    occupation: {
      type: String
    },
    years_experience: {
      type: String
    },
    location: {
      type: String
    },
    contract: {
      type: Array
    }
  },
  computed: {
    agencies() {
      return this.contract.join(", ");
    }
  }
};
</script>
