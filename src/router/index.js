import { createRouter, createWebHistory } from 'vue-router';

import BodyView from '../App/BodyView.vue';
import Home from '@Pages/Home.vue';
import Search from '@Pages/Search.vue';
import GroupList from '@Pages/Group/GroupList.vue';
import Group from '@Pages/Group/Group.vue';
import CreateGroup from '@Pages/Group/CreateGroup.vue';
import Profile from '@Pages/Profile/Profile.vue';

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
          component: Home
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'group-list',
          name: 'group-list',
          component: GroupList
        },
        {
          path: 'group/:groupId',
          name: 'group',
          component: Group
        },
        {
          path: 'group-create',
          name: 'group-create',
          component: CreateGroup
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ],
    }
  ]
})

export default router;
