<script setup>
import { ref } from 'vue'
import { validUsername } from '@/utils/validate'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

// 表单对象
const loginFormRef = ref()
const loginForm = ref({
	username: '',
	password: '',
})
// 自定义校验规则
const validateUsername = (_, value, callback) => {
	if (!validUsername(value)) {
		callback(new Error('请输入正确的用户名'))
	} else {
		callback()
	}
}
// 校验规则
const loginRules = ref({
	username: [{ required: true, trigger: 'blur', message: '请输入用户名' }, { validator: validateUsername }],
	password: [
		{ required: true, trigger: 'blur', message: '请输入密码' },
		{ min: 6, max: 15, trigger: 'blur', message: '密码长度在6到15个字符之间' },
	],
})

// 加载状态
const loading = ref(false)
// 重定向
const redirect = ref(undefined)
// 登录
const userStore = useUserStore()
const router = useRouter()
const handleLogin = () => {
	loginFormRef.value.validate(async (valid) => {
		if (valid) {
			loading.value = true
			await userStore.Login(loginForm.value)
			await router.push({ path: redirect.value || '/' })
			loading.value = false
		} else {
			return false
		}
	})
}
</script>

<template>
	<div class="login-container">
		<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
			<div class="title-container">
				<h3 class="title">Login Form</h3>
			</div>
			<el-form-item prop="username">
				<el-input
					v-model="loginForm.username"
					placeholder="请输入用户名: admin/system"
					name="username"
					tabindex="1"
					autocomplete="on"
				>
					<template #prefix>
						<el-icon class="svg-container"><i-ep-user /></el-icon>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					v-model="loginForm.password"
					type="password"
					placeholder="请输入密码: 111111"
					show-password
					tabindex="2"
				>
					<template #prefix>
						<el-icon class="svg-container"><i-ep-lock /></el-icon>
					</template>
				</el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" class="btn" :loading="loading" @click="handleLogin"> 登录 </el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<style lang="scss" scoped>
$bg: #2d3a4b;
$light_gray: #eee;
$dark_gray: #889aa4;
.login-container {
	min-height: 100%;
	width: 100%;
	background-color: $bg;
	overflow: hidden;

	.login-form {
		position: relative;
		width: 520px;
		max-width: 100%;
		padding: 160px 35px 0;
		margin: 0 auto;
		overflow: hidden;
	}

	.title-container {
		position: relative;

		.title {
			font-size: 26px;
			color: $light_gray;
			margin: 0 auto 40px auto;
			text-align: center;
			font-weight: bold;
		}
	}
	.svg-container {
		color: $dark_gray;
		vertical-align: middle;
		width: 30px;
		display: inline-block;
	}
	.btn {
		width: 100%;
		margin-bottom: 30px;
	}
}
</style>
