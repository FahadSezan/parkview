<template>
  <transition name="modal-animation">
    <div v-show="modalReminderActive" class="modal-a">
      <transition name="modal-animation-inner">
        <div v-show="modalReminderActive" class="modal-inner-a">
          <div class="row">
            <div class="col-lg-12">
              <i @click="close" class="fa-solid fa-xmark ps-2 close-btn p"></i>
              <!-- Modal Content -->
              <div class="modal-content-a">
                <div class="row px-3">
                  <div class="col-lg-12">
                    <p class="m-0 fs-6 text-dark mt-2 px-2 py-2">
                      <strong>Reminder</strong>
                    </p>

                    <div class="my-3">
                      <div class="modal-body py-0 px-2">
                        <div class="border px-4 py-3 b-r secondary-color-2 my-2">
                          <p class="mb-0 font-14 text-yellow">It's your schedule</p>
                          <p class="mb-0 font-12">Confirm your presence within time. Please come to doctor's chamber.
                          </p>
                          <p class="mb-0 font-10">6:50pm , 1/09/2022</p>
                        </div>
                        <div class="border px-4 py-3 b-r secondary-color-2 my-2">
                          <p class="mb-0 font-14 text-yellow">1 Person left</p>
                          <p class="mb-0 font-12">Confirm your presence within time.</p>
                          <p class="mb-0 font-10">6:50pm , 1/09/2022</p>
                        </div>
                        <div class="border px-4 py-3 b-r secondary-color-2 my-2">
                          <p class="mb-0 font-12"><strong>DR. A. S. M. ZAHED</strong> Started his consultancy period at
                            5:30pm</p>
                          <p class="mb-0 font-10">6:50pm , 1/09/2022</p>
                        </div>
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
  props: ['modalReminderActive'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };
    return { close };
  },
};
</script>

  