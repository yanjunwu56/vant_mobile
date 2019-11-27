import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: resolve =>
                require(['./../view/index.vue'], resolve),
            children: [{
                    path: '/',
                    name: 'home',
                    component: resolve =>
                        require(['./../view/home.vue'], resolve),
                },
                {
                    path: 'list',
                    name: 'list',
                    component: resolve =>
                        require(['./../view/list.vue'], resolve),
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: resolve =>
                        require(['./../view/detail.vue'], resolve),
                },
                {
                    path: 'myinfo',
                    name: 'myinfo',
                    component: resolve =>
                        require(['./../view/myinfo.vue'], resolve)
                }
            ]
        }
        // {
        //     path: '/home',
        //     component: () =>
        //         import ('@view/home.vue')
        // }, {
        //     path: '/404',
        //     component: () =>
        //         import ('@view/404.vue')
        // }, {
        //     path: '/home',
        //     component: () =>
        //         import ('@view/list.vue')
        // }, {
        //     path: '/detail',
        //     component: () =>
        //         import ('@view/detail.vue')
        // }, {
        //     path: '/detail',
        //     component: () =>
        //         import ('@view/detail.vue')
        // },

    ]
})