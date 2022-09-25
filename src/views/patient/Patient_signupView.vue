<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-lg-5">
                <h2 class="text-center my-3"></h2>
                <div class="card secondary-color-1 px-5 py-3 border-0 br-logo">
                    <div class="mx-auto">
                        <img src="@/assets/logo/parkview.webp" alt="" class="img-fluid logo-w2 ">
                        <p class="text-center">Create New Account</p>
                    </div>
                    <div class="card-body mb-0 text-start">
                        <div class="mb-2">
                            <label for="" class="form-label text-muted">Your Name</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-2">
                            <label for="2" class="form-label text-muted">Mobile Number</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-2">
                            <label for="" class="form-label text-muted">Email</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-2">
                            <label for="" class="form-label text-muted">Gender</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-2">
                            <label for="" class="form-label text-muted">Password</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-4">
                            <label for="" class="form-label text-muted">Re-type Password</label>
                            <input type="text" class="form-control shadow-none border-dark" id="" placeholder="">
                        </div>
                        <div class="mb-0">
                            <router-link to="/account_confirmation" class="btn text-white green-color w-100 shadow-none">Sign-up
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'patient_signup',
}
</script>