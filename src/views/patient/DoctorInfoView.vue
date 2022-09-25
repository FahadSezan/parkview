<template>
    <TopNav />
    <div class="secondary-color-3 ad-height">
        <div class="dept-p pt-3">
            <div class="row">
                <div class="col-lg-9">
                    <div class="card  mb-5">
                        <div class="card-title border-bottom">
                            <div class="row p-0 my-auto">
                                <div class="col-lg-2">
                                    <p class="text-dark px-4 py-2 mb-0 fs-5">Doctor list</p>
                                </div>
                                <div class="col-lg-2 my-auto">
                                    <select class="form-select form-select-sm shadow-none rounded-pill px-4"
                                        aria-label=".form-select-sm example">
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
                                <div class="col-lg-8">

                                </div>

                            </div>

                        </div>
                        <div class="card-body mb-0 py-0 px-0 scrollbar-s" style="height: 36rem;">
                            <table class="table table-hover table-responsive text-center">
                                <thead class="blue-color text-white">
                                    <tr>
                                        <th scope="col">Doctors Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Room</th>
                                        <th scope="col">Consultancy Fee</th>
                                        <th scope="col">Available</th>
                                        <th scope="col">Appoinment</th>

                                    </tr>
                                </thead>
                                <tbody class="">
                                    <tr v-for="docList in docLists" :key="docList.id">
                                        <td class="align-middle">{{docList.name}}</td>
                                        <td class="align-middle">
                                            <p class="mb-0 font-12">{{docList.degree}}</p>
                                            <p class="mb-0 font-12">{{docList.designation}}</p>
                                            <p class="mb-0 font-12">{{docList.institute}}</p>
                                        </td>
                                        <td class="align-middle">{{docList.dept}}</td>
                                        <td class="align-middle">{{docList.room}}</td>
                                        <td class="align-middle">{{docList.consultancyFee}} BDT/-</td>
                                        <td class="align-middle">
                                            <p class="mb-0 font-14">{{docList.availableSlotStart}} - {{docList.availableSlotEnd}}</p>
                                            <p class="mb-0 font-12">({{docList.days}})</p>
                                        </td>
                                        <td class="align-middle">

                                            <router-link to="/patientdashboard"
                                                class="btn rounded-pill green-color font-12 text-white py-1 shadow-none">
                                                Make now</router-link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <RightSideBar />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import RightSideBar from '@/components/RightSideBar.vue';
export default {
    data() {

        return {
            docLists: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/docList')
            .then(res => res.json())
            .then(data => this.docLists = data)
            .catch(err => console.log(err.message))
    },




    name: "doctorinfo",
    components: { TopNav, RightSideBar }
}
</script>