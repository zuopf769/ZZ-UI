<template>
	<div class="sidebar">
		<div class="sidebar-nav-wrap">
			<ul class="sidebar-nav">
				<li class="sidebar-nav-item">
					<router-link to="/doc/getting-started" class="sidebar-nav-title">
						快速上手
					</router-link>
				</li>
				<li class="sidebar-nav-item">
					<router-link to="/doc/compatibility" class="sidebar-nav-title">
						兼容性
					</router-link>
				</li>
				<li class="sidebar-nav-item">
					<router-link to="/doc/contributing" class="sidebar-nav-title">
						贡献指南
					</router-link>
				</li>
				<li class="sidebar-nav-item">
					<router-link to="/contributor" class="sidebar-nav-title">
						贡献者
					</router-link>
				</li>
				<li class="sidebar-nav-item">
					<router-link to="/doc/changelog" class="sidebar-nav-title">
						更新日志
					</router-link>
				</li>
				<li class="sidebar-nav-item components-wrap">
					<div class="sidebar-nav-title">
						组件 / Components
					</div>
					<div
						v-for="(group, index) in navs"
						:key="index"
						class="sidebar-bar-nav-content"
					>
						<div v-if="group.groupName" class="sidebar-nav-item-text">
							{{ group.groupName }}
						</div>
						<ul v-if="group.list" class="sidebar-nest-nav">
							<li
								v-for="item in group.list"
								:key="item.path"
								class="sidebar-nest-nav-item"
							>
								<router-link
									:to="{
										path: `/components/${item.path}`,
										query: $route.query,
									}"
								>
									{{
										item.cnName ? `${item.name} / ${item.cnName}` : item.name
									}}
								</router-link>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import navConfig from '../nav.config.json'

function getComponentNav(navs: Array<any>) {
	return navs.find(nav => nav.path === '/components')
}

@Component
export default class Sidebar extends Vue {
	private navs: Array<any> = getComponentNav(navConfig).groups
}
</script>

<style lang="scss" scoped>
@import '~components/theme-chalk/common/var.scss';
@import '../style/var.scss';

.sidebar {
	position: fixed;
	top: 0;
	width: $sidebar-width;
	height: 100%;
	box-sizing: border-box;
	border-right: $border;
	padding: $header-height 0 0 0;
	overflow: hidden;
	background: $color-white;
	z-index: $sidebar-index;
}

.sidebar .sidebar-nav-wrap {
	height: 100%;

	.sidebar-nav {
		overflow: auto;
		height: 100%;
		padding: $sidebar-padding;
		font-size: 14px;
		list-style: none;
		white-space: nowrap;
		margin: 0;
		ul {
			list-style: none;
			margin: 0;
		}
		a {
			color: $text-color;
			text-decoration: none;
			font-weight: $font-weight-medium;
			transition: padding-left 0.5s ease;
			&:hover {
				color: $color-primary;
			}
		}
	}

	.sidebar-nav-item {
		.sidebar-nav-title {
			padding: 12px 0px;
			color: $text-color;
			font-weight: $font-weight-medium;
			&.router-link-exact-active {
				color: $color-primary;
			}
		}

		> a {
			display: block;
			text-decoration: none;
		}
	}

	.sidebar-nav-item-text {
		color: #99a9bf;
		font-size: 14px;
		padding: 5px 0px;
	}

	.sidebar-nest-nav {
		padding: 0;
		.router-link-exact-active {
			color: $color-primary;
			display: inline-block;
			padding-left: 14px;
			position: relative;
			box-sizing: content-box;

			&::after {
				content: '';
				position: absolute;
				display: inline-block;
				width: 3px;
				height: 100%;
				background: $color-primary;
				bottom: -5px;
				left: 0;
				top: 0;
			}
		}
	}
	.sidebar-nest-nav-item {
		padding: 12px 0 12px 12px;
		color: #6f6f6f;
	}
}
</style>
