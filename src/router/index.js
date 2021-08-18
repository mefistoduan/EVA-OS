import Vue from "vue";
import VueRouter from "vue-router";
// 加载条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import VueAMap from "vue-amap";

Vue.use(VueRouter);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
	key: "your amap key",
	plugin: [
		"AMap.Autocomplete",
		"AMap.PlaceSearch",
		"AMap.Scale",
		"AMap.OverView",
		"AMap.ToolBar",
		"AMap.MapType",
		"AMap.PolyEditor",
		"AMap.CircleEditor",
	],
	// 默认高德 sdk 版本为 1.4.4
	v: "1.4.4",
});

const routes = [
	{
		path: "/",
		name: "Index",
		component: () => import("../views/Index.vue"),
		children: [
			{
				path: "/",
				name: "Main",
				component: () => import("@/views/Auth/Main.vue"),
				meta: {
					title: "首页",
				},
			},
			{
				path: "/yhgl",
				name: "Yhgl",
				component: () => import("@/views/List/Yhgl.vue"),
				meta: {
					title: "用户管理",
				},
			},
			{
				path: "/chart",
				name: "Chart",
				component: () => import("@/views/List/Chart.vue"),
				meta: {
					title: "图表效果",
				},
			},{
				path: "/vuex",
				name: "vuex",
				component: () => import("@/views/List/vuex.vue"),
				meta: {
					title: "vuex",
				},
			},
			{
				path: "/test",
				name: "Test",
				component: () => import("@/views/List/Test.vue"),
				meta: {
					title: "Test",
				},
			},
			{
				path: "/aboutUs",
				name: "AboutUs",
				component: () => import("@/views/List/AboutUs.vue"),
				meta: {
					title: "关于我们",
				},
			},
			{
				path: "/pwd",
				name: "Pwd",
				component: () => import("@/views/System/Pwd.vue"),
				meta: {
					title: "密码修改",
				},
			},
			{
				path: "/basic",
				name: "Basic",
				component: () => import("@/views/List/Basic.vue"),
				meta: {
					title: "基本设置",
				},
			},
			{
				path: "/upload",
				name: "Upload",
				component: () => import("@/views/List/Upload.vue"),
				meta: {
					title: "上传文件",
				},
			},
			{
				path: "/timePage",
				name: "TimePage",
				component: () => import("@/views/Eva/TimePage.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/handPage",
				name: "HandPage",
				component: () => import("@/views/Eva/HandPage.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/radarPage",
				name: "RadarPage",
				component: () => import("@/views/Eva/RadarPage.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/warningPage",
				name: "WarningPage",
				component: () => import("@/views/Eva//WarningPage.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/finish",
				name: "finish",
				component: () => import("@/views/List/finish.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/finishDetail",
				name: "finishDetail",
				component: () => import("@/views/List/finishDetail.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/3dColumn",
				name: "3dColumn",
				component: () => import("@/views/animate/3dColumn.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/camera",
				name: "camera",
				component: () => import("@/views/Eva/camera.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/grpc",
				name: "grpc",
				component: () => import("@/views/List/grpc.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/webscoket",
				name: "webscoket",
				component: () => import("@/views/List/webscoket.vue"),
				meta: {
					title: "",
				},
			},
			{
				path: "/animate_card",
				name: "animate_card",
				component: () => import("@/views/animate/card.vue"),
				meta: {
					title: "",
				},
			},{
				path: "/routerwatch",
				name: "routerwatch",
				component: () => import("@/views/List/routerwatch.vue"),
				meta: {
					title: "",
				},
			},{
				path: "/hexagon",
				name: "hexagon",
				component: () => import("@/views/Eva/hexagon.vue"),
				meta: {
					title: "",
				},
			},
		],
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Auth/Login.vue"),
	},
	{
		path: "*",
		name: "404",
		component: () => import("../views/List/404.vue"),
	},
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
	NProgress.start();
	const isLogin = localStorage.token ? true : false;
	if (to.path == "/login" || to.path == "/register") {
		//'login'和'register'相当于是路由白名单
		next();
	} else {
		//如果token存在，就正常跳转，如果不存在，则说明未登陆，则跳转到'login'
		// isLogin ? next() : next("/login");
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
