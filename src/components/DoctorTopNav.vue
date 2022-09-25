<template>
    <!-- <nav class="navbar navbar-expand-lg sticky-top nav-shadow">
        <div class="container-fluid ">
            <router-link to="/doctordashboard" class="navbar-brand">
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
                </ul>
                <ul class="navbar-nav me-auto col-lg-4">
                    <li class="nav-item nav-user-btn">
                        <router-link to="/aboutdoctor" class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-10 p-0 text-end">
                                    <p class="my-auto">DR. A. S. M. ZAHED</p>
                                </div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/doctor.png" class="img-fluid nav-link-icon-width my-auto"
                                        alt="" srcset="">
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/doctor_login"
                            class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-10 p-0">
                                    Log-out
                                </div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/logout.png" class="img-fluid nav-link-icon-width mx-1" alt=""
                                        srcset="">
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->





    <nav class="navbar navbar-expand-lg sticky-top nav-shadow">
        <div class="container-fluid">
            <router-link to="/dashboard" class="navbar-brand">
                <img src="@/assets/logo/parkview.webp" class="img-fluid patient-dashboard-hospital-logo" alt=""
                    srcset="" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse row" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item nav-user-btn ms-auto">
                        <router-link to="/aboutdoctor"
                            class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-10 p-0 text-end">
                                    <p class="my-auto">Eshan Syed</p>
                                </div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/user.png" class="img-fluid nav-link-icon-width my-auto"
                                        alt="" srcset="" />
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link btn border-nav-btn mx-2 text-dark px-4 shadow-none">
                            <div class="row">
                                <div class="col-lg-10 p-0">Log-out</div>
                                <div class="col-lg-2 p-0">
                                    <img src="@/assets/icon/logout.png" class="img-fluid nav-link-icon-width" alt=""
                                        srcset="" />
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>
<script>
export default {
    name: 'DoctorTopNav',
}
</script>