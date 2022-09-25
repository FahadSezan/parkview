<template>
    <TopNav />
    <!-- choose modal -->
    <ModalChooseVue :modalChooseActive="modalChooseActive" @close="toggleModalchoose">
    </ModalChooseVue>
    <ModalAppoinmentVue :modalAppoinmentActive="modalAppoinmentActive" @close="toggleModalappoinment">
    </ModalAppoinmentVue>
    <div class="container-fluid">
        <div class="row ">
            <div class="col-lg-8">
                <div class="container">
                    <img src="@/assets/background/15.png" class="card-img-top my-3 mt-4 b-r slide-img"
                         alt="...">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="border px-5 py-3 b-r paste-color-1">
                                <div class="row px-5">
                                    <div class="col-lg-6">
                                        <img src="@/assets/icon/support.png" class="img-fluid l-t-img" alt="" srcset="">
                                    </div>
                                    <div class="col-lg-6">
                                        <p class="mb-0">Live Talk</p>
                                        <p class="mb-0">01976-022333</p>
                                        <p class="mb-0">01976-022111</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="border px-5 py-3 b-r paste-color-1">
                                <div class="row px-5">
                                    <div class="col-lg-6">
                                        <img src="@/assets/icon/siren.png" class="img-fluid l-t-img" alt="" srcset="">
                                    </div>
                                    <div class="col-lg-6">
                                        <p class="mb-0">Ambulance</p>
                                        <p class="mb-0">01976-022333</p>
                                        <p class="mb-0">01976-022111</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 my-3 ">
                        <div class="card-header blue-color border-top-left-right text-white px-4 py-2 mb-0">
                            Appoinment History
                        </div>
                        <div
                            class="card-body secondary-color-2  scrollbar-s border-bottom-left-right app-height py-0 px-0">
                            <div class="py-2 mb-0  bg-light container-fluid ">
                                <div class="row ">
                                    <div class="col-lg-3">
                                        <h6 class="px-3 mb-0">Doctor info</h6>
                                    </div>
                                    <div class="col-lg-2">
                                        <h6 class="px-4 mb-0">Room No</h6>

                                    </div>
                                    <div class="col-lg-2">
                                        <h6 class="px-4 mb-0">Serial No</h6>

                                    </div>
                                    <div class="col-lg-3">
                                        <h6 class="px-3 mb-0">Appointment date</h6>

                                    </div>
                                    <div class="col-lg-2">
                                        <h6 class="px-4 mb-0">Status</h6>

                                    </div>
                                </div>
                            </div>

                            <div v-for="appoHist in appoHis" :key="appoHist.id" class="row my-2 py-3 px-4 black-dashed">
                                <div class="col-lg-3">
                                    <p class="mb-0 fs-6 fw-bold">{{appoHist.name}}</p>
                                    <p class="mb-0 font-10">{{appoHist.degree}}</p>
                                    <p class="mb-0 font-10">{{appoHist.designation}}</p>
                                    <p class="mb-0 font-10">{{appoHist.institute}}</p>
                                </div>
                                <div class="col-lg-2 my-auto p-0">
                                    <div
                                        class="border text-center p-0 rounded-pill blue-color py-1 text-white font-14 w-75">
                                        <img src="@/assets/icon/open-door.png" class="img-fluid door-width" alt=""
                                            srcset=""> {{appoHist.room}}
                                    </div>
                                </div>
                                <div class="col-lg-2 my-auto">
                                    <div
                                        class="border text-center w-75 rounded-pill blue-color py-1 text-white font-14">
                                        SL: {{appoHist.serialNo}}
                                    </div>
                                </div>
                                <div class="col-lg-3 my-auto">
                                    <div
                                        class="border text-center w-75 fw-bold font-18 py-1 green-color text-white b-r">
                                        <p class="mb-0 white-dashed">{{appoHist.appoDate}}</p>
                                        <p class="mb-0">{{appoHist.appoTime}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-2 my-auto">
                                    <div
                                        class="border-0 text-center btn w-100 rounded-pill bg-white text-muted py-2 text-white font-14 fw-bold shadow-none">
                                        <p class="mb-0">{{appoHist.status}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-0 my-4">
                    <div
                        class="card-header border-top-left-right paste-color-2 text-white py-2 d-flex justify-content-center">
                        <img src="@/assets/icon/appoint.png" class="img-fluid appoinment-width" alt="">
                        <p class="my-auto mx-2 fs-6 fw-bold">Make An
                            Appoinment</p>
                    </div>
                    <div
                        class="card-body secondary-color-2 border-top text-muted fw-bold font-14 py-3 border-bottom-left-right px-4">
                        <div class=" mb-2">
                            <label for="" class="form-label mb-0">Patient Name</label>
                            <input type="name" class="form-control form-control-sm shadow-none" id="" placeholder="">
                        </div>

                        <div class="row my-2">
                            <div class="col-lg-6">
                                <label for="" class="form-label mb-0">Contact number</label>
                                <input type="text" class="form-control form-control-sm shadow-none" id=""
                                    placeholder="">
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="form-label mb-0">Age</label>
                                <input type="text" class="form-control form-control-sm shadow-none" id=""
                                    placeholder="">
                            </div>
                        </div>

                        <div class="my-2">
                            <label for="" class="form-label mb-0">Choose Department</label>
                            <select class="form-select form-select-sm shadow-none" aria-label=".form-select-sm example">
                                <option selected></option>
                                <option value="1">MEDICINE</option>
                                <option value="2">CARDIOLOGY</option>
                                <option value="3">GASTROENTEROLOGY</option>
                                <option value="4">ENT</option>
                                <option value="5">GYNAE & OBS</option>
                                <option value="6">NEPHROLOGY</option>
                                <option value="7">ORTHOPEDICS</option>
                                <option value="8">ONCOLOGY</option>
                                <option value="9">PSYCHIATRY</option>
                                <option value="10">PEDIATRICS</option>
                                <option value="11">PHYSICAL MEDICINE</option>
                                <option value="12">SKIN & VD</option>
                                <option value="13">SURGERY</option>
                                <option value="14">UROLOGY</option>
                            </select>
                        </div>
                        <div class="my-2">
                            <label for="" class="form-label mb-0">Choose Doctor</label>
                            <select class="form-select form-select-sm shadow-none" aria-label=".form-select-sm example">
                                <option selected></option>
                                <option value="1">DR. ABDUS SALAM</option>
                                <option value="2">DR. MD ALAMGIR BHUIYAN</option>
                                <option value="3">DR. TAJKERA SULTANA CHOWDHURY</option>
                            </select>
                        </div>


                        <div class="row my-2">
                            <div class="col-lg-6">
                                <label for="" class="form-label mb-0">Appoinment date</label>
                                <input type="date" class="form-control form-control-sm shadow-none" id=""
                                    placeholder="">
                            </div>
                            <div class="col-lg-6">
                                <label for="" class="form-label mb-0">Shift</label>
                                <select class="form-select form-select-sm shadow-none"
                                    aria-label=".form-select-sm example">
                                    <option selected></option>
                                    <option value="1">Morning</option>
                                    <option value="2">Noon</option>
                                    <option value="3">Evening</option>
                                </select>
                            </div>
                        </div>



                        <div class="row mb-0">
                            <div class="col-lg-4">
                                <label for="" class="form-label mb-0">Available serial</label>
                            </div>
                            <div class="col-lg-5">
                                <label for="" class="form-label mb-0">Consultancy period</label>
                            </div>

                            <div class="col-lg-3 my-auto">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-lg-4">
                                <input type="text"
                                    class="form-control form-control-sm shadow-none border-light bg-light" id=""
                                    placeholder="" readonly>
                            </div>
                            <div class="col-lg-5">
                                <input type="text"
                                    class="form-control form-control-sm shadow-none border-light bg-light" id=""
                                    placeholder="" readonly>
                            </div>

                            <div class="col-lg-3 my-auto">
                                <button type="button" class="btn bg-white border my-auto px-2 font-10 shadow-none"
                                    @click="toggleModalchoose">
                                    Choose Manual
                                </button>
                            </div>
                        </div>
                        <div class="my-2">
                            <label for="" class="form-label mb-0">Dr. Overview</label>
                            <div class="border bg-white py-2 px-3">
                                <div class="row">
                                    <div class="col-lg-7 my-auto">
                                        <p class="mb-0 text-dark">DR. A. S. M. ZAHED</p>
                                        <p class="mb-0 font-10">MBBS, FCPS(Medicine)</p>
                                        <p class="mb-0 font-10">Associate Professor,Medicine</p>
                                        <p class="mb-0 font-10">Chattagram Medical College</p>
                                    </div>
                                    <div class="col-lg-5 my-auto ">
                                        <div
                                            class="p-2 blue-color text-white rounded-pill text-center  w-100 font-12 my-2 ">
                                            Room no: 308</div>
                                        <div
                                            class="p-2 green-color text-white rounded-pill text-center  w-100 font-12 my-2 ">
                                            Consultancy: 1000/-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <button type="button" class="btn w-100 blue-color text-white text-center shadow-none mb-1"
                                @click="toggleModalappoinment">
                                Make An Appoinment
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import ModalChooseVue from '@/components/modal/ModalChoose.vue';
import ModalAppoinmentVue from '@/components/modal/ModalAppoinment.vue';
import { ref } from 'vue';
export default {
    data() {

        return {
            appoHis: null
        }
    },
    // Appoinment
    setup() {
        const modalChooseActive = ref(false);
        const modalAppoinmentActive = ref(false);
        const toggleModalchoose = () => {
            modalChooseActive.value = !modalChooseActive.value;
        };
        const toggleModalappoinment = () => {
            modalAppoinmentActive.value = !modalAppoinmentActive.value;
        };
        return { modalChooseActive, toggleModalchoose, modalAppoinmentActive, toggleModalappoinment };

    },
    mounted() {
        fetch('http://localhost:3000/appoHistory')
            .then(res => res.json())
            .then(data => this.appoHis = data)
            .catch(err => console.log(err.message))
    },
    name: "patientdashboard",
    components: { TopNav, ModalChooseVue, ModalAppoinmentVue }
}
</script>