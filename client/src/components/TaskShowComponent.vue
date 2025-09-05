<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps(['taskId']);
const task = ref({});

const getTask = () => {
    axios.get(`/api/tasks/` + props.taskId)
    .then((res) => {
        task.value = res.data;
    })
}

onMounted(() => {
    getTask();
})
</script>

<template>
    <div>
        <div class="container">
            <h2>タスク詳細</h2>
            <div class="form-group row">
                <div class="col-sm-9">
                <p>タスク名：{{ task.title }}</p>
                <p>詳細：{{ task.content }}</p>
                <p>担当者：{{ task.person_in_charge }}</p>
                </div>
            </div>
         </div>
    </div>
 </template>