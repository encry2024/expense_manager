import VueRouter from 'vue-router';

let routes = [
    {
        path: '/user/',
        component: require('./views/user/Index')
    },
    {
        path: '/user/create/',
        component: require('./views/user/Create')
    },
    {
        path: '/user/edit/:id',
        component: require('./views/user/Edit')
    },
    {
        path: '/expense',
        component: require('./views/expense/Index')
    },
    {
        path: '/expense/create/:id',
        component: require('./views/expense/Create')
    },
    {
        path: '/expense/:id/edit/',
        component: require('./views/expense/Edit')
    },
    {
        path: '/category/create',
        component: require('./views/category/Create')
    },
    {
        path: '/category',
        component: require('./views/category/Index')
    },
    {
        path: '/category/:id/edit',
        component: require('./views/category/Edit')
    },
    {
        path: '/dashboard',
        component: require('./views/dashboard/Index')
    }
]

export default new VueRouter({
    routes,
    linkExactActiveClass: 'active',
    mode: 'history'
});