<template>
  <!-- SECTION - WORK PROCESS START -->
  <section id="work-process" class="section no-padding-bottom">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h2
                class="font-weight-700 has-sideline letter-spacing-1 text-medium text-uppercase"
              >
                Work Process
              </h2>
            </div>

            <div class="work-process position-relative text-center width-100">
              <div
                class="item display-inline-block position-relative"
                v-for="(process, index) in work_process"
                :key="index"
              >
                <span
                  class="circle height-100 position-absolute width-100"
                  :class="[(index + 1) % 2 === 0 && 'display-table rotate-180']"
                ></span>

                <div class="display-table height-100 width-100">
                  <label
                    class="display-table-cell font-weight-700 text-center text-medium text-uppercase vertical-align-middle"
                    >0{{ index + 1 }}.<br />{{ process }}</label
                  >
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
    work_process: {
      type: Array
    }
  }
};
</script>
