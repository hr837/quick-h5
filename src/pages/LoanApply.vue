<template>
	<div class="page loan-apply">
		<div class="page-title">借款申请</div>
		<van-cell title="发款账号" :value="model.account" />
		<van-cell class="loan-apply--item_tip" title="借款金额"></van-cell>
		<van-cell :title="`${model.money}￥`"></van-cell>
		<div class="loan-apply__icons flex justify-content-around">
			<div class="loan-apply__icons_item">
				<van-icon name="refund-o" size="20" />
				<span class="loan-apply__icons_item-text">年利率</span>
			</div>
			<div class="loan-apply__icons_item">
				<van-icon name="orders-o" size="20" />
				<span class="loan-apply__icons_item-text">按日计息</span>
			</div>
			<div class="loan-apply__icons_item">
				<van-icon name="cash-back-record" size="20" />
				<span class="loan-apply__icons_item-text">随借随到</span>
			</div>
		</div>
		<van-cell-group class="loan-apply-inputs">
			<van-cell
				:value="model.payWay"
				is-link
				title="支付方式"
				@click="openSelect('payWay')"
			></van-cell>
			<van-cell
				:value="model.purpose"
				is-link
				title="贷款用途"
				@click="openSelect('purpose')"
			></van-cell>
			<van-cell
				:value="dueDateStr"
				is-link
				title="借款到期日"
				@click="openSelect('dueDate')"
			></van-cell>
			<van-cell :value="model.interest" title="借款发放当日年利率"></van-cell>
			<van-cell
				:value="model.repaymentWay"
				is-link
				title="还款方式"
				@click="openSelect('repaymentWay')"
			></van-cell>
			<van-cell
				:value="model.adjustMode"
				is-link
				title="利率调整方式"
				@click="openSelect('adjustMode')"
			></van-cell>
		</van-cell-group>

		<div class="loan-apply-operate">
			<van-button type="primary" block @click="submit">提交提现</van-button>
		</div>

		<van-popup v-model:show="state[keyName]" position="bottom">
			<van-datetime-picker
				v-if="keyName === 'dueDate'"
				v-model="model.dueDate"
				type="date"
				title="选择年月日"
				:min-date="dateSetting.min"
				:max-date="dateSetting.max"
				@cancel="state.dueDate = false"
				@confirm="onSelected"
			/>
			<van-picker
				v-else
				:columns="columns"
				@cancel="state[keyName] = false"
				@confirm="onSelected"
			/>
		</van-popup>
	</div>
</template>

<script lang="ts" setup>
import { useFilter } from "@/utils/hook.service";
import { computed, onMounted, reactive, ref } from "vue";

const model = reactive({
	account: "6227889991239912",
	money: 300000,
	payWay: "受托支付",
	purpose: "其他消费",
	dueDate: new Date(),
	interest: "7%",
	repaymentWay: "等额本息",
	adjustMode: "固定利息",
});

// 格式化日期
const filter = useFilter();
const dueDateStr = computed(() => filter.dateFormat(model.dueDate));

const keyName = ref("");

const setting = reactive({
	payWay: ["受托支付"],
	purpose: ["其他消费"],
	repaymentWay: ["等额本息"],
	adjustMode: ["固定利息"],
});
const columns = computed(() => setting[keyName.value]);
const dateSetting = reactive({
	min: new Date(),
	max: new Date(),
});

const state = reactive({
	payWay: false,
	purpose: false,
	dueDate: false,
	interest: false,
	repaymentWay: false,
	adjustMode: false,
});

function openSelect(name: string) {
	keyName.value = name;
	state[name] = true;
}

function onSelected(value: string | Date, index: number) {
	model[keyName.value] = value;
	state[keyName.value] = false;
}

import dayjs from "dayjs";
import { useRouter } from "vue-router";
onMounted(() => {
	const tmp = dayjs(new Date()).add(3, "year");
	model.dueDate = tmp.toDate();
	dateSetting.min = tmp.toDate();
	dateSetting.max = tmp.add(7, "year").toDate();
});

const router = useRouter();
function submit() {
	router.push("/approve-failed");
}
</script>

<style lang="less" scoped>
.page-title {
	background: #fff;
}
.loan-apply {
	&--item {
		&_tip {
			margin-top: 10px;
			font-size: 18px;
			font-weight: bold;
		}
	}
	&__icons {
		height: 60px;
		&_item {
			display: flex;
			align-items: center;
			color: var(--van-gray-6);
			&-text {
				margin-left: 5px;
			}
		}
	}
	&-operate {
		margin-top: 10px;
		padding: 10px;
	}
}
</style>
