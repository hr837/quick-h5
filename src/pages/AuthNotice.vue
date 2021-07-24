<template>
	<div class="page auth-notice">
		<div class="auth-notice_bg"></div>
		<div class="auth-notice_operate">
			<van-button type="primary" block @click="submit">快速验证</van-button>
			<div class="auth-notice_operate__agreement flex align-items-center">
				<van-checkbox v-model="agreemented">我已认真阅读并同意</van-checkbox>
				<div class="auth-notice_operate__agreement-redirect">全部协议</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Toast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const agreemented = ref(false);
const router = useRouter();

function submit() {
	if (!agreemented.value) {
		Toast("请先勾选同意协议");
		return;
	}
	router.push("/customer-auth");
}
</script>

<style lang="less" scoped>
.auth-notice {
	&_bg {
		height: 300px;
		background: url("/images/auth-bg.jpg") center / cover no-repeat;
	}
	&_operate {
		margin-top: 10px;
		padding: 10px;
		&__agreement {
			margin-top: 10px;
			:deep(.van-checkbox__label) {
				color: var(--van-gray-6);
			}
			&-redirect {
				margin-left: 10px;
			}
		}
	}
}
</style>

<style lang="less">
.page.auth-notice {
	.van-checkbox {
		&__icon {
			font-size: 15px;
		}
		&__label {
			color: var(--van-gray-6);
		}
	}
}
</style>
