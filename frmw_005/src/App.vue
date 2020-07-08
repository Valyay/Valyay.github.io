<template>
	<div id="app" :style="{ backgroundColor: appBackground }">
		<h1>FRMW_005</h1>
		<pre>
            
           
<i>R:</i>   <input v-model="red" type="number" min="0" max="255">  <input v-model="red" type="range" min="0" max="255" step="1">
          
<i>G:</i>   <input v-model="green" type="number" min="0" max="255">  <input v-model="green" type="range" min="0" max="255" step="1">
            
<i>B:</i>   <input v-model="blue" type="number" min="0" max="255">  <input v-model="blue" type="range" min="0" max="255" step="1">
</pre>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			red: 255,
			green: 255,
			blue: 255
		};
	},
	computed: {
		appBackground() {
			return `rgb(${this.red}, ${this.green}, ${this.blue})`;
		}
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
}
</style>
