<template>
  <section id="services" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                What Can I Do
              </h2>
            </div>
            <div
              v-for="(group, index) in myservices"
              :key="index"
              class="services position-relative text-center width-100"
            >
              <div
                v-for="(service, no) in group"
                :key="no"
                class="item display-inline-block"
                :class="[
                  !group[no + 1] || no === 3
                    ? 'no-border no-circle position-absolute'
                    : no === 1
                    ? 'rotate-180 position-relative'
                    : 'position-relative'
                ]"
              >
                <span
                  class="circle background-color btn-shadow letter-spacing-1 position-absolute text-center text-white text-large"
                  >0{{ 4 * index + no + 1 }}</span
                >
                <label
                  class="display-inline-block text-medium text-uppercase position-absolute"
                  :class="[(no + 1) % 2 === 0 ? 'text-bottom' : '']"
                  >{{ service }}</label
                >
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
    services: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    myservices() {
      const services = this.services;
      const myservices = [];
      while (services.length) myservices.push(services.splice(0, 4));
      return myservices;
    }
  }
};
</script>
