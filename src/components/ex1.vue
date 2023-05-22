<script setup>
import { computed,ref } from '@vue/reactivity';
//import {bootstrep} from bootstrep

const colorary=ref(["red","green","blue"])
const hiddenitem=ref(false)

const filterdele=computed(()=>{
    //console.log(colorary.value.filter((val)=>val!=='blue'))
    return colorary.value.filter((val)=>val!=='blue')
})
</script>
<template>
    <div class="container border">
        <div class="row">
            <div class="col-sm-4 border" v-for="item,index in filterdele" :key="index">{{ item }}</div>
            <!-- <div class="col-sm-4 border" v-for="item,index in colorary" :key="index" v-show="item==='blue'?false:true">{{ item }}</div> -->
            <!-- <div class="col-sm-4 border" v-for="item,index in colorary" :key="index"><div v-if="item!=='blue'">{{ item }}</div></div> -->

        </div>
    </div>
    <!-- <div class="container border">
    <div class="row border">
        <div class="col-md-4 border">1</div>
        <div class="col-md-4 border">2</div>
        <div class="col-md-4 border">3</div>
    </div>
    </div> -->

    <!-- <div class="container text-center border">
    <div class="row">
            <div class="col-md-4 d-flex border" v-for="item,index in colorary" :key="index" v-show="item==='blue'?false:true">
                {{ item }}
            </div>
        </div>
    </div> -->
</template>