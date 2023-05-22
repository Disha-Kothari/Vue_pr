<script setup>
import { stringifyExpression } from '@vue/compiler-core';

//const props=defineProps(['data'])
const props1 =defineProps({
    msg:String,
    age:Number
})
</script>
<template>
    <div><h2>This is child component</h2></div>
    <!-- <div v-for="d in data">
    <p>{{ d.name }}</p>
    <p>{{ d.email }}</p>
    <p>{{ d.age }}</p>
    </div> -->
    <p>{{ msg }}</p>
    <p>{{ age }}</p>
</template>
