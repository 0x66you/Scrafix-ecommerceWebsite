const store = new Vuex.Store({
    state:{
        isSignedIn:false,
        Shop_category:[
            {
                name:'ASUS 華碩',
                images:'components/images/shopIconSmall/asus.png',
                topath:'/asus'
            },
            {
                name:'Acer 宏碁',
                images:'components/images/shopIconSmall/acer.jpeg',
                topath:'/acer'
            },
            {
                name:'Apple 蘋果',
                images:'./components/images/shopIconSmall/apple.png',
                topath:'/apple'
            },
            {
                name:'Lenovo 聯想',
                images:'./components/images/shopIconSmall/lenovo.jpeg',
                topath:'/lenovo'
            },
            {
                name:'Razer 雷蛇',
                images:'./components/images/shopIconSmall/razer.gif',
                topath:'/razer'
            },
            {
                name:'MSI 微星',
                images:'./components/images/shopIconSmall/msi.png',
                topath:'/msi'
            },
            {
                name:'Microsoft 微軟',
                images:'./components/images/shopIconSmall/microsoft.jpeg',
                topath:'/microsoft'
            }
        ],
        Items_in_cart:0,
        promoPics:[
            '../components/images/promotion/promo1.jpg',
            '../components/images/promotion/promo2.jpg',
            '../components/images/promotion/promo3.jpg',
            '../components/images/promotion/promo4.jpg',
            '../components/images/promotion/promo5.jpg',
            '../components/images/promotion/promo6.jpg',
            '../components/images/promotion/promo7.jpg'
        ],
        notice:{
            title:'振興五倍券注意事項及說明',
            content:[
                'Scrafix 線上購物全站商品適用「數位綁定五倍券」消費(排除商品除外)。',
                '儲值 / 禮券 / 點數 / 月租服務 / 電子票券 / 餘額型提貨券..等商品排除五倍券適用範圍。',
                '若購買的商品屬於五倍券排除適用範圍類型商品，僅能使用非五倍券付款區之「信用卡一次付清」及「Pi錢包」進行付款。',
                'AFTEE 先享後付及分期趣等行動支付不適用數位綁定五倍券付款。',
                'Scrafix 線上購物未開放接受紙本五倍券，故超商取貨付款及貨到付款不適用五倍券消費。',
                '消費認列及排除項目以行政院振興五倍券最新公告為準，如有疑慮可洽 1988專線 或綁定銀行確認。'
            ]
        },
        marqueeMsg:'[Scrafix 系統維護公告] 每週三上午10~12點 進行定期維護作業 [儲備人才招募] 職場新鮮人時薪200元起 ★挑戰半年最高月薪50k 相關資訊請上1111人力銀行 或電洽陳小姐(02)7252-2438'
    },
    getters:{
        getPromoPics(state){
            return state.promoPics
        },
        getNotice(state){
            return state.notice
        },
        getMarqueeMsg(state){
            return state.marqueeMsg
        }
    }

})

export default store