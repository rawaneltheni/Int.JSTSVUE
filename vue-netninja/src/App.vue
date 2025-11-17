<template>
  <h1>{{title }}</h1>
  	<!-- <input type="text" ref="temp">
  	<button @click="handleClick()">click me</button> -->
  	<div v-if="showModal">
		<Modal :header="header" theme="sale" @close="toggleModal"/>
  	</div>
	<button @click="toggleModal()">Show</button>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App', // root component  
  components: {
	Modal
  },
  data() {
    return {
      title: "My first Vue app",
	    header: "Sign up for a Giveaway!",
	   showModal: false,
    }
  },
  methods: {
    handleClick() {
		console.log(this.$refs.name.classList.add('active'))
		console.log(this.$refs.name.focus())
		// classList.add('active') and .focus() are a plain javascript methdods we were able to use it using template refs 
	},
	toggleModal() {
		this.showModal = !this.showModal
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
