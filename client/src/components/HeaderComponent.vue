<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>


<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <span class="navbar-brand mb-0 h1">タスク管理アプリ</span>
                <div>
                    <button v-on:click="router.push({name: 'task.list'})" >
                        List
                    </button>
                    <button v-on:click="router.push({name: 'task.create'})">
                        ADD
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>