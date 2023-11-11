import { createRouter, createWebHistory } from 'vue-router';

import BodyView from '../views/BodyView.vue';
import Home from '../views/ContentView/content/Home.vue';
import Search from '../views/ContentView/content/Search.vue';
import GroupList from '../views/ContentView/content/GroupView/GroupList.vue';
import Group from '../views/ContentView/content/GroupView/Group.vue';
import CreateGroup from '../views/ContentView/content/GroupView/CreateGroup.vue';
import Profile from '../views/ContentView/content/ProfileView/Profile.vue';

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
