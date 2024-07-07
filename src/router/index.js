import { createRouter, createWebHistory } from 'vue-router';

import BodyView from '../app/BodyView.vue';
import Home from '../pages/Home.vue';
import Search from '../pages/Search.vue';
import GroupList from '../pages/group/GroupList.vue';
import Group from '../pages/group/Group.vue';
import CreateGroup from '../pages/group/CreateGroup.vue';
import Profile from '../pages/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BodyView,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: 'search',
          name: 'search',
          component: Search,
        },
        {
          path: 'group-list',
          name: 'group-list',
          component: GroupList,
        },
        {
          path: 'group/:groupId',
          name: 'group',
          component: Group,
        },
        {
          path: 'group-create',
          name: 'group-create',
          component: CreateGroup,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
      ],
    },
  ],
});

export default router;
