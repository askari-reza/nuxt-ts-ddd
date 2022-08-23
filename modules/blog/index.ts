import * as path from 'path';
import { Module } from '@nuxt/types'


const blogModule: Module = function() {
  // Use this, this.options, this.nuxt
  
    // Automatically register all components of the module
    this.nuxt.hook('components:dirs', (dirs: Array<object>) => { // ToDo: use correct type for func param
      // Add ./components dir to the list
      dirs.push({
        path: path.resolve(__dirname, 'components'),
      })      
    })
  
    // Add module routes to global router list
    this.extendRoutes((routes: Array<object>) => { // ToDo: use correct type for func param
      routes.push({
        name: 'blog',
        path: '/blog',
        component: path.resolve(__dirname, 'pages/blog.vue'),
      })      
    })
  
    // Register Store using a Plugin
    this.addPlugin(path.resolve(__dirname, 'store/blog.ts'))
}

export default blogModule
