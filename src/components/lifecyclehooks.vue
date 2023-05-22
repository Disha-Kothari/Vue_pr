<script setup>
import { computed } from '@vue/reactivity';
import {ref,  onBeforeMount, onMounted, onBeforeUpdate,onUpdated} from 'vue';
console.log("Inside script setup hook")

let stateOfUser="Sleeping"
const testComp=computed(()=>"I am computed")//computed property

const greeting=ref(null)

let img=ref(null)

// onBeforCreate(()=>{
//     console.log("I m bf create hook");
//     console.log("state of user",stateOfUser);
//     console.log("computed property is:",testComp);
// })

// onCreated(()=>{
//     console.log("I am created Hook")
//     console.log("state of user",stateOfUser);
//     console.log("computed property is:",testComp);
// })

onBeforeMount(()=>{
    console.log("I am inside before mount hook")
    console.log("Dom node is ",greeting.value)
})

onMounted(()=>{
    console.log("I am inside mountedd hook")
    console.log("Dom node is ready to access ",greeting.value)
})

onBeforeUpdate(()=>{
    console.log("I'm beforeUpdate hook and i can help to apply extra effects before a DOM is updated");
    console.log("width of img div ", img.width);
    img.width = 300;
    console.log("width of img div after overriding ", img.width);
})

onUpdated(()=>{
    console.log("I'm updated hook");
    img = "https://picsum.photos/200/300"; //updates the image src
})

</script>
<template>
    <div ref="greeting">Hello Greetings</div>
    <h2>New tag is added</h2>
    <img ref="img" :src="img" alt="image" width="200" />
</template>