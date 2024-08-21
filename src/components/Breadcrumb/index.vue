<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbItems = ref([])

// Format and compute the breadcrumb items based on the current route
const formatBreadcrumb = (matched) => {
	const first = matched[0]
	if (!isDashboard(first)) {
		matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
	}
	return matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

// Determine if the first matched route is the dashboard
const isDashboard = (route) => {
	const name = route && route.name
	if (!name) {
		return false
	}
	return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

// Watch for route changes and update the breadcrumb items
watch(
	() => route.matched.filter((item) => item.meta && item.meta.title),
	(matched) => {
		breadcrumbItems.value = formatBreadcrumb(matched)
	},
	{ immediate: true },
)

// Filter out hidden items
const filteredBreadcrumbItems = computed(() => breadcrumbItems.value.filter((item) => !item.hidden))

// Determine if an item is the last one in the breadcrumb
const isLastItem = (item) => {
	return breadcrumbItems.value.indexOf(item) === breadcrumbItems.value.length - 1
}

// Handle link clicks
const handleLink = (to) => {
	router.push(to)
}
</script>

<template>
	<el-breadcrumb class="app-breadcrumb" separator="/">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item v-for="item in filteredBreadcrumbItems" :key="item.path" :to="item.redirect || item.path">
				<template #default="{ to }">
					<span v-if="isLastItem(item)">
						{{ item.meta.title }}
					</span>
					<a v-else @click.prevent="handleLink(to)">
						{{ item.meta.title }}
					</a>
				</template>
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
	display: inline-block;
	font-size: 14px;
	line-height: 50px;
	margin-left: 8px;

	.no-redirect {
		color: #97a8be;
		cursor: text;
	}
}
</style>
