<template>
    <transition name="modal-animation">
        <div v-show="modalChooseActive" class="modal-a">
            <transition name="modal-animation-inner">
                <div v-show="modalChooseActive" class="modal-inner-a">
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
                                                <img src="@\assets\background\doctorgroup.png"
                                                    class="img-fluid my-auto p-0" alt="" />
                                            </div>
                                        </div>
                                        <div class="row my-5">
                                            <div class="container px-5">

                                                <div class="my-2 mb-4 scrollbar-s manual-modal-height">
                                                    <div class="container">
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">1
                                                                    </p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">
                                                                        10:00 AM - 10:15 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">2
                                                                    </p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">
                                                                        10:15 AM - 10:30 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">3
                                                                    </p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">
                                                                        10:30 AM - 10:45 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">4
                                                                    </p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color-light py-2 mb-0">
                                                                        10:45 AM - 11:00 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border secondary-color-2 py-2 mb-0">5
                                                                    </p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border secondary-color-2 py-2 mb-0">
                                                                        11:00 AM - 11:15 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color py-2 mb-0">6</p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color py-2 mb-0">11:15
                                                                        AM - 11:30 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color py-2 mb-0">7</p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color py-2 mb-0">11:30
                                                                        AM - 11:45 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <button class="btn w-100 border-0 p-0 my-2">
                                                            <div class="row text-dark fw-light text-center p-0 mb-0">
                                                                <div class="col-lg-3 ">
                                                                    <p class="border yellow-color py-2 mb-0">8</p>
                                                                </div>
                                                                <div class="col-lg-9 ">
                                                                    <p class="border yellow-color py-2 mb-0">11:45
                                                                        AM - 12:00 AM</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button class="btn w-100 blue-color text-white my-5"
                                                    data-bs-dismiss="modal">
                                                    Confirm Schedule
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
    
    props: ['modalChooseActive'],
    setup(props, { emit }) {
        const close = () => {
            emit('close');
        };
        return { close };
    },
};
</script>

  