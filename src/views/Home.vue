<template>
  <div>
    <!-- WRAPPER START -->
    <div class="wrapper">
      <!-- SECTION - HOME START -->
      <section id="home" class="section display-table no-padding-tb width-100">
        <div class="section-content display-table-cell vertical-align-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="font-weight-700 text-uppercase title-big">
                  <span class="text-color">Hello</span> world.<br />
                </h2>
              </div>
              <!-- //.col-md-12 -->
            </div>
            <!-- //.row -->
          </div>
          <!-- //.container -->
        </div>
        <!-- //.section-content -->
      </section>
      <!-- //SECTION - HOME END -->

      <introduction />

      <profile />

      <services />

      <experience />

      <education />

      <skills />

      <projects />

      <process />

      <contact />
    </div>
    <!-- //WRAPPER END -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
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
    };
  }
};
</script>
