import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		// component: () => import("@/pages/Home.vue"),
		component: () => import("@/pages/Apply.vue"),
	},
	{
		path: "/loan-apply",
		component: () => import("@/pages/LoanApply.vue"),
	},
	// {
	// 	path: "/apply",
	// 	component: () => import("@/pages/Apply.vue"),
	// },
	{
		path: "/apply-success",
		component: () => import("@/pages/ApplySuccess.vue"),
	},
	{
		path: "/approve-failed",
		component: () => import("@/pages/ApproveFailed.vue"),
	},
	{
		path: "/auth-notice",
		component: () => import("@/pages/AuthNotice.vue"),
	},
	{
		path: "/customer-auth",
		component: () => import("@/pages/customer-auth/CustomerAuth.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/pages/NotFound.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
