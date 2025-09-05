<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import {useRouter} from 'vue-router';
const router = useRouter();
const tasks = ref([])

const Tasks = async () => {
  const res = await axios.get('/api/tasks')
  tasks.value = res.data
}

onMounted(async () => {
  await Tasks()
})

const deleteTask = (sel_id)=>{
  axios.delete(`/api/tasks/${sel_id}`).then((res)=>{
    if(res){
      Tasks(); 
    }
  })
}

const editTask = (index) => {
  router.push(`/tasks/${tasks.value[index].id}/edit`)
}

const showTask = (index) => {
  router.push(`/tasks/${tasks.value[index].id}`)
}
</script>

<template>
   <div class="container">
         <ul> 
            <h2>タスク一覧</h2>
            <li v-for="(task, i) in tasks" v-bind:key="i">
                タスク名：{{ task.title }}
                <button v-on:click="showTask(i)">詳細</button>
                <button v-on:click="editTask(i)">編集</button>
                <button v-on:click="deleteTask(task.id)">Delete</button>
            </li>
         </ul>
   </div>
</template>
   
   <style>
   
   </style>