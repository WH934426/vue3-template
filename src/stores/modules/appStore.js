import { getSidebarStatus, setSidebarStatus } from '@/utils/auth'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
	const sidebar = ref({
		opened: getSidebarStatus() ? !!+getSidebarStatus() : true,
		withoutAnimation: false,
	})

	const isSidebarOpen = computed(() => sidebar.value.opened)

	const toggleSideBar = () => {
		sidebar.value.opened = !sidebar.value.opened
		sidebar.value.withoutAnimation = false
		sidebar.value.opened ? setSidebarStatus('1') : setSidebarStatus('0')
	}

	const closeSideBar = (withoutAnimation) => {
		setSidebarStatus('0')
		sidebar.value.opened = false
		sidebar.value.withoutAnimation = withoutAnimation
	}

	const device = ref('desktop')

	const isMobile = computed(() => value.device === 'mobile')

	const toggleDevice = (device) => {
		device.value = device
	}

	return {
		sidebar,
		isSidebarOpen,
		toggleSideBar,
		closeSideBar,
		device,
		isMobile,
		toggleDevice,
	}
})
