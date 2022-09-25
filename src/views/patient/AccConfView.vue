<template>
    <div class="container">
        <div class="row justify-content-center mt-4">
            <div class="col-lg-5">
                <h2 class="text-center my-3"></h2>
                <div class="card px-5 py-5 border-0 br-logo acc-conf-card">
                    <div class="mx-auto">
                        <img src="@/assets/logo/parkview.webp" alt="" class="img-fluid logo-w2">
                    </div>
                    <div class="card-body mb-0">
                        <img src="@/assets/background/otp.png" class="rounded mx-auto d-block my-5 otp-logo" alt="...">

                        <div class="mx-auto text-center fw-light my-5">
                            <p class="mb-0 text-muted">We sent a 4-digit code to your mobile number</p>
                            <p class="fw-bold text-muted">+880 1765551768</p>
                            <div class="mb-5 mt-5">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <input type="text"
                                            class="form-control form-control-sm shadow-none text-center secondary-color-2 py-2 border-light"
                                            readonly id="" placeholder="">
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="text"
                                            class="form-control form-control-sm shadow-none text-center secondary-color-2 py-2 border-light"
                                            readonly id="" placeholder="">
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="text"
                                            class="form-control form-control-sm shadow-none text-center secondary-color-2 py-2 border-light"
                                            readonly id="" placeholder="">
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="text"
                                            class="form-control form-control-sm shadow-none text-center secondary-color-2 py-2 border-light"
                                            readonly id="" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <router-link to="/patientdashboard" class="btn w-100 blue-color text-white  shadow-none rounded-0">Confirm Your Account</router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'account_confirmation',
}
</script>