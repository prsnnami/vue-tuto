import Vue from 'vue';
import Router from 'vue-router';
import Test from '@/components/Test';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});
