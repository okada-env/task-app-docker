<script setup>
import {useRouter} from 'vue-router';
import axios from 'axios';
import {reactive,onMounted,provide} from 'vue';
const state = reactive({tasks:''});
const router = useRouter();
const getTasks = ()=>{
  axios.get('/api/tasks').then((res) =>{
    state.tasks = res.data; //リアクティブな変数stateに代入
  })  
}
onMounted(async()=>{
await getTasks();
router.push("/");
})
provide('tasks',state); //provideはsetup直下で使用すること。
</script>

<template>
  <div>
    <h1>タスク管理アプリ</h1>
  </div>
</template>

<style>
</style>