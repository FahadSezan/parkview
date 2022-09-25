<template>
    <DoctorTopNav />
    <div class="container-fluid  secondary-color-2">
        <div class="row px-4">
            <div class="col-lg-2 border-end border-dark py-3">
                <div class="card py-2 b-r">
                    <img src="@/assets/background/dr.png" class="card-img-top img-fluid p-2 doctor-img mx-auto mb-0"
                        alt="...">
                    <div class="card-body text-center py-0">
                        <p class="mb-0 font-14 fw-bold">DR. A. S. M. ZAHED</p>
                        <p class="mb-0 font-10">MBBS, FCPS (Medicine)</p>
                        <p class="mb-0 font-10">Associate Professor, Medicine</p>
                        <p class="mb-1 font-10">Chattogram Medical College</p>
                        <div class=" w-75 text-white blue-color rounded-pill px-4 font-12 py-1 mx-auto">Medicine</div>
                    </div>
                </div>
                <div class="card my-2 px-3 py-2">
                    <div class="row">
                        <div class="col-lg-9 fw-bold my-auto font-14">
                            Start Consultancy
                        </div>
                        <div class="col-lg-3 my-auto">
                            <div class="switch my-2" onclick="this.classList.toggle('active');"></div>
                        </div>
                    </div>
                </div>
                <div class="card my-2 px-3 py-3">
                    <p class="font-12 mb-0">Room Number</p>
                    <p class="underline-1 font-14 fw-bold">{{roomNo}}</p>
                    <p class="font-12 mb-0">Consultancy Fee</p>
                    <p class="underline-1 font-14 fw-bold">{{consultFee}} BDT</p>
                    <p class="font-12 mb-0">Max. Appoinment</p>
                    <p class="underline-1 font-14 fw-bold">{{maxAppo}}</p>
                    <p class="font-12 mb-0">Min. Consultancy Period</p>
                    <p class="underline-1 mb-0 font-14 fw-bold">{{minconPeriod}} min</p>
                </div>
                <div class="card my-2 px-3 py-2">
                    <div class="row">
                        <div class="col-lg-9 fw-bold my-auto font-14">
                            Availability
                        </div>
                        <div class="col-lg-3 my-auto">
                            <div class="switch my-2" onclick="this.classList.toggle('active');"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 px-4 py-3">
                <div class="card rounded-0 p-a-h">
                    <div class="card-title px-2 py-2 mb-0 fw-bold">Today's patient Appoinmnet</div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 btn border rounded-0 p border-start-0 active"
                                :style="{'background-color':activeColor}" @click="penDingch">
                                <p class="text-center  my-auto">
                                    Pending</p>
                            </div>
                            <div class="col-lg-6 btn border rounded-0 p border-end-0"
                                :style="{'background-color':activeColor}" @click="compleTedch">
                                <p class="text-center my-auto">Completed</p>
                            </div>
                        </div>
                    </div>
                    <!-- overflow-auto -->
                    <div class="row scrollbar-s px-3">
                        <div class="col-lg-12">
                            <div class="" v-if="penDing">
                                <div class="container px-4 py-2 ">

                                    <div v-for="pendingAppo in pendingAppos" :key="pendingAppo.id" class="row my-2 py-2 underline-2">
                                        <div class="col-lg-1 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">{{pendingAppo.serial}}</p>
                                        </div>
                                        <div class="col-lg-3 px-1 py-0">
                                            <p class="text-start my-auto px-0 py-2">{{pendingAppo.name}}</p>
                                        </div>
                                        <div class="col-lg-2 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">Age:{{pendingAppo.age}}</p>
                                        </div>
                                        <div class="col-lg-3 px-2 py-0">
                                            <div
                                                class="btn btn-warning w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0">
                                                On going</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Skip</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Hold</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Done</div>
                                        </div>
                                    </div>


                                    <div class="row my-2 py-2 underline-2">
                                        <div class="col-lg-1 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">12</p>
                                        </div>
                                        <div class="col-lg-3 px-1 py-0">
                                            <p class="text-start my-auto px-0 py-2">Emon Paul</p>
                                        </div>
                                        <div class="col-lg-2 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">Age: 26</p>
                                        </div>
                                        <div class="col-lg-3 px-2 py-0">
                                            <div
                                                class="btn blue-color w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0">
                                                Next</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Skip</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Hold</div>
                                        </div>
                                        <div class="col-lg-1 px-2 py-0">
                                            <div
                                                class="btn btn-success w-100 rounded-0 text-white fw-bold px-0 py-2 my-auto mb-0 ">
                                                Done</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="" v-if="compleTed">
                                <div class="container px-4 py-2 ">
                                    <div v-for="completedAppo in completedAppos" :key="completedAppo.id" class="row my-2 underline-2 py-2">
                                        <div class="col-lg-1 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">{{completedAppo.serial}}</p>
                                        </div>
                                        <div class="col-lg-6 px-1 py-0 ">
                                            <p class="text-start my-auto px-0 py-2">{{completedAppo.name}}</p>
                                        </div>
                                        <div class="col-lg-2 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">Age: {{completedAppo.age}}</p>
                                        </div>
                                        <div class="col-lg-3 px-2 py-0 ">
                                            <div
                                                class="btn btn-warning w-100 rounded-pill text-white fw-bold px-0 py-2 my-auto mb-0">
                                                Completed</div>
                                        </div>
                                    </div>
                                    <!-- <div class="row my-2 underline-2 py-2">
                                        <div class="col-lg-1 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">12</p>
                                        </div>
                                        <div class="col-lg-6 px-1 py-0 ">
                                            <p class="text-start my-auto px-0 py-2">Hasibul Hamid</p>
                                        </div>
                                        <div class="col-lg-2 px-1 py-0">
                                            <p class="text-center my-auto px-0 py-2">Age: 25</p>
                                        </div>
                                        <div class="col-lg-3 px-2 py-0 ">
                                            <div
                                                class="btn btn-warning w-100 rounded-pill text-white fw-bold px-0 py-2 my-auto mb-0">
                                                Completed</div>
                                        </div>
                                    </div> -->

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-lg-2 py-3">
                <div class="card rounded-0">
                    <div class="mb-0 fw-bold px-3 py-3">
                        <p class="fs-4 mb-0">{{todayAppo}}</p>
                        <p class="font-14 mb-0">Today's appoinment</p>
                    </div>
                    <div class=" underline-2 px-0"></div>
                    <div class="mb-0 fw-bold px-3 py-3">
                        <p class="fs-4 mb-0">{{totalAppo}}</p>
                        <p class="font-14 mb-0">Total appoinment</p>
                    </div>
                </div>
                <div class="card rounded-0 mt-2 mb-0 app-card-h">
                    <div class="card-header mb-0">
                        <p class="font-12 fw-bold mb-0 my-auto text-muted">Next 7 days appoinmnet</p>
                    </div>
                    <div class="card-body scrollbar-s py-2 mb-0">


                        <div v-for="appo in appos" :key="appo.id" class="border card bg-light my-2">
                            <p class="font-12 mb-0 px-3 pt-2 pb-1 text-warning">{{appo.date}}</p>
                            <div class="underline-2 mb-0"></div>
                            <div class="d-flex justify-content-between px-3 pb-2 pt-1">
                                <p class="font-12 mb-0">Morning:{{appo.morning}}</p>
                                <p class="font-12 mb-0">Evening:{{appo.evening}}</p>
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
            penDing: true,
            compleTed: false,
            activeColor: '',
            roomNo: '308',
            consultFee: '1000',
            maxAppo: '30',
            minconPeriod: '10',
            todayAppo: '16',
            totalAppo: '517',
            appos: null,
            pendingAppos: null,
            completedAppos: null,
        };
    },
    methods: {
        penDingch() {
            this.penDing = true;
            this.compleTed = false;
            // this.activeColor = '#195972!important'
        },
        compleTedch() {
            this.penDing = false;
            this.compleTed = true;
            // this.activeColor = '#195972!important'
        },
    },
    mounted() {
        fetch('http://localhost:3000/sevenAppo')
            .then(res => res.json())
            .then(data => this.appos = data)
            .catch(err => console.log(err.message))

        fetch('http://localhost:3000/pendingAppo')
            .then(res => res.json())
            .then(data => this.pendingAppos = data)
            .catch(err => console.log(err.message))
        fetch('http://localhost:3000/completedAppo')
            .then(res => res.json())
            .then(data => this.completedAppos = data)
            .catch(err => console.log(err.message))
    },




    name: "doctordashboard",
    components: { DoctorTopNav },
}
</script>