<template>
	<div class="component upload-id-card">
		<div class="upload_item flex align-items-center justify-content-between">
			<div class="upload_item-tips flex align-items-center">
				<div class="upload_item-tips_img upload_item-tips_img-front"></div>
				<div class="upload_item-tips_msg">{{ frontMsg }}</div>
			</div>
			<div class="upload_item-operate">
				<van-icon
					v-if="!idCradInfo.front"
					name="add"
					size="36"
					color="white"
					@click="chooseImage('front')"
				/>
				<van-icon v-else name="checked" size="36" color="#67C23A" />
			</div>
		</div>
		<div class="upload_item flex align-items-center justify-content-between">
			<div class="upload_item-tips flex align-items-center">
				<div class="upload_item-tips_img upload_item-tips_img-behand"></div>
				<div class="upload_item-tips_msg">{{ behandMsg }}</div>
			</div>
			<div class="upload_item-operate">
				<van-icon
					v-if="!idCradInfo.behand"
					name="add"
					size="36"
					color="white"
				/>
				<van-icon v-else name="checked" size="36" color="#67C23A" />
			</div>
		</div>

		<van-form class="upload-result" @submit="submit">
			<van-cell-group title="请确认您的身份信息，若有误请手动修改">
				<van-field
					v-model="idCradInfo.name"
					name="姓名"
					label="姓名"
					placeholder="姓名"
					:rules="[{ required: true, message: '请填写用户名' }]"
				/>
				<van-field
					v-model="idCradInfo.code"
					name="证件号码"
					label="证件号码"
					placeholder="证件号码"
					:rules="[{ required: true, message: '请填写证件号码' }]"
				/>
			</van-cell-group>
			<div class="upload-submit">
				<van-button
					type="primary"
					:disabled="!canNext"
					block
					native-type="submit"
				>
					下一步
				</van-button>
			</div>
		</van-form>

		<van-uploader
			ref="refUpload"
			style="display: none"
			accept="image/*"
			result-type="file"
		></van-uploader>
	</div>
</template>

<script lang="ts" setup>
import {
	computed,
	defineComponent,
	defineEmit,
	reactive,
} from "@vue/runtime-core";
import { ref } from "vue";

const emitter = defineEmit(["next"]);
const canNext = computed(() => idCradInfo.name && idCradInfo.code);
const refUpload = ref<any>();

const idCradInfo = reactive({
	front: false,
	behand: false,
	name: "",
	code: "",
});

const uploadImage = reactive({
	front: null,
	behand: null,
});

const frontMsg = computed(() =>
	idCradInfo.front ? "上传成功" : "上传身份证(照片面)"
);
const behandMsg = computed(() =>
	idCradInfo.behand ? "上传成功" : "上传身份证(国徽面)"
);

function submit() {
	emitter("next");
}

function chooseImage(type: "front" | "behand") {
	refUpload.value.chooseFile();
}
</script>

<style lang="less" scoped>
.component.upload-id-card {
	.upload_item {
		border-radius: 8px;
		height: 150px;
		background-color: @primary-color;
		margin: 0 10px;
		& + .upload_item {
			margin-top: 10px;
		}
		// 左侧区域
		&-tips {
			color: #fcfcfc;
			&_img {
				margin: 0 10px;
				width: 60px;
				height: 60px;
				&-front {
					background: url("/images/id1.png") center / contain no-repeat;
				}
				&-behand {
					background: url("/images/id2.png") center / contain no-repeat;
				}
			}
		}
		// 右侧操作区
		&-operate {
			margin-right: 20px;
		}
	}
	.upload-result {
		margin-top: 10px;
	}
	.upload-submit {
		margin: 20px 10px;
	}
}
</style>
