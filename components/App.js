import router from './Router.js'
import store from './Store.js'

router.beforeEach((to,from,next)=>{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser){
        next('/login')
    }else if( requiresAuth && currentUser){
        next()
    }else{
        next()
    }
})

export default {
    name: 'App',
    store,
    router,
    data(){
        return{
            Home:'首頁',
            Shop:'全站商品分類'
        }
    },
    computed:Vuex.mapState(['isSignedIn','Shop_category']),
    template:'#appUI'
}
