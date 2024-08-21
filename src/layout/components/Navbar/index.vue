<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores'

// 暂时的头像
const avatar = ref('https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
const address_link = ref(import.meta.env.VITE_ADDRESS_URL)

// 是否是激活状
const appStore = useAppStore()
const isActive = appStore.isSidebarOpen
// 是否切换侧边栏
const toggleSideBar = () => {
	appStore.toggleSideBar()
}
</script>

<template>
	<el-header class="navbar">
		<Hamburger class="hamburger-container" @toggleClick="toggleSideBar" :is-active="isActive" />
		<Breadcrumb class="breadcrumb-container" />
		<div class="right-menu">
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper">
					<img :src="avatar" alt="" class="user-avatar" />
					<el-icon><i-ep-setting /></el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu class="user-dropdown">
						<router-link to="/">
							<el-dropdown-item>首页</el-dropdown-item>
						</router-link>
						<a target="_blank" :href="address_link">
							<el-dropdown-item>项目地址</el-dropdown-item>
						</a>
						<el-dropdown-item divided>
							<span style="display: block">退出登录</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</el-header>
</template>

<style scoped lang="scss">
.navbar {
	height: 50px;
	overflow: hidden;
	position: relative;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	.hamburger-container {
		line-height: 46px;
		height: 100%;
		float: left;
		cursor: pointer;
		transition: background 0.3s;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}
	}

	.breadcrumb-container {
		float: left;
	}

	.right-menu {
		float: right;
		height: 100%;
		line-height: 50px;

		&:focus {
			outline: none;
		}

		.right-menu-item {
			display: inline-block;
			padding: 0 8px;
			height: 100%;
			font-size: 18px;
			color: #5a5e66;
			vertical-align: text-bottom;

			&.hover-effect {
				cursor: pointer;
				transition: background 0.3s;

				&:hover {
					background: rgba(0, 0, 0, 0.025);
				}
			}
		}

		.avatar-container {
			margin-right: 30px;

			.avatar-wrapper {
				margin-top: 5px;
				position: relative;

				.user-avatar {
					cursor: pointer;
					width: 40px;
					height: 40px;
					border-radius: 10px;
					display: inline-block;
					vertical-align: middle;
				}

				.el-icon {
					cursor: pointer;
					font-size: 20px;
					display: inline-block;
					vertical-align: middle;
					margin-left: 10px;
				}
			}
		}
	}
}
</style>
