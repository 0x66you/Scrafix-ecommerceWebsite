import sideleft from './SideLeft.js'
import sideright from './SideRight.js'
import sideright2 from './SideRight2.js'

export default {
    name:'login',
    data(){
        return {
            email:'',
            password:''
        }
    },
    components:{
        sideleft,
        sideright,
        sideright2
    },
    mounted(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setissignedin(true);
                this.setusername(user.email);
            }
        })
    },
    methods: {
        setissignedin(payload){
            this.$store.dispatch('setissignedin',payload);
        },
        setusername(payload){
            this.$store.dispatch('setusername',payload);
        },
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                user => {
                    this.$router.replace("shoppingcart");
                },
                err => {
                    // alert(`${err.code}\n${err.message}`);
                    if(err.code==="auth/invalid-email"){
                        $("#errorMsgLogin").html("<span><i class='fas fa-exclamation-triangle'></i> 請檢查信箱格式是否正確</span>");
                        this.email="";
                        this.password="";
                    }else if(err.code==="auth/wrong-password"){
                        $('#errorMsgLogin').html("<span><i class='fas fa-exclamation-triangle'></i> 密碼錯誤(或未輸入)</span>");
                        this.password="";
                    }else{
                        $('#errorMsgLogin').html(`<span><i class='fas fa-exclamation-triangle'></i> ${err.message}</span>`);
                        this.email="";
                        this.password="";
                    }
                    setTimeout(function(){
                        $("#errorMsgLogin").text("");
                    },5000);
                }
            )
        }
    },
    template:`
    <div>
        <div class="row" style="background-image: url(https://i.ibb.co/X75XLvc/back-302.gif);">
            <div class="col-lg-auto order-xl-1 mt-5 loginSignWidth"  style="max-width: 822px;font-family:applefontregular;" >
                <div class="card loginSignInnerWidth" style="margin-right:auto;margin-left:auto;">
                    <div class="header text-center mt-3" style="font-family:applefont;width:100%;font-size:1.3rem;">
                        <span style="color:#06c;padding:5px 40px;">會員登入</span>
                        <span><i class="fas fa-grip-lines-vertical" style="color:#aaa;"></i></span>
                        <span style="padding:5px 40px;"><router-link to="/signup" style="color:#aaa;text-decoration:none;">立即註冊</router-link></span>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="login">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                <i class="fas fa-envelope"></i>
                                </span>
                                <input type="email"
                                    v-model="email"
                                    class="form-control text-start"
                                    placeholder="請輸入電子郵件信箱"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping">
                            </div>
                            <div class="input-group flex-nowrap mt-3">
                                <span class="input-group-text" id="addon-wrapping2">
                                    <i class="fas fa-key"></i>
                                </span>
                                <input type="password"
                                    v-model="password"
                                    class="form-control text-start"
                                    placeholder="請輸入密碼（英文大小寫有差別）"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping">
                            </div>
                            <div class="mt-1" id="errorMsgLogin" style="color:red;font-size:0.8rem;"></div>
                            <button type="submit" class="mt-3 btn btn-primary text-center" style="width:100%;background:#1b92ee;">登入</button>
                            <div style="font-size:0.8rem;margin-top:15px;">您還沒有帳號嗎？您可以點選 <router-link to="/signup">立即註冊<i class="fas fa-external-link-alt"></i></router-link></div>
                            <div style="font-size:0.8rem;color:#aaa;">Scrafix 不會以任何理由要求您轉帳匯款，嚴防詐騙</div>
                        </form>
                    </div>
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