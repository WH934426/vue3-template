<script setup>
import { AppMain, Navbar, Sidebar } from './components'
</script>

<template>
	<div class="common-layout app-wrapper">
		<div class="drawer-bg"></div>
		<el-container>
			<Sidebar class="sidebar-container" />
			<el-container direction="vertical" class="main-container">
				<div>
					<Navbar />
				</div>
				<AppMain />
			</el-container>
		</el-container>
	</div>
</template>

<style lang="scss" scoped>
.app-wrapper {
	position: relative;
	height: 100%;
	width: 100%;
	&:after {
		content: '';
		display: table;
		clear: both;
	}
}
.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}
</style>
