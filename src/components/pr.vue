<script setup>
import {ref} from 'vue'
const awasome=ref(false);

const type=ref('A')
const text=ref('')

const checked=ref(false);

const picked=ref('')
function toggle(){
    awasome.value=!awasome.value;

    const parentMessage = ref('Parent')
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
}
</script>

<template>
    <button @click="toggle">toggle me</button>
    <h1 v-if="awasome">Toogle On</h1>
    <h2 v-else>Toggle off</h2>
    <h1 v-if="type==='A'">Type A</h1>
    <h1 v-else-if="type==='B'">Type B</h1>
    <h1 v-else>Type C</h1>
<!-- 
    <li v-for="item in items">
        {{ item.message }}
    </li>

    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li> -->

    <!-- items.forEach((item, index) => {
  // has access to outer scope `parentMessage`
  // but `item` and `index` are only available in here
        console.log(parentMessage, item.message, index)
}) -->

    <!-- <li v-for="({ message }, index) in items">
        {{ message }} {{ index }}
    </li> -->

    <!-- <div v-for="item of items">
        {{ item.message }}
    </div> -->

    <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>

  <input type="checkbox" id="checkbox"  v-model="checked">
  <label for="checkbox">{{ checked }}</label>

  <div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

</template>