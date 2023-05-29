<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import pr from './components/pr.vue'
import ex1 from './components/ex1.vue'
import todoList from './components/todoList.vue' 
import ex2 from './components/ex2.vue'
import lifecyclehooks from './components/lifecyclehooks.vue'
import { reactive,ref } from 'vue'
import props from './components/props.vue'
import ex3 from './components/ex3.vue'
import emits from './components/emits.vue'
import cardslotex from './components/cardslotex.vue'
import recusrsiveComments from './components/recusrsiveComments.vue'
import recusrsiveComments2 from './components/recusrsiveComments2.vue'
import jsonComments from './components/comments1.json'
import ex4_modal from './components/ex4_modal.vue'

const data=reactive([
{name:'test',age:25,email:'test@gmail.com'},
{name:'test1',age:26,email:'test1@gmail.com'}])
// const msg=ref("Hello from parent")
// const age=ref(14)
const obj=reactive({
  msg:"Hello from parent",
  age:76
})

//const objjsonData=reactive({})

// jsondata.forEach(x => { 
//   objjsonData = x
//   // console.log(x.auther, x.comments);
//  });

function logChange(event){
  console.log(event)
}
function newEmitedData(data){
  console.log(data)
}

const childMsg = ref('No child msg yet')
</script> 

<template>
  <!-- <div class="container">
    <button class="btn btn-primary">Check</button>
  </div> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <main>
  <!-- TheWelcome /> -->
  <!-- <pr/> -->
  <!-- <ex1/> -->
  <!-- <todoList/> -->
  <!-- <ex2/> -->
  <!-- <lifecyclehooks></lifecyclehooks> -->
  <!-- <props :data="data"></props> -->
  <!-- <props :msg="obj.msg" :age="obj.age"></props> Dynamic Passing -->
  <!-- <props msg="test" age=85></props> Static passing -->
  <!-- <props v-bind="obj"></props> -->
  <!-- <ex3></ex3>
  <emits @customChange="logChange"  @newEmitedData="emitted-data"  @response="(msg)=>childMsg=msg"/>
    <p>{{ childMsg }}</p> -->

  <!-- <card><h3>Slot is added</h3></card>  
  <card><button>click me</button></card>   -->

  <!-- <ul v-for="(commentItem, index) in jsonComments" :key="index" class="comments">
    <recusrsiveComments
      v-bind="{
        author: commentItem.author,
        comment :commentItem.comment,
        comments: commentItem.comments
      }"
    />
  </ul> -->
<!-- 
  <ul class="comments">
  <recusrsiveComments2 v-bind="{comments:jsonComments}" />
  </ul> -->

  <ex4_modal></ex4_modal>
  
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.comments ul {
  padding-left: 16px;
  margin: 6px 0;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
