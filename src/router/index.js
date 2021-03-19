import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Jobs from "../views/jobs/Jobs.vue"
import JobDetails from "../views/jobs/JobDetails.vue"
import Page404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:"/jobs",
    name:"Jobs",
    component:Jobs
  },
  {
    path:"/jobs/:id",
    name:"JobDetails",
    component:JobDetails,
    props:true
  },
  //redirect
  {
    path:"/all-jobs",
    redirect:"/jobs"
  },
  {
    path:"/:catchAll()",
    name:"Page404",
    component:Page404
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
