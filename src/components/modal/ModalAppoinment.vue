<template>
  <transition name="modal-animation">
    <div v-show="modalAppoinmentActive" class="modal-a">
      <transition name="modal-animation-inner">
        <div v-show="modalAppoinmentActive" class="modal-inner-a">
          <div class="row">
            <div class="col-lg-12">
              <i @click="close" class="fa-solid fa-xmark ps-2 close-btn p"></i>
              <!-- Modal Content -->
              <div class="modal-content-a">
                <div class="row px-3">
                  <div class="col-lg-12">
                    <p class="m-0 fs-6 text-dark mt-2 px-4 py-2">
                      <strong>Choose Your Appointment Schedule</strong>
                    </p>
                    <div class="row border-bottom px-4">
                      <div class="col-lg-6 my-auto">
                        <p class="mb-0 text-dark">DR. A. S. M. ZAHED</p>
                        <p class="mb-0 font-10">MBBS, FCPS(Medicine)</p>
                        <p class="mb-0 font-10">Associate Professor,Medicine</p>
                        <p class="mb-0 font-10">Chattagram Medical College</p>
                      </div>
                      <div class="col-lg-6">
                        <img src="@\assets\background\doctorgroup.png" class="img-fluid my-auto p-0" alt="" />
                      </div>
                    </div>
                    <div class="row my-5">
                      <div class="container px-5">
                        <img src="@/assets/background/otp.png" class="rounded mx-auto d-block mt-5 otp-logo" alt="...">
                        <div class="mx-auto text-center fw-light">
                          <p class="mb-0">We sent a 4-digit code to your mobile number</p>
                          <p>+880 1765551768</p>
                          <div class="mb-5">
                            <div class="row">
                              <div class="col-lg-3">
                                <input type="text"
                                  class="form-control form-control-sm shadow-none border-0 text-center secondary-color-2 py-2"
                                  readonly id="" placeholder="">
                              </div>
                              <div class="col-lg-3">
                                <input type="text"
                                  class="form-control form-control-sm shadow-none border-0 text-center secondary-color-2 py-2"
                                  readonly id="" placeholder="">
                              </div>
                              <div class="col-lg-3">
                                <input type="text"
                                  class="form-control form-control-sm shadow-none border-0 text-center secondary-color-2 py-2"
                                  readonly id="" placeholder="">
                              </div>
                              <div class="col-lg-3">
                                <input type="text"
                                  class="form-control form-control-sm shadow-none border-0 text-center secondary-color-2 py-2"
                                  readonly id="" placeholder="">
                              </div>
                            </div>
                          </div>

                        </div>
                        <button class="btn w-100 blue-color text-white my-5 " data-bs-dismiss="modal">
                          Confirm Appoinment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['modalAppoinmentActive'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };
    return { close };
  },
};
</script>

  