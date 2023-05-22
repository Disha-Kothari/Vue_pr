<script setup>
import { ref } from 'vue';

const todos=ref([])
const newTodo=ref('')
const hideCompleted = ref(false)

function addTodo(){
    todos.value.push(newTodo.value)
    newTodo.value=""
}

function removeTodo(todo){
    todos.value=todos.value.filter((t)=>t!=todo)
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <!-- <form @submit="addTodo" -->
                <input type="text" placeholder="Enter todo Task" v-model="newTodo">  

                <button class="btn btn-primary" @click="addTodo">Add Todo</button>
                <ul><li v-for="todo,index in todos" :key="index">{{ todo }}
                <button @click="removeTodo(todo)">X</button>
                </li></ul> 
            </div>
        </div>
    </div>
</template>
<style></style>