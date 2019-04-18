<template>
  <div>
    <div class="wrapper">
      <section id="home" class="section display-table no-padding-tb width-100">
        <div class="section-content display-table-cell vertical-align-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="font-weight-700 text-uppercase title-big">
                  <span class="text-color">Hello</span> world.<br />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <introduction
        :fullname="fullname"
        :occupation="occupation"
        :years_experience="years_experience"
        :location="location"
        :contract="contract"
      />

      <profile
        :avatar="avatar"
        :fullname="fullname"
        :DOB="DOB"
        :address="address"
        :mobile="mobile"
        :email="email"
        :nationality="nationality"
        :resume="resume"
      />

      <services :services="skills" />

      <experience :professional_experience="professional_experience" />

      <education :education="education" />

      <skills :technical_skills="technical_skills" />

      <projects :projects="projects" />

      <process />

      <contact />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "avatar",
      "fullname",
      "DOB",
      "occupation",
      "years_experience",
      "mobile",
      "email",
      "address",
      "location",
      "nationality",
      "resume",
      "contract",
      "skills",
      "professional_experience",
      "education",
      "technical_skills",
      "projects",
      "work_process"
    ])
  }
};
</script>
