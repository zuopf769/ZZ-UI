<template>
	<div class="app">
		<Header />
		<router-view />
	</div>
</template>

<script lang="ts">
import Header from './components/header.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
	components: {
		Header,
	},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~components/theme-chalk/index.scss';
@import '~components/theme-chalk/common/var.scss';
@import './style/var.scss';

html,
body {
	min-width: $min-width;
}

.app {
	overflow-x: hidden;
}

h1,
h2,
h3 {
	font-weight: $font-weight-medium;
	color: $text-title-color;
	line-height: 1.5;
}

::-webkit-scrollbar {
	background-color: transparent;
	z-index: 11;

	&:horizontal {
		height: 6px;
	}

	&:vertical {
		width: 6px;
	}

	&-thumb {
		background-color: #edf0f7;
		border-radius: 1px;
	}

	&-corner {
		background: transparent;
	}

	&-track {
		background: transparent;
		&-piece {
			background: transparent;
			width: 6px;
		}
	}
}
</style>
