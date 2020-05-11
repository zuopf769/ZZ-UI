<template>
	<div>
		<h1>
			贡献者
		</h1>
		<ul class="contributors">
			<li v-for="user in users" :key="user">
				<div>{{ user }}</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
const users = ['zuopf769']

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contributors extends Vue {
	private users: Array<string> = users
}
</script>

<style lang="scss">
.contributors {
	display: block;
	list-style-type: none;
	margin: 0;
	padding: 0;
	> li {
		display: inline-block;
		vertical-align: top;
		width: 100px;
		text-align: center;
		margin-bottom: 25px;
	}
}
.contributor-avatar {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-bottom: 5px;
}
</style>
