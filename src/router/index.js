import { createRouter, createWebHistory } from 'vue-router';

import BodyView from '../views/BodyView.vue';

import SignUp from '../views/AuthView/SignUp.vue';
import ContentAuthVerify from '../views/AuthView/ContentAuthVerify.vue';
import SignIn from '../views/AuthView/SignIn.vue';
import ChangePassword from '../views/AuthView/CangePassword.vue';
import RestoreEmailPassword from '../views/AuthView/RestoreEmailPassword.vue';
import RestoreRetypePassword from '../views/AuthView/RestoreRetypePassword.vue';

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
          path: 'home',
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
          path: 'group',
          name: 'group',
          component: Group
        },
        {
          path: 'group-create',
          name: 'group-create',
          component: CreateGroup
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ],
    },
    {
      path: '/sign-up',
      name: 'sign_up',
      component: SignUp,
    },
    {
      path: '/sign-in',
      name: 'sign_in',
      component: SignIn
    }, 
    {
      path: '/change-password',
      name: 'change_password',
      component: ChangePassword
    }, 
    {
      path: '/restore-password',
      name: 'restore-password',
      component: RestoreEmailPassword
    }, 
    {
      path: '/retype-password',
      name: 'retype-password',
      component: RestoreRetypePassword
    }, 
  ]
})

export default router
