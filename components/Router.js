import home from './Home.js'
import asus from './Shop/Asus.js'
import acer from './Shop/Acer.js'
import apple from './Shop/Apple.js'
import lenovo from './Shop/Lenovo.js'
import msi from './Shop/Msi.js'
import microsoft from './Shop/Microsoft.js'
import razer from './Shop/Razer.js'
import login from './Login.js'
import signup from './Signup.js'
import shoppingcart from './Shoppingcart.js'

const routes = [
    {
        path:'/home',
        name:'home',
        alias:['/','*'],
        component:home
    },
    {
        path:'/asus',
        name:'asus',
        component:asus
    },
    {
        path:'/acer',
        name:'acer',
        component:acer
    },
    {
        path:'/apple',
        name:'apple',
        component:apple
    },
    {
        path:'/lenovo',
        name:'lenovo',
        component:lenovo
    },
    {
        path:'/microsoft',
        name:'microsoft',
        component:microsoft
    },
    {
        path:'/msi',
        name:'msi',
        component:msi
    },
    {
        path:'/razer',
        name:'razer',
        component:razer
    },
    {
        path:'/login',
        component:login,
    },
    {
        path:'/signup',
        component:signup
    },
    {
        path:'/shoppingcart',
        component:shoppingcart,
        meta:{
            requiresAuth:true
        }
    }
]

const router =  new VueRouter({
    mode:'history',
    routes
})

export default router;