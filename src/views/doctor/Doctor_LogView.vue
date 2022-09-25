<template>
    <div class="row m-0">
        <div class="col-lg-5 alignSection" id="">
            <div class="container border w-75 py-4 px-5 log-page-border log-page-top">
                <img src="@/assets/logo/parkview.webp" class="img-fluid logo-w2" alt="">
                <h6 class="my-2">Welcome to</h6>
                <h4 class="my-3">Parkview Hospital</h4>
                <p>Login to comtinue...</p>
                <input class="form-control form-control-lg shadow-none borrder-1 border-dark my-3" type="text"
                    placeholder="+880 1xxxxxxxxx" aria-label="default input example">
                <input class="form-control form-control-lg shadow-none borrder-1 border-dark my-2" type="text"
                    placeholder="*************" aria-label="default input example">
                <p class="text-end"><a href="#" class="text-dark">Forget password?</a></p>
                
                        <router-link to="/doctordashboard" class="btn btn-lg blue-color my-3 w-100 text-white fw-bold">
                            Log in
                        </router-link>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'doctor_login',
    }
    </script>