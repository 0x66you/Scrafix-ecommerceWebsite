import router from './Router.js'
import store from './Store.js'

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
    computed:Vuex.mapState(['isSignedIn','Shop_category','Items_in_cart']),
    template:'#appUI'
}
