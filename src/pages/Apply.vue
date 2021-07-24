<template>
	<div class="page apply">
		<div class="page-title">个人信息录入</div>
		<van-form
			class="apply-form"
			input-align="right"
			error-message-align="right"
			@submit="submit"
		>
			<van-cell-group>
				<van-field
					v-model="model.name"
					name="name"
					label="证件姓名"
					placeholder="请输入姓名"
					:maxlength="20"
					:rules="[{ required: true, message: '请输入姓名' }]"
				></van-field>
				<van-field
					v-model="model.type"
					disabled
					name="type"
					label="证件类型"
				></van-field>
				<van-field
					v-model="model.code"
					name="code"
					label="证件号码"
					placeholder="请输入证件号码"
					:maxlength="18"
					:rules="[
						{ required: true, message: '请输入证件号码' },
						{ pattern: /^\d{17}[Xx0-9]$/, message: '请输入正确的证件号码' },
					]"
				></van-field>
				<van-field
					v-model="model.company"
					name="company"
					label="单位名称"
					:maxlength="100"
					placeholder="请输入单位名称"
				></van-field>
				<van-field
					v-model="model.address"
					name="address"
					label="现居地址"
					:maxlength="100"
					placeholder="请输入现居地址"
				></van-field>
				<van-field
					v-model="model.cardNo"
					name="cardNo"
					label="到账银行卡"
					:maxlength="19"
					placeholder="请输入到账银行卡"
				></van-field>
				<van-field
					v-model="model.phone"
					name="phone"
					label="手机号码"
					:maxlength="11"
					placeholder="请输入手机号码"
					:rules="[
						{ required: true, message: '请输入手机号码' },
						{
							pattern: /^1[3-9]\d{9}$/,
							message: '请输入正确的手机号',
							trigger: 'onBlur',
						},
					]"
				></van-field>
			</van-cell-group>
			<div class="apply-operate">
				<van-button type="primary" block native-type="submit">
					提交申请
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const model = reactive({
	name: "",
	type: "二代身份证",
	code: "",
	company: "",
	address: "",
	cardNo: "",
	phone: "",
});

const router = useRouter();
function submit() {
	router.push("/auth-notice");
}
</script>

<style lang="less" scoped>
.page-title {
	color: #fff;
	background: var(--van-blue);
}
.apply {
	&-form {
		margin-top: 10px;
	}
	&-operate {
		position: fixed;
		left: 0;
		right: 0;
		padding: 10px;
		bottom: 0;
	}
}
</style>
