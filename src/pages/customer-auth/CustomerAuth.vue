<template>
	<div class="page customer-auth">
		<div class="container">
			<div class="customer-auth__setps">
				<van-steps :active="activeStep">
					<van-step>上传身份证</van-step>
					<van-step>录制视频</van-step>
					<van-step>验证结果</van-step>
				</van-steps>
			</div>
		</div>

		<!-- 内容组件 -->
		<component :is="componentName" @next="next"></component>
	</div>
</template>

<script lang="ts" setup>
import { markRaw, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import UploadIdCard from "./components/UploadIdCard.vue";
import UploadVideo from "./components/UploadVideo.vue";

// 当前步骤
const activeStep = ref(0);

const _renderComponents = [UploadIdCard, UploadVideo];

const componentName = computed(() => {
	const current = _renderComponents[activeStep.value];
	return markRaw(current);
});

const router = useRouter();
function next() {
	if (activeStep.value < 1) {
		activeStep.value++;
	} else {
		router.push("/apply-success");
	}
}
</script>

<style lang="less" scoped>
.customer-auth {
	&__setps {
		margin: 0 10px 10px;
	}
}
</style>
