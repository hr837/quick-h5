<template>
	<div class="page customer-auth">
		<div class="customer-auth__setps">
			<van-steps :active="activeStep">
				<van-step>上传身份证</van-step>
				<van-step>录制视频</van-step>
				<van-step>验证结果</van-step>
			</van-steps>
		</div>
		<!-- 内容组件 -->
		<component :is="componentName" @next="activeStep += 1"></component>
	</div>
</template>

<script lang="ts" setup>
import { markRaw, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import UploadIdCard from "./components/UploadIdCard.vue";
import UploadVideo from "./components/UploadVideo.vue";

// 当前步骤
const activeStep = ref(0);

const _renderComponents = [UploadIdCard, UploadVideo, UploadIdCard];

const componentName = computed(() => {
	const current = _renderComponents[activeStep.value];
	return markRaw(current);
});
</script>

<style lang="less" scoped>
.customer-auth {
	margin: 0 10px;
	&__setps {
		margin-bottom: 20px;
	}
	&--submit {
		margin-top: 20px;
	}
}
</style>
