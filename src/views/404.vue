<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {
	const timer = setTimeout(() => {
		router.push('/')
	}, 500)
	clearTimeout(timer)
})
</script>

<template>
	<el-empty :image-size="200" description="404页面走丢了" />
</template>

<style lang="scss" scoped></style>
