<template>
    <TopNav />
    <div class="user-edit-p-w">
        <h4 class="mt-5">Change Name</h4>
        <label for="" class="form-label mb-2 my-3">New Name</label>
        <input type="name" class="form-control form-control-lg shadow-none" id="" placeholder="">
        <label for="" class="form-label mb-2 my-3">Password</label>
        <input type="password" class="form-control-lg form-control shadow-none" id="" placeholder="">
        <router-link to="/userinfo" class="btn btn-lg blue-color w-100 my-4 border-0 text-white shadow-none">Update
        </router-link>
    </div>



    





</template>

<script>
import TopNav from '@/components/TopNav.vue';
export default {
    name: "useredit",
    components: { TopNav, TopNav }
}
</script>