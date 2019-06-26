<template>
  <!-- SECTION - CONTACT START -->
  <section id="contact" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Get in Touch
              </h2>
            </div>

            <div class="contact position-relative width-100">
              <div class="col col-1">
                <div class="display-table height-100">
                  <div class="display-table-cell vertical-align-middle">
                    <p class="title-medium">
                      I <span class="text-color">love</span> to make new
                      contacts with <span class="text-color">new people</span>.
                    </p>

                    <p
                      class="margin-5 no-margin-bottom no-margin-rl title-medium"
                    >
                      Thank you for coming. Hope you had a little
                      <span class="text-color">nice time</span> here :)
                    </p>

                    <p
                      class="margin-5 no-margin-bottom no-margin-rl title-medium"
                    >
                      Have a good day!
                    </p>
                  </div>
                </div>
              </div>

              <div class="col col-2">
                <div class="display-table height-100">
                  <div class="display-table-cell vertical-align-middle">
                    <h3 class="text-uppercase title-small">
                      <span class="font-weight-700">Contact</span>
                      Information
                    </h3>

                    <div class="contact-detail clearfix">
                      <!-- <div class="address pull-left">
                        <h4
                          class="font-weight-700 text-color text-medium text-uppercase"
                        >
                          Address
                        </h4>

                        <ul class="font-family-alt list-unstyled text-medium">
                          <li v-for="(item, index) in myaddress" :key="index">
                            {{ item }}
                          </li>
                        </ul>
                      </div> -->

                      <div class="contact-info">
                        <h4
                          class="font-weight-700 text-color text-medium text-uppercase"
                        >
                          Contact
                        </h4>

                        <ul class="font-family-alt list-unstyled text-medium">
                          <li>{{ email }}</li>
                          <li>{{ mobile }}</li>
                        </ul>
                      </div>
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
    email: {
      type: String
    },
    address: {
      type: String
    },
    mobile: {
      type: String
    }
  },
  computed: {
    myaddress() {
      const address = this.address;
      return address.split(",");
    }
  }
};
</script>
