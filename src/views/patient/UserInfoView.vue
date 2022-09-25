<template>
    <TopNav/>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="text-center my-3">Welcome Eshan Syed</h2>
                <div class="card secondary-color-1 px-5 border-0 user-card">
                    <div class="">
                        <h5 class="mt-4">Basic Info</h5>
                        <h6 class="">Some info maybe visible to the Parkview service</h6>
                    </div>
                    <div class="card-body">
                        <div class="row border-bottom my-2">
                            <div class="col-lg-2 p-0">
                                <p>Name</p>
                            </div>
                            <div class="col-lg-8 p-0">
                                <p class="fw-bold">Eshan Syed</p>
                            </div>
                            <div class="col-lg-2 p-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                        <div class="row border-bottom my-2">
                            <div class="col-lg-2 p-0">
                                <p>Birth day</p>
                            </div>
                            <div class="col-lg-8 p-0">
                                <p class="fw-bold">27 August, 1996</p>
                            </div>
                            <div class="col-lg-2 p-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                        <div class="row border-bottom my-2">
                            <div class="col-lg-2 p-0">
                                <p>Gender</p>
                            </div>
                            <div class="col-lg-8 p-0">
                                <p class="fw-bold">Male</p>
                            </div>
                            <div class="col-lg-2 p-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                        <div class="row border-bottom my-2">
                            <div class="col-lg-2 p-0">
                                <p>Mobile</p>
                            </div>
                            <div class="col-lg-8 p-0">
                                <p class="fw-bold">+800 1765551768</p>
                            </div>
                            <div class="col-lg-2 p-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                        <div class="row border-bottom my-2">
                            <div class="col-lg-2 p-0">
                                <p>Email</p>
                            </div>
                            <div class="col-lg-8 p-0">
                                <p class="fw-bold">eshansyed75@gmail.com</p>
                            </div>
                            <div class="col-lg-2 p-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                        <div class="row mb-0 my-2">
                            <div class="col-lg-2 p-0 mb-0">
                                <p class="mb-0">Password</p>
                            </div>
                            <div class="col-lg-8 p-0 mb-0">
                                <p class="mb-0 fw-bold">********</p>
                            </div>
                            <div class="col-lg-2 p-0 mb-0 text-end">
                                <router-link to="/useredit" class="border-bottom border-dark text ">Edit</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-8 my-auto">
                        <p class="fs-3">Find A Doctor</p>
                        <p class="mb-0 text-muted">We have the best doctor's in Chittagong. Our Consultant doctors are
                        </p>
                        <p class="mb-0 text-muted">more professional for providing best treatment.</p>
                    </div>
                    <div class="col-lg-4">
                        <img src="@/assets/background/doctors.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from '@/components/TopNav.vue';
    export default {
        name: "userinfo",
        components: { TopNav }
    }
    </script>