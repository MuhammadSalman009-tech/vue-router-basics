<template>
  <div v-if="job" class="job">
    <h1>{{job.title}}</h1>
    <p>{{job.description}}</p>
    <p>{{job.id}}</p>
  </div>
  <div v-else>
      <p>Loading job details ....</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            job:null
        }
    },
    props:["id"],
    mounted(){
        fetch("http://localhost:3000/jobs/"+this.id)
        .then((response)=> response.json())
        .then((data)=>this.job=data)
        .catch(error=>console.log(error.message));
    }
}
</script>

<style scoped>
body{
    background: #ddd;
}
.job{
    max-width: 400px;
    background: crimson;
    color: #fff;
    margin: 10px auto;
    border-radius: 4px;
    padding: 10px;
}
</style>