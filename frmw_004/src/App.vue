<template>
	<div id="app">
		<h1>FRMW_004</h1>
		<button @click="value++">⬆</button>
		<input v-model="value" />
		<HelloWorld :degs="degs()" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld
	},
	data() {
		return {
			value: 1
		};
	},
	methods: {
		increaseValue() {
			this.value += 1;
		},
		degs() {
			return Array.from({ length: this.value }, (v, i) => 10 + i);
		}
	}
};
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
