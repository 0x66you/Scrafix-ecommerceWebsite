import sideleft from './SideLeft.js'
import sideright from './SideRight.js'
import sideright2 from './SideRight2.js'

export default {
    name:'shoppingcart',
    // firestore(){
    //     return{
    //         store:db.collection().orderby('created')
    //     }
    // },
    components:{
        sideleft,
        sideright,
        sideright2
    },
    data(){
        return {
            buyingLimit:10
        }
    },
    computed:{
        totalAmount(){
            let amount = 0;
            for(let item of this.$store.getters.getPersonCart){
                amount += item.price*item.quantity
            }
            return amount
        }
    },
    methods:{
        setissignedin(payload){
            this.$store.dispatch('setissignedin',payload);
        },
        setusername(payload){
            this.$store.dispatch('setusername',payload);
        },
        logOut(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace("login");
                this.setusername("");
                this.setissignedin(false);
            })
        },
        deleteItem(item){
            if(confirm('確定要刪除嗎？')){
                const ndx = this.$store.getters.getPersonCart.indexOf(item);
                if(ndx != -1){
                    this.deleteItemInPersonCart(ndx);
                }
            }
        },
        deleteItemInPersonCart(ndx){
            this.$store.dispatch('deleteItemInPersonCart',ndx);
        }
    },
    template:`
    <div>
        <div class="row" style="background-image: url(https://i.ibb.co/X75XLvc/back-302.gif);">
            <div class="col-lg-auto order-xl-1 mt-5 loginSignWidth"  style="max-width: 822px;font-family:applefontregular;" >
                <div v-if="this.$store.getters.getIssignedin" >
                    <span style="color:#777;font-size:14px;">使用者 {{this.$store.getters.getUseremail}} 的購物車 
                        [<span id="logoutButton" @click="logOut" style="color:#06c;">登出<i class="fas fa-external-link-alt"></i></span>]
                    </span>
                </div>
                
                <div class="card cartInnerWidth" style="margin-right:auto;margin-left:auto;">
                    <table class="table" style="border:2px solid white">
                        <thead>
                            <tr style="background:#ffe8e8;">
                                <th class="col1" scope="col">項次</th>
                                <th class="col2" scope="col">商品名稱</th>
                                <th class="col3" scope="col">數量</th>
                                <th class="col4" scope="col">單價</th>
                                <th class="col5" scope="col">小計</th>
                                <th class="col6" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,key) in this.$store.getters.getPersonCart">
                                <th scope="row">{{ key+1}}</th>
                                <td>{{ item.name }}</td>
                                <td>{{item.quantity}}</td>
                                <td>{{ item.price }}</td>
                                <td id="total">{{ item.quantity*item.price}}</td>
                                <td>
                                    <span class="cancelbutton" v-on:click="deleteItem(item)">取消</span>                      
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <div style="font-size:13px;position:relative;width:100%;text-align:right;float:right;" >
                        <span>總金額</span>
                        <span style="color:#ff007c;font-family: 'Oxygen', sans-serif;font-weight: 700;">NT<i class="fas fa-dollar-sign"></i></span>
                        <span style="color:#ff007c;font-size: 26px;font-family: 'Cairo', sans-serif;">{{ totalAmount }}</span>
                    </div>
                    <div class="container-fluid" id="checkoutButton"><span><i class="fas fa-shopping-cart"></i> 結帳</span></div>
                </div>
                
            </div>
            <div class="col-auto order-xl-0">
                <sideleft></sideleft>
            </div>
            <div class="col-auto order-xl-2">
                <sideright></sideright>
                <sideright2 style="width:250px;"></sideright2>
            </div>

        </div>
    </div>

    `

}