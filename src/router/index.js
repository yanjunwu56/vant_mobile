import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: resolve =>
                require(['./../components/HelloWorld.vue'], resolve)
        },
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