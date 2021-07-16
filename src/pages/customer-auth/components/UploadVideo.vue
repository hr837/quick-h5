<template>
	<div class="component upload-video">
		<div class="upload-bg"></div>
		<van-uploader
			accept="video/*"
			capture="camera"
			result-type="file"
			:disabled="disabled"
			:before-read="beforeRead"
			:after-read="onFileLoad"
		>
			<van-button type="primary" block>开始识别</van-button>
		</van-uploader>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { defineEmit } from "@vue/runtime-core";
import { Toast } from "vant";

const disabled = ref(false);
const emitter = defineEmit(["next"]);

function beforeRead(file) {
	disabled.value = true;
	return true;
}

function onFileLoad(file) {
	console.log(file, "readed");
	const toast = Toast.loading({
		message: "识别中...",
		duration: 0,
	});
	setTimeout(() => {
		toast.clear();
		Toast.success("验证成功");

		setTimeout(() => {
			emitter("next");
		}, 500);
	}, 3000);
}
</script>

<style lang="less" scoped>
.component.upload-video {
	.upload {
		&-bg {
			height: 400px;
			background: url("/images/face-auth.png") -2px top / 100% 400px no-repeat;
		}
	}
}
</style>

<style lang="less">
.component.upload-video {
	.van-uploader {
		display: block;
		&__wrapper {
			display: block;
		}
	}
}
</style>
