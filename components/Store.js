import db from './Firebase.js'

const store = new Vuex.Store({
    state: {
        Shop_category: [
            {
                name: 'ASUS 華碩',
                images: './components/images/shopIconSmall/asus.png',
                topath: '/asus'
            },
            {
                name: 'Acer 宏碁',
                images: './components/images/shopIconSmall/acer.jpeg',
                topath: '/acer'
            },
            {
                name: 'Apple 蘋果',
                images: './components/images/shopIconSmall/apple.png',
                topath: '/apple'
            },
            {
                name: 'Lenovo 聯想',
                images: './components/images/shopIconSmall/lenovo.jpeg',
                topath: '/lenovo'
            },
            {
                name: 'Razer 雷蛇',
                images: './components/images/shopIconSmall/razer.gif',
                topath: '/razer'
            },
            {
                name: 'MSI 微星',
                images: './components/images/shopIconSmall/msi.png',
                topath: '/msi'
            },
            {
                name: 'Microsoft 微軟',
                images: './components/images/shopIconSmall/microsoft.jpeg',
                topath: '/microsoft'
            }
        ],
        Items_in_cart: 0,
        promoPics: [
            './components/images/promotion/promo1.jpg',
            './components/images/promotion/promo2.jpg',
            './components/images/promotion/promo3.jpg',
            './components/images/promotion/promo4.jpg',
            './components/images/promotion/promo5.jpg',
            './components/images/promotion/promo6.jpg',
            './components/images/promotion/promo7.jpg'
        ],
        notice: {
            title: '振興五倍券注意事項及說明',
            content: [
                'Scrafix 線上購物全站商品適用「數位綁定五倍券」消費(排除商品除外)。',
                '儲值 / 禮券 / 點數 / 月租服務 / 電子票券 / 餘額型提貨券..等商品排除五倍券適用範圍。',
                '若購買的商品屬於五倍券排除適用範圍類型商品，僅能使用非五倍券付款區之「信用卡一次付清」及「Pi錢包」進行付款。',
                'AFTEE 先享後付及分期趣等行動支付不適用數位綁定五倍券付款。',
                'Scrafix 線上購物未開放接受紙本五倍券，故超商取貨付款及貨到付款不適用五倍券消費。',
                '消費認列及排除項目以行政院振興五倍券最新公告為準，如有疑慮可洽 1988專線 或綁定銀行確認。'
            ]
        },
        marqueeMsg: '[Scrafix 系統維護公告] 每週三上午10~12點 進行定期維護作業 [儲備人才招募] 職場新鮮人時薪200元起 ★挑戰半年最高月薪50k 相關資訊請上1111人力銀行 或電洽陳小姐(02)7252-2438',
        notice2: {
            title: '注意事項',
            content: [
                '作品中許多圖片取自 pchome 及其他出處，並無意圖營利，純粹是學術使用，屬合法合理使用範圍，並無侵權問題。',
                '雖然程式碼公開下載修改，但仍有著作權保護，若轉載使用請標明出處與作者名稱。',
                'MIT授權條款: https://oss.ninja/mit/0x66you'
            ]
        },
        personCart: [],        
        asusData:[],
        acerData:[],
        appleData:[],
        razerData:[],
        lenovoData:[],
        microsoftData:[],
        msiData:[],
        currentname:'',
        currentnamemodel:'',
        currentprice:'',
        currentimagepath:'',

        issignedin:false,
        useremail:''

    },
    getters: {
        getPromoPics(state) {
            return state.promoPics
        },
        getNotice(state) {
            return state.notice
        },
        getMarqueeMsg(state) {
            return state.marqueeMsg
        },
        getNotice2(state) {
            return state.notice2
        },
        getPersonCart(state) {
            return state.personCart
        },
        getCurrentBrand(state){
            return state.currentBrand
        },
        getIssignedin(state){
            return state.issignedin
        },
        getUseremail(state){
            return state.useremail
        },
        getPersonCartLength(state){
            return state.personCart.length
        }
    },
    actions: {
        addToCart: (context,{brand,key,quantity}) => {
            context.commit("AddToCart",{brand,key,quantity});
        },
        getAsusData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Asus')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_ASUS_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },
        getAcerData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Acer')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_ACER_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },
        getAppleData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Apple')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_APPLE_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },
        getLenovoData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Lenovo')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_LENOVO_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },getRazerData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Razer')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_RAZER_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },getMicrosoftData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Microsoft')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_MICROSOFT_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },getMsiData({ commit }) {
            return new Promise((resolve, reject) => {
              db.collection('Msi')
                .get()
                .then(querySnapshot => {
                  const documents = querySnapshot.docs.map(doc => doc.data())
                  commit('SET_MSI_DATA', documents)
                  resolve()
                })
                .catch(({ response }) => reject(response.status))
            })
        },
        setissignedin(context,payload){
            context.commit('Setissignedin',payload)
        },
        setusername(context,payload){
            context.commit('Setusername',payload)
        },
        deleteItemInPersonCart(context,payload){
            context.commit('DeleteItemInPersonCart',payload)
        }
    },
    mutations: {
        AddToCart: (state,{brand,key,quantity}) => {
            switch(brand){
                case "Asus":
                    state.currentname = state.asusData[key].name;
                    state.currentnamemodel = state.asusData[key].nameModel;
                    state.currentprice = state.asusData[key].price;
                    state.currentimagepath = state.asusData[key].imagepath;
                    break;
                case "Acer":
                    state.currentname = state.acerData[key].name;
                    state.currentnamemodel = state.acerData[key].nameModel;
                    state.currentprice = state.acerData[key].price;
                    state.currentimagepath = state.acerData[key].imagepath;
                    break;
                case "Apple":
                    state.currentname = state.appleData[key].name;
                    state.currentnamemodel = state.appleData[key].nameModel;
                    state.currentprice = state.appleData[key].price;
                    state.currentimagepath = state.appleData[key].imagepath;
                    break;
                case "Lenovo":
                    state.currentname = state.lenovoData[key].name;
                    state.currentnamemodel = state.lenovoData[key].nameModel;
                    state.currentprice = state.lenovoData[key].price;
                    state.currentimagepath = state.lenovoData[key].imagepath;
                    break;
                case "Razer":
                    state.currentname = state.razerData[key].name;
                    state.currentnamemodel = state.razerData[key].nameModel;
                    state.currentprice = state.razerData[key].price;
                    state.currentimagepath = state.razerData[key].imagepath;
                    break;
                case "Microsoft":
                    state.currentname = state.microsoftData[key].name;
                    state.currentnamemodel = state.microsoftData[key].nameModel;
                    state.currentprice = state.microsoftData[key].price;
                    state.currentimagepath = state.microsoftData[key].imagepath;
                    break;
                case "Msi":
                    state.currentname = state.msiData[key].name;
                    state.currentnamemodel = state.msiData[key].nameModel;
                    state.currentprice = state.msiData[key].price;
                    state.currentimagepath = state.msiData[key].imagepath;
                    break;        
            }
            let aItem = {"brand":brand,"name":state.currentname+state.currentnamemodel,"key":key,"quantity": quantity,"price":state.currentprice };
            console.log(aItem);
            find: {
                if(state.personCart.length != 0){
                   for (let item of state.personCart) {
                        if (item.brand === brand && item.key === key) {
                            item.quantity += quantity;
                            if(item.quantity>10){
                                item.quantity=10;
                            }
                            break find;
                        }
                    }
                    state.personCart.push(aItem); 
                }else{
                    state.personCart.push(aItem); 
                }
                
            }
            
        },
        SET_ASUS_DATA(state, asusData) {
            state.asusData = asusData
        },
        SET_ACER_DATA(state, acerData) {
            state.acerData = acerData
        },
        SET_APPLE_DATA(state, appleData) {
            state.appleData = appleData
        },
        SET_LENOVO_DATA(state, lenovoData) {
            state.lenovoData = lenovoData
        },
        SET_RAZER_DATA(state, razerData) {
            state.razerData = razerData
        },
        SET_MICROSOFT_DATA(state, microsoftData) {
            state.microsoftData = microsoftData
        },
        SET_MSI_DATA(state, msiData) {
            state.msiData = msiData
        },
        Setissignedin(state,payload){
            state.issignedin = payload;
        },
        Setusername(state,payload){
            state.useremail = payload;
        },
        DeleteItemInPersonCart(state,payload){
            state.personCart.splice(payload,1);
        }

    }
})

store.dispatch("getAsusData");
store.dispatch("getAcerData");
store.dispatch("getAppleData");
store.dispatch("getLenovoData");
store.dispatch("getRazerData");
store.dispatch("getMicrosoftData");
store.dispatch("getMsiData");
export default store