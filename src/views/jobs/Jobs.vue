<template>
  <h1>This is Jobs Page</h1>
  <ul class="jobs" v-if="jobs">
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{name:'JobDetails',params:{id:job.id}}">
            <h3>{{job.title}}</h3>
        </router-link>
      </li>
  </ul>
  <div v-else>
      <p>Loading Jobs ....</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[]
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")
        .then((response)=> response.json())
        .then((data)=>this.jobs=data)
        .catch(error=>console.log(error.message));
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