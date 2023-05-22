<script setup>
import { watchEffect,ref, watch, reactive } from 'vue';
import App from '../App.vue';

const page=ref(1)
const name=ref("Test")
const action=ref(false)

const result=ref(null)

const obj=reactive({
    page:2,
    name:"test1",
    done:false
})

const API_URL = `https://api.github.com`
let url=ref("")

let url2=("")

watchEffect(()=>{
    url=`${API_URL}?per_page=${page.value}&name=${name.value}&action=${action.value}`
},{immediate:true})

watchEffect(()=>{
url2=`${API_URL}?per_page=${obj.page}&name=${obj.name}&action=${obj.done}`
},{immediate:true})



</script>
<template>
    <input v-model="page" placeholder="Enter Page Number">
    <input v-model="name" placeholder="Name">
    <input v-model="action" placeholder="action">
    <input v-model="action" placeholder="did">
    <h2>{{ url }}</h2>

    <h3>{{ url2 }}</h3>
</template>