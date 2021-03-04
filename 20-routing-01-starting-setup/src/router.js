import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/partial/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/partial/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Before enter users route');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition;

    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach router:');
  console.log(to, from);
  // next(true);
  // next(false);

  // if (to.name === 'team-members') next(true);
  // else next({ name: 'team-members', params: { teamId: 't2' } });

  // Check Meta
  // if (to.meta.needsAuth) {
  //   console.log('Needs Authentication');
  //   next(false);
  // }
  // else{
  //   next();
  // }

  next();
});

router.afterEach(function(to, from) {
  // Sending analytics...
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
