 <script setup>
import { reactive } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
const router = useRouter();

const task = reactive({
  title: '',
  content: '',
  person_in_charge: '',
})
const onSubmit =async (e)=>{
  await axios.post('/api/tasks',task).then((res)=>{
    if(res){
      router.go(-1); 
    }else{
     console.log("ERR");
    }
  })
}

</script>


<template>
    <div>
        <div class="container">
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
            <button class="btn btn-primary" v-on:click="onSubmit">登録</button>
         </div>
    </div>
</template>
