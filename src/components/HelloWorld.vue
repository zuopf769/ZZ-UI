<template>
	<div class="hello">
		<h1>{{ name }}</h1>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
	name = 'Typescript'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
	font-weight: normal;
	border-radius: 2px;
	transform: rotate();
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
