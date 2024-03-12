import {createRouter,createWebHashHistory} from 'vue-router';


import Overview from '../components/VOverview.vue';
import Reading from '../components/VReading.vue';
import Listening from '../components/VListening.vue';
import NotFound from '@/NotFound.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/reading',
            name: 'Reading',
            component: Reading
        },
        {
            path: '/listening',
            name: 'Listening',
            component: Listening
        },
        {
            path: '/error',
            name: 'NotFound',
            component: NotFound
        }
    ]
});


