<template>
  <h1>This is Jobs Page</h1>
  <ul class="jobs">
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{name:'JobDetails',params:{id:job.id}}">
            <h3>{{job.title}}</h3>
        </router-link>
      </li>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {id:1,title:"Web Developent",description:"Web Developent Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
                {id:2,title:"Android Developent",description:"Android Developent Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
                {id:3,title:"UX/UI Developent",description:"UX/UI Developent Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
            ]
        }
    }
}
</script>

<style>
    ul.jobs{
        list-style: none;
        padding: 0px;
    }
    .jobs li a{
        background: #eee;
        padding: 10px 16px;
        border-radius: 4px;
        max-width: 300px;
        margin: 10px auto;
        display: block;
    }
    .jobs li a:hover{
        background: #ddd;
    }
    .jobs a{
        color: #000;
        text-decoration: none;
    }
</style>