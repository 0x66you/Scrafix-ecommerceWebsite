import db from "./Firebase.js";

export default {
    name: 'mainpart',
    props: ['named','img1','img2','img3'],
    data(){
        return {
            purchaseItemName:'',
            selectedQuantity:1
        }
    },

    methods:{
        addToCart(){

        }
    },
    template: `
        <div style="max-width: 798px;" >

            <span class="mt-3 photoframe">
                <img v-bind:src='img1' class="smallproperty">
            </span>
            <span class="mt-3 photoframe spaceBetImg">
                <img v-bind:src="img2" class="smallproperty">
            </span>
            <span class="mt-3 photoframe spaceBetImg">
                <img v-bind:src="img3" class="smallproperty">
            </span>
            
            <table id="mainpartTable" class="table" style="background:#ffffed;border-top:#d3d3d3;">
                <tbody>
                    <tr v-for="item in store" style="border-bottom: 1px solid #d3d3d3;">
                        <td style="width:160px;vertical-align: middle;text-align: center">    <!-- 照片 -->
                            <img class="photoframe" id="itemImageSize" v-bind:src='item.imagepath' style="margin:auto;">
                        </td> 
                        <td style="width:420px;">    <!-- 名稱，介紹 -->
                            <div style="margin-left:auto;margin-right:auto;">
                                <div style="color:purple; 
                                     font-family: 'Noto Serif TC', serif;font-weight: 600;
                                     font-size:14px;">
                                    {{ item.salespitch }}
                                </div>
                                <div>
                                    <a id="itemNameSize" class="noUnderline" href="javascript:void(0)" 
                                        style="color:#03c;font-family: 'Noto Sans TC', sans-serif;font-weight: 700;">
                                        <div>{{ item.name }}</div>
                                        <div>{{ item.nameModel }}</div>
                                    </a>
                                    <div id="descFontSize" style="margin-top:10px;">
                                        <div style="margin-top:5px;">{{ item.feature1 }}</div>
                                        <div style="margin-top:5px;">{{ item.feature2 }}</div>
                                        <div style="margin-top:5px;">{{ item.feature3 }}</div>
                                        <div style="margin-top:5px;">{{ item.feature4 }}</div>
                                        <div style="margin-top:5px;">{{ item.feature5 }}</div>
                                    </div>
                                </div>   
                                <div class="float-end">
                                    <div style="font-size:13px;" class="float-end">
                                        <span>網路價</span>
                                        <span style="color:#ff007c;font-family: 'Oxygen', sans-serif;font-weight: 700;"><i class="fas fa-dollar-sign"></i></span>
                                        <span style="color:#ff007c;font-size: 26px;font-family: 'Cairo', sans-serif;">{{ item.price }}</span>
                                        
                                    </div>
                                    <form v-on:submit.prevent="addToCart()">
                                        <select v-model="selectedQuantity">                                            
                                              <option v-for="num in item.stock" v-bind:value="num">{{ num }}</option>
                                        </select>
                                        <!-- 結帳按鈕 -->
                                        <span style="position:relative;">
                                                <button class="checkOutButton" type="submit">    
                                                <span>加入您的</span>                                                      
                                                    <span style="color:#FFEC19"><i>購物車</i></span>                                  
                                                </button>
                                                <img src="./components/images/pointer.png" 
                                                     style="width:10px;height:15px;position:absolute;left:95px;top:14px;">
                                        </span>
                                    </form>

                                </div>     
                            </div>                                    
                        </td> 
                    </tr>
                    
                </tbody>
                
            </table>
        </div>
    `,
    firestore() {
        return {
            store: db.collection(this.named).orderBy('created')
        }
    }
}
