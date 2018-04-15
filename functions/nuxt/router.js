import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _71df7a56 = () => import('..\\..\\src\\pages\\users.vue' /* webpackChunkName: "pages_users" */).then(m => m.default || m)
const _86caa528 = () => import('..\\..\\src\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */).then(m => m.default || m)
const _3b8d1ad4 = () => import('..\\..\\src\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */).then(m => m.default || m)
const _5de4f41d = () => import('..\\..\\src\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _70a003d0 = () => import('..\\..\\src\\pages\\info.vue' /* webpackChunkName: "pages_info" */).then(m => m.default || m)
const _2c75a020 = () => import('..\\..\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/users",
			component: _71df7a56,
			children: [
				{
					path: "",
					component: _86caa528,
					name: "users"
				},
				{
					path: ":id",
					component: _3b8d1ad4,
					name: "users-id"
				}
			]
		},
		{
			path: "/admin",
			component: _5de4f41d,
			name: "admin"
		},
		{
			path: "/info",
			component: _70a003d0,
			name: "info"
		},
		{
			path: "/",
			component: _2c75a020,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
