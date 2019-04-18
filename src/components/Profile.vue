<template>
  <section id="profile" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Personal Info
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <div class="profile-image">
              <div class="image-wraper display-inline-block position-relative">
                <img :src="avatar" alt="" class="img-responsive" />
              </div>
            </div>
          </div>

          <div class="col-md-7">
            <div class="profile-detail position-relative width-100">
              <div class="inner-content">
                <ul class="list-unstyled text-small text-uppercase">
                  <li>
                    <label class="background-color text-white">Name</label>
                    <span class="font-family-alt text-medium">{{
                      fullname
                    }}</span>
                  </li>

                  <li>
                    <label class="background-color text-white">Birthday</label>
                    <span class="font-family-alt text-medium">{{ DOB }}</span>
                  </li>

                  <li>
                    <label class="background-color text-white">Address</label>
                    <span class="font-family-alt text-medium">{{
                      address
                    }}</span>
                  </li>

                  <li>
                    <label class="background-color text-white">Phone</label>
                    <span class="font-family-alt text-medium">{{
                      mobile
                    }}</span>
                  </li>

                  <li>
                    <label class="background-color text-white">Email</label>
                    <span class="font-family-alt text-medium">{{ email }}</span>
                  </li>

                  <li>
                    <label class="background-color text-white"
                      >Nationality</label
                    >
                    <span class="font-family-alt text-medium">{{
                      nationality
                    }}</span>
                  </li>
                </ul>
              </div>

              <span class="line"></span>
            </div>

            <div class="btn-resume-download text-center position-relative">
              <a :href="resume" class="display-block">
                <i
                  class="ion-ios-download-outline background-color btn-shadow display-inline-block text-white title-large position-absolute"
                ></i>
                <span
                  class="display-inline-block font-weight-600 text-color text-large text-uppercase position-absolute"
                  >Download Resume</span
                >
              </a>
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
    avatar: {
      type: String
    },
    fullname: {
      type: String
    },
    DOB: {
      type: String
    },
    address: {
      type: String
    },
    mobile: {
      type: String
    },
    email: {
      type: String
    },
    nationality: {
      type: String
    },
    resume: {
      type: String
    }
  }
};
</script>
