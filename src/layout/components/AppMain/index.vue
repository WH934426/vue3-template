<script setup></script>

<template>
	<el-main class="app-main">
		<router-view v-slot="{ Component, route }">
			<transition name="fade-transform" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</el-main>
</template>

<style scoped lang="scss">
.app-main {
	/* 50= navbar  */
	min-height: calc(100vh - 50px);
	width: 100%;
	overflow: hidden;
	position: relative;
}
</style>
