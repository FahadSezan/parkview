<template>
    <div class="bg-img-log-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 p-0 m-auto">
                    <img src="@/assets/background/pvc.png" class="img-fluid logo-w1"  alt="">
                </div>
                <div class="col-lg-5 p-0 m-top">
                    <div class="card px-5 py-4 br-logo">
                        <img src="@/assets/logo/parkview.webp" class="card-img-top mx-auto logo-w2" alt="...">
                        <div class="card-body mt-4">
                            <h5 class="card-title text-start text-dark fw-bold fs-6">Welcome to</h5>
                            <h4 class="card-title text-start text-dark fw-bold fs-4">Parkview Hospital.</h4>
                            <p class="card-text text-start font-14 mt-3">Log in to continue</p>
                            <input class="form-control shadow-none borrder-1 border-dark my-3" type="text"
                                placeholder="+880 1xxxxxxxxx" aria-label="default input example">
                            <input class="form-control shadow-none borrder-1 border-dark my-2" type="text"
                                placeholder="*************" aria-label="default input example">
                            <p class="text-end">
                                <a href="#" class="text-dark">Forget password?
                                </a>
                            </p>
                            <div class="row">
                                <router-link to="/patientdashboard" class="btn btn-lg blue-color my-3 w-100 text-white fw-bold fs-6 rounded-0">Log in
                                </router-link>
                            </div>
                            <div class="row">
                                <router-link to="/patient_signup" class="btn green-color w-50 text-white fw-bold mx-auto fs-6 rounded-0">Sign up
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'patient_login',
}
</script>