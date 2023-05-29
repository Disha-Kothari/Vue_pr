<script setup>
import {ref} from 'vue'
import Modal from './modalDialog.vue'

// const showModal=ref(false)
const modalVisible= ref(false)
const id=ref(1)
function showModal(val){
 modalVisible.value = true;
  id.value=val
 }
</script>
<template>
    <button @click="showModal(1)" class="btn btn-primary">Open Modal1 {{ modalVisible }}</button>
    <button @click="showModal(2)" class="btn btn-primary">Open Modal2 {{ modalVisible }}</button>
    <!-- <modal v-if="showModal" @close="showModal = false">
        <template v-slot:body>
          Hello, modal!
        </template>
      </modal> -->

      <p>Have a phone call: <font-awesome-icon icon="phone"/></p>
      <!-- <p>Have a module of JavaScript: <font-awesome-icon icon="js" /></p>
    <p>Have a module of Vue.js: <font-awesome-icon icon="vuejs" /></p> -->


    <Modal :show="modalVisible" :id="id" @close="()=>modalVisible=false">
    <template #body>This should be in the body</template>
    <template #footer>
      <button class="btn btn-primary">Extra footer button</button>
    </template>
  </Modal>
</template>