<template>
	<div class="page apply-success">
		<div class="apply-success-info">
			<div class="apply-success-info_text">可借额度</div>
			<div class="apply-success-info_text apply-success-info_text-money">
				￥300000元
			</div>
			<div class="apply-success-info_text">年利率 7%</div>
			<div class="apply-success-info_text">恭喜您！申请成功！快去借款吧~</div>
		</div>
		<div class="apply-success-tip container">
			<div class="apply-success-tip_item">
				<div class="apply-success-tip_item-num">1</div>
				<div class="apply-success-tip_item-msg">提交成功</div>
				<div class="apply-success-tip_item-tail"></div>
			</div>
			<div class="apply-success-tip_item">
				<div class="apply-success-tip_item-num">2</div>
				<div class="apply-success-tip_item-msg">审核通过</div>
				<div class="apply-success-tip_item-tail"></div>
			</div>
			<div class="apply-success-tip_item">
				<div class="apply-success-tip_item-num">3</div>
				<div class="apply-success-tip_item-msg">获取授权</div>
				<div class="apply-success-tip_item-tail"></div>
			</div>
			<div class="apply-success-tip_item">
				<div class="apply-success-tip_item-num">4</div>
				<div class="apply-success-tip_item-msg">提现</div>
			</div>
		</div>
		<div class="apply-success-operate">
			<van-button type="primary" block @click="toLoan">去借款</van-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
function toLoan() {
	router.push("/loan-apply");
}
</script>

<style lang="less" scoped>
.apply-success {
	&-info {
		background-color: @blue-color;
		padding: 10px;
		text-align: center;
		color: @text-white;

		&_text {
			padding: 10px 0;
			&-money {
				font-size: 32px;
			}
		}
	}
	&-tip {
		margin: 10px 0;
		padding: 30px 20px;
		display: flex;

		&_item {
			flex: 1;
			text-align: center;
			position: relative;
			&-num {
				text-align: center;
				@size: 32px;
				line-height: @size;
				height: @size;
				width: @size;
				border-radius: 50%;
				background: @blue-color;
				color: @text-white;
				margin: auto;
				font-size: 16px;
			}
			&-msg {
				margin-top: 10px;
				font-size: 11px;
			}
			&-tail {
				position: absolute;
				width: 50%;
				height: 2px;
				background: var(--van-gray-3);
				top: 15px;
				left: 100%;
				transform: translateX(-50%);
			}
		}
	}
}
</style>
