import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: () => import("@/pages/Home.vue"),
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
