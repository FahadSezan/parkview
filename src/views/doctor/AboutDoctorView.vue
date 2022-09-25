<template>
    <DoctorTopNav />
    <div class="container-fluid secondary-color-2 py-4 ad-height">
        <div class="row justify-content-center ">
            <div class="col-lg-6">
                <div class="card rounded-0">
                    <div class="d-flex card-header bg-white border-bottom border-1 border-dark">
                        <img src="@/assets/background/dr.png" class="card-img-top img-fluid p-2 doctor-img-2 mb-0"
                            alt="...">
                        <div class="text-start my-auto mx-3">
                            <p class="mb-0 font-14 fw-bold">DR. A. S. M. ZAHED</p>
                            <p class="mb-0 font-10">MBBS, FCPS (Medicine)</p>
                            <p class="mb-0 font-10">Associate Professor, Medicine</p>
                            <p class="mb-2 font-10">Chattogram Medical College</p>
                            <div class="btn text-white blue-color rounded-pill px-4 font-12 py-0 ">Medicine</div>
                        </div>
                    </div>
                    <div class="card-title mb-0 bg-light py-2">
                        <div class="d-flex">
                            <div class="mx-2 px-2 p" @click="genInfo">
                                <p class="mb-0">General Info</p>
                            </div>
                            <div class="mx-4 px-2 p" @click="docInfo">
                                <p class="mb-0">Doctor Info</p>
                            </div>
                            <div class="mx-2 px-2 p" @click="availaBility">
                                <p class="mb-0">Availability</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body ad-card-height">
                        <div class="row">
                            <div class="col-lg-12 ">
                                <div class="" v-if="gen">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8 pb-2">
                                                <label for="" class="form-label mb-0 fw-bold font-14">Room
                                                    number</label>
                                                <input type="text"
                                                    class="form-control shadow-none my-2 border-dark rounded-0 bg-light"
                                                    id="" placeholder="" readonly>
                                                <label for="" class="form-label mb-0 fw-bold font-14">Consultancy
                                                    Fee</label>
                                                <input type="text"
                                                    class="form-control shadow-none my-2 border-dark rounded-0" id=""
                                                    placeholder="">
                                                <label for="" class="form-label mb-0 fw-bold font-14">Maximum
                                                    Consultancy</label>
                                                <input type="text"
                                                    class="form-control shadow-none my-2 border-dark rounded-0" id=""
                                                    placeholder="">
                                                <label for="" class="form-label mb-0 fw-bold font-14">Minimum
                                                    Consultancy Period</label>
                                                <input type="text"
                                                    class="form-control shadow-none my-2 border-dark rounded-0" id=""
                                                    placeholder="">

                                                <div
                                                    class="btn text-white blue-color w-100 rounded-0 shadow-none mt-5 mb-3">
                                                    Update
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="" v-if="doc">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8 pb-2">
                                                <label for="" class="form-label mb-0 fw-bold font-14">Dr. Name</label>
                                                <input type="name"
                                                    class="form-control shadow-none my-2 border-dark bg-light rounded-0" id=""
                                                    placeholder="" readonly>
                                                <label for=""
                                                    class="form-label mb-0 fw-bold font-14">Qualification</label>
                                                <textarea class="form-control shadow-none my-2 border-dark rounded-0"
                                                    id="exampleFormControlTextarea1" rows="2"></textarea>
                                                <label for="" class="form-label mb-0 fw-bold font-14">Email</label>
                                                <input type="email"
                                                    class="form-control shadow-none my-2 border-dark rounded-0" id=""
                                                    placeholder="">
                                                <label for="" class="form-label mb-0 fw-bold font-14">Password</label>
                                                <div class="container mt-2 mb-0">
                                                    <div class="row border-0 py-0 px-2 b-r bg-light">
                                                        <div class="col-lg-8 p-0">
                                                            <input type="text"
                                                                class="form-control shadow-none border-0 rounded-0 bg-light"
                                                                id="" placeholder="********">
                                                        </div>
                                                        <div class="col-lg-4 my-auto p-0 text-end ">
                                                            <router-link to="" class="px-2 font-12 border-bottom ">
                                                                Change password
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="btn text-white blue-color w-100 rounded-0 shadow-none mt-5 mb-3">
                                                    Update
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="" v-if="available">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8 pb-2 py-5">
                                                <div class="card bg-light border-0 p-2">
                                                    <div class="card-body">
                                                        <p class="fw-bold font-14 mb-0">Unavailable Period</p>
                                                        <div class="form-check my-2">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1">
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                Single Day
                                                            </label>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-5">
                                                                <select
                                                                    class="form-select form-select-sm border-dark shadow-none w-100"
                                                                    aria-label=".form-select-sm example">
                                                                    <option selected></option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-lg-5">
                                                                <input type="date"
                                                                    class="form-control form-control-sm border-dark shadow-none w-100"
                                                                    id="" placeholder="">
                                                            </div>
                                                            <div class="col-lg-2">
                                                            </div>
                                                        </div>
                                                        <div class="form-check my-2">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1">
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                More Day
                                                            </label>
                                                        </div>
                                                        <div class="row my-2">
                                                            <div class="col-lg-4">
                                                                <select
                                                                    class="form-select-sm border-dark shadow-none w-100"
                                                                    v-model="daySelect">
                                                                    <option value="">Day</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>

                                                            <div class="col-lg-8 d-flex my-auto">
                                                                <input type="date"
                                                                    class="form-control form-control-sm border-dark shadow-none w-100"
                                                                    v-model="startTime" />
                                                                <i class="fa-solid fa-minus mx-2  my-auto"></i>
                                                                <input type="date"
                                                                    class="form-control form-control-sm border-dark shadow-none w-100"
                                                                    v-model="startTime" />
                                                            </div>
                                                        </div>
                                                        <div class="row my-2 my-auto">
                                                            <div class="col-lg-4">
                                                                <select
                                                                    class="form-select-sm border-dark shadow-none w-100"
                                                                    v-model="daySelect">
                                                                    <option value="">Day</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>

                                                            <div class="col-lg-8 d-flex my-auto">
                                                                <input type="date"
                                                                    class="form-control form-control-sm border-dark shadow-none w-100"
                                                                    v-model="startTime" />
                                                                <i class="fa-solid fa-minus mx-2  my-auto"></i>
                                                                <input type="date"
                                                                    class="form-control form-control-sm border-dark shadow-none w-100"
                                                                    v-model="startTime" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="btn text-white blue-color w-100 rounded-0 shadow-none mt-5 mb-3">
                                                    Update
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
        </div>
    </div>
</template>

<script>
import DoctorTopNav from '@/components/DoctorTopNav.vue';
export default {

    data() {
        return {
            gen: true,
            doc: false,
            available: false,
        };
    },
    methods: {
        genInfo() {
            this.gen = true;
            this.doc = false;
            this.available = false;
        },
        docInfo() {
            this.gen = false;
            this.doc = true;
            this.available = false;
        },
        availaBility() {
            this.gen = false;
            this.doc = false;
            this.available = true;
        },
    },










    name: "aboutdoctor",
    components: { DoctorTopNav },
}
</script>