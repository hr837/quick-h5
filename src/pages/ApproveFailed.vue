<template>
	<div class="page approve-failed">
		<div class="approve-failed--sign">
			<van-icon name="warning" size="100" color="#F56C6C" />
			<div class="approve-failed--sign_msg">提现失败</div>
		</div>
		<div class="container approve-failed--info">
			<div>
				您本人名下银行账户存在代扣风险，建议优质三方账户受托支付完成放款，详情请询问当地客户经理
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style lang="less" scoped>
.approve-failed {
	text-align: center;
	&--sign {
		padding: 40px 0;
		&_msg {
			font-size: 18px;
			margin-top: 20px;
		}
	}
	&--info {
		padding: 10px 20px;
		font-size: 16px;
		line-height: 22px;
	}
}
</style>
