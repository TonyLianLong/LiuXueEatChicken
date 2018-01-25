import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Answer from '@/components/Answer'
import Result from '@/components/Result'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/answer',
      component: Answer
    },
    {
      path: '/result',
      component: Result
    }
  ]
})
