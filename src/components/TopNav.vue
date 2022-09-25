<template>
    <!-- Reminder modal -->
    <ModalReminder :modalReminderActive="modalReminderActive" @close="toggleModalreminder"/>

    <!-- Nav -->
    <nav class="navbar navbar-expand-lg sticky-top nav-shadow">
        <div class="container-fluid ">
            <router-link to="/patientdashboard" class="navbar-brand">
                <img src="@/assets/logo/parkview.webp" class="img-fluid patient-dashboard-hospital-logo" alt=""
                    srcset="">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse row " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto col-lg-8 ">
                    <li class="nav-item">
                        <router-link to="/department"
                            class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/doctor.png" class="img-fluid nav-link-icon-width" alt=""
                                        srcset="">
                                </div>
                                <div class="col-lg-10 p-0">
                                    Doctor list
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <button type="button" class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                            <div class="row">
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/ringing.png" class="img-fluid nav-link-icon-width" alt=""
                                        srcset="">
                                </div>
                                <div class="col-lg-10 p-0">
                                    Reminder
                                </div>
                            </div>
                        </button> -->
                        <button type="button" class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none"
                            @click="toggleModalreminder">
                            <div class="row">
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/ringing.png" class="img-fluid nav-link-icon-width" alt=""
                                        srcset="">
                                </div>
                                <div class="col-lg-10 p-0">
                                    Reminder
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto col-lg-4">
                    <li class="nav-item nav-user-btn">
                        <router-link to="/userinfo" class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">

                                <div class="col-lg-10 p-0 text-end">
                                    <p class="my-auto">Md Asiful riyad chawdhury</p>
                                </div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/doctor.png" class="img-fluid nav-link-icon-width my-auto"
                                        alt="" srcset="">
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/patient_login"
                            class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-10 p-0">
                                    Log-out
                                </div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/logout.png" class="img-fluid nav-link-icon-width mx-1"
                                        alt="" srcset="">
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- modal -->
    <!-- <div class="modal fade manual-modal" id="staticBackdrop3" data-bs-backdrop="false" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdrop3Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content px-3 modal-content-width rounded-0">
                <div class="row mt-3 border-bottom">
                    <div class="col-lg-1">
                        <button type="button" class="btn-close btn-white manual-modal-close mb-0 shadow-none"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="col-lg-11">
                        <p class="text-dark text-start font-18 ">Reminder</p>
                    </div>
                </div>
                <div class="modal-body py-0">
                    <div class="border px-4 py-3 b-r secondary-color-2 my-2">
                        <p class="mb-0 font-14 text-yellow">It's your schedule</p>
                        <p class="mb-0 font-12">Confirm your presence within time. Please come to doctor's chamber.</p>
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
    </div> -->
</template>

<script>

import { ref } from 'vue';
import ModalReminder from './modal/ModalReminder.vue';
export default {

    data() {

        return {
            appoHis: null
        }
    },
    // Appoinment
    setup() {
        
        const modalReminderActive = ref(false);
        
        const toggleModalreminder = () => {
            modalReminderActive.value = !modalReminderActive.value;
        };
        return { modalReminderActive, toggleModalreminder };

    },
    // mounted() {
    //     fetch('http://localhost:3000/appoHistory')
    //         .then(res => res.json())
    //         .then(data => this.appoHis = data)
    //         .catch(err => console.log(err.message))
    // },

    name: 'TopNav',
    components: { ModalReminder }
}
</script>