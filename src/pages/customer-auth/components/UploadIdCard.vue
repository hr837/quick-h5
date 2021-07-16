<template>
	<div class="component upload-id-card">
		<div class="upload_item">
			<div class="upload_item-front"></div>
		</div>
		<div class="upload_item">
			<div class="upload_item-behand"></div>
		</div>
		<div class="upload-submit">
			<van-button type="primary" block @click="submit">下一步</van-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineComponent, defineEmit } from "@vue/runtime-core";

const emitter = defineEmit(["next"]);

function submit() {
	emitter("next");
}
</script>

<style lang="less" scoped>
.component.upload-id-card {
	.upload_item {
		border-radius: 8px;
		height: 150px;
		background-color: @primary-color;
		& + .upload_item {
			margin-top: 10px;
		}
	}
	.upload-submit {
		margin-top: 20px;
	}
}
</style>
