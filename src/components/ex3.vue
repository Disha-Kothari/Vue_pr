 <!-- two textboxes and give result to third box -->
 <script setup>
import { computed,ref } from '@vue/reactivity';
import { watchEffect } from 'vue';

const num1=ref(0)
const num2=ref(0)
const res=ref(0)
const finalRes=computed(()=>num1.value*num2.value)

watchEffect(()=>{
    res.value=num1.value*num2.value
})

</script>
<template>
    <input v-model="num1" placeholder="Enter First num1"/>
    <input v-model="num2" placeholder="Enter Second num2"/>
    <p>{{ num1* num2 }}</p>
    <input v-model="res" placeholder="Multiplication Result"/>
    <input type="number" :value="finalRes">
</template>