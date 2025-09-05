<script setup>
import axios from 'axios';
import { ref , onMounted, provide} from 'vue'
const submitTasks = ref([])

import HeaderComponent from './components/HeaderComponent.vue'

const getTasks = ()=>{
  axios.get('/api/tasks').then((res) =>{
    submitTasks.value = res.data;
  })  
}
onMounted(async()=>{
  await getTasks();
})

const deleteTask = (index) => {
  submitTasks.value.splice(index, 1)
}
</script>


<template>
  <div>
    <HeaderComponent />
    <router-view v-bind:submitTasks="submitTasks" v-bind:deleteTask="deleteTask" />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
