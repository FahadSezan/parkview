import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import 
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/patient_login',
    name: 'patient_login',
    component: () => import('../views/patient/Patient_logView.vue')
  },
  {
    path: '/patient_signup',
    name: 'patient_signup',
    component: () => import('../views/patient/Patient_signupView.vue')
  },
  
  {
    path: '/account_confirmation',
    name: 'account_confirmation',
    component: () => import('../views/patient/AccConfView.vue')
  },
  {
    path: '/patientdashboard',
    name: 'patientdashboard',
    component: () => import('../views/patient/PatientDashboardView.vue')
  },
  {
    path: '/department',
    name: 'department',
    component: () => import('../views/patient/DepartmentView.vue')
  },
  {
    path: '/doctorinfo',
    name: 'doctorinfo',
    component: () => import('../views/patient/DoctorInfoView.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('../views/patient/UserInfoView.vue')
  },
  {
    path: '/useredit',
    name: 'useredit',
    component: () => import('../views/patient/UserEditView.vue')
  },
  {
    path: '/doctor_login',
    name: 'doctor_login',
    component: () => import('../views/doctor/Doctor_LogView.vue')
  },
  {
    path: '/doctordashboard',
    name: 'doctordashboard',
    component: () => import('../views/doctor/DoctorDashboardView.vue')
  },
  {
    path: '/aboutdoctor',
    name: 'aboutdoctor',
    component: () => import('../views/doctor/AboutDoctorView.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
