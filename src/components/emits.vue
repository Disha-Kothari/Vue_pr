<script setup>
const newEmittedData="emited_data"
const emit = defineEmits(['response'])
emit('response', 'hello from child')

function performemit(){
    emit("emitted-data",newEmittedData)
}
</script>   
<template>
    <p>Custom Text Input</p>
    <input type="text" placeholder="Custom text Input"
     @change="$emit('customChange',$event.target.value)">
     <button @click="$emit('customChange',newEmittedData)">Emit Data</button> 
</template>
     