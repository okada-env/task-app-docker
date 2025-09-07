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
   <div class="container d-flex justify-content-center">
         <div class="text-center">
            <h2>タスク一覧</h2>
            <ul class="list-unstyled"> 
                <li v-for="(task, i) in tasks" v-bind:key="i" class="mb-2">
                    タスク名：{{ task.title }}
                    <button v-on:click="showTask(i)" class="btn btn-sm btn-primary ms-2">詳細</button>
                    <button v-on:click="editTask(i)" class="btn btn-sm btn-warning ms-2">編集</button>
                    <button v-on:click="deleteTask(task.id)" class="btn btn-sm btn-danger ms-2">Delete</button>
                </li>
            </ul>
         </div>
   </div>
</template>
   
   <style>
   
   </style>