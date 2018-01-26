import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Game from '@/components/Game'
import Level from '@/components/Level'
import Result from '@/components/Result'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      name: 'Welcome',
      path: '/',
      alias: '/welcome',
      component: Welcome
    },
    {
      name: 'Game',
      path: '/game',
      component: Game,
      beforeEnter (to, from, next) {
        console.log(from)
        if (from.name === 'Welcome') {
          next()
        } else {
          console.log("Invalid Entry to Game");
          next('/')
        }
      }
    },
    {
      name: 'Result',
      path: '/result',
      component: Result,
      beforeEnter (to, from, next) {
        console.log(from)
        if (from.name === 'Game') {
          next()
        } else {
          console.log("Invalid Entry to Result");
          next('/')
        }
      }
    },
    {
      name: 'Level',
      path: '/level',
      component: Level
    }
  ]
})
