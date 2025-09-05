<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
const router = useRouter();


const props = defineProps(['taskId']);
const task = ref({});

const getTask = () => {
    axios.get(`/api/tasks/` + props.taskId)
    .then((res) => {
        task.value = res.data;
    })
}

const onUpdate =async (e)=>{
  await axios.put(`/api/tasks/${props.taskId}`,task.value).then((res)=>{
    if(res){
      router.go(-1); 
    }else{
     console.log("ERR");
    }
  })
}

onMounted(() => {
    getTask();
})
</script>

<template>
        <div class="container">
            <h2>タスク編集</h2>
            <div class="form-group row">
                <label for="title" class="col-sm-3 col-form-label">Title</label>
                <input type="text" v-model="task.title">
            </div>
            <div class="form-group row">
                <label for="content" class="col-sm-3 col-form-label">Content</label>
                <input type="text" v-model="task.content">
            </div>
            <div class="form-group row">
                <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                <input type="text" v-model="task.person_in_charge">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="onUpdate">更新</button>
    </div>
 </template>


