import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from '@/pages/Sandbox'
import CommanderList from '@/pages/CommanderList'
import ArtifactList from '@/pages/ArtifactList'
import skillList from '@/pages/SkillList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      alias: '',
      path: '/commanders',
      name: 'Commanders',
      component: CommanderList
    },
    {
      alias: '',
      path: '/artifacts',
      name: 'Artifacts',
      component: ArtifactList
    },
    {
      alias: '',
      path: '/skills',
      name: 'Skills',
      component: skillList
    }
  ]
})
