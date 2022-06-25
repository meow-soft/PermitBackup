import {createWebHistory, createRouter} from 'vue-router';
import customerList from '../components/customers/CustomerList.vue';

const routes = [
    {
        path: '/',
        alias: '/customers',
        name: 'customers',
        component: customerList
    },
    {
        path: '/customers/:id',
        name: 'customer-details',
        component: () => import('../components/customers/Customer.vue')
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('../components/customers/AddCustomer.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/HomeView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
