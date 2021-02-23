import Vue from 'vue'
import VueRouter from 'vue-router'
// 加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueAMap from 'vue-amap';

Vue.use(VueRouter);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import( '../views/Index.vue'),
        children: [
            {
                path: '/',
                name: 'Main',
                component: () => import('@/views/Main.vue'),
                meta: {
                    title: "首页",
                }
            }, {
                path: '/yhgl',
                name: 'Yhgl',
                component: () => import('@/views/Yhgl.vue'),
                meta: {
                    title: "用户管理",
                }
            }, {
                path: '/mockPage',
                name: 'MockPage',
                component: () => import('@/views/MockPage.vue'),
                meta: {
                    title: "用户管理",
                }
            }, {
                path: '/chart',
                name: 'Chart',
                component: () => import('@/views/Chart.vue'),
                meta: {
                    title: "图表效果",
                }
            }, {
                path: '/test',
                name: 'Test',
                component: () => import('@/views/Test.vue'),
                meta: {
                    title: "Test",
                }
            }, {
                path: '/aboutUs',
                name: 'AboutUs',
                component: () => import('@/views/AboutUs.vue'),
                meta: {
                    title: "关于我们",
                }
            }, {
                path: '/pwd',
                name: 'Pwd',
                component: () => import('@/views/Pwd.vue'),
                meta: {
                    title: "密码修改",
                }
            }, {
                path: '/basic',
                name: 'Basic',
                component: () => import('@/views/Basic.vue'),
                meta: {
                    title: "基本设置",
                }
            }, {
                path: '/upload',
                name: 'Upload',
                component: () => import('@/views/Upload.vue'),
                meta: {
                    title: "上传文件",
                }
            },{
                path: '/timePage',
                name: 'TimePage',
                component: () => import('@/views/TimePage.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/handPage',
                name: 'HandPage',
                component: () => import('@/views/HandPage.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/radarPage',
                name: 'RadarPage',
                component: () => import('@/views/RadarPage.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/warningPage',
                name: 'WarningPage',
                component: () => import('@/views/WarningPage.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/finish',
                name: 'finish',
                component: () => import('@/views/finish.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/finishDetail',
                name: 'finishDetail',
                component: () => import('@/views/finishDetail.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/3dColumn',
                name: '3dColumn',
                component: () => import('@/views/3dColumn.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/camera',
                name: 'camera',
                component: () => import('@/views/camera.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/grpc',
                name: 'grpc',
                component: () => import('@/views/grpc.vue'),
                meta: {
                    title: "",
                }
            },{
                path: '/webscoket',
                name: 'webscoket',
                component: () => import('@/views/webscoket.vue'),
                meta: {
                    title: "",
                }
            },
        ]
    }, {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
   {
        path: '*',
        name: '404',
        component: () => import( '../views/404.vue')
    },
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    const isLogin = localStorage.token ? true : false;
    if (to.path == '/login' || to.path == '/register') {//'login'和'register'相当于是路由白名单
        next();
    } else {
        //如果token存在，就正常跳转，如果不存在，则说明未登陆，则跳转到'login'
        // isLogin ? next() : next("/login");
        next()
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router
