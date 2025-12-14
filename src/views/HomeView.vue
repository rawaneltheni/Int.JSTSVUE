<template>
  <div class="home">
    <h1>{{name}}'s Shopping cart</h1>
  </div>
</template>

<script lang="ts">
// because this.$ref itself isn't supported on composition api
import { ref } from 'vue';
export default {
  name: 'Home',
  // will run before any of the life cycle hooks so before mounted or before created
  // life cycle hooks fire at diff point during its life cycle
  setup() {

    // hardcoded products
    const products = [
      {id:1, name: 'Laptop'},
      {id:2, name: 'Headphones'},
      {id:3, name: 'Keyboard'}
    ]

    const p = ref()

    const name = ref('Rana')
    const age = ref(20)
    // ref() — What it does
    // ref creates a reactive reference. because composition api by defult isn't reactive which changes will not be reflected later when changed on the dom 
    // That means Vue will track changes to the value and update the DOM automatically when it changes.
    // The value is wrapped inside an object with a .value property.

    const handleClick = () => {
      p.value.classList.add('test')
      name.value = 'luigi'
    }

    // we use return in order we can use access them inside the template
    return {
      name: name,
      // another way to write it 
      age,
      p,
      handleClick
    }
    // note: if we replace the value here it won't be reflected on the templete because there are not reactive values 
    // in the other hand, it's completely replaced using the options api => data() { return {}}
  },
  // created() {

  // },
  // // mounted when the fires when the component mounts the dom
  // mounted() {

  // }
  
}
</script>
