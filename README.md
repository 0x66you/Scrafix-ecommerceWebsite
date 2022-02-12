# 電商平台 - Scrafix 購物 
<p align="center"><img src="https://i.ibb.co/wpjp0LR/LIST-UM.png" width="860" alt="workerize"></p>
<h3>作品說明</h3>
Scrafix 是我在2021年11月中完成的購物網站。<br>
我的目標是利用vue框架寫出一個<strong>分工明確</strong>的網頁，<br>
每個vue元件要可以被<strong>重複利用</strong>，<br>
或是有某個<strong>特定功能</strong>因此必須獨立出來一個.js檔。<br>
設計上，商品展示列參考pchome設計。
<br>
<pre>
root/
├─ components/
│  ├─ App.js
│  ├─ Home.js
│  ├─ Firebase.js
│  ├─ Router.js
│  ├─ Mainpart.js
│  ├─ Login.js
│  ├─ SideRight.js
│  ├─ Store.js
│  ├─ ShoppingCart.js
│  ├─ Signup.js
│  ├─ Shop/
│  │  ├─ Acer.js
│  │  ├─ Apple.js
│  │  ├─ Asus.js
│  │  ├─ Lenovo.js
│  │  ├─ Microsoft.js
│  │  ├─ Msi.js
│  │  ├─ Razer.js
│  ├─ SideRight2.js
│  ├─ SideLeft.js
├─ main.js
├─ style.css
├─ favicon_io/
├─ index.html
</pre>
  <h2>功能與特色</h2>
<ul>
  <li>首頁圖示隨滾輪捲動開合，字體淡入與淡出</li>
  <li>RWD設計，隨裝置不同版面配置跟著改變</li>
  <li>結合前端與後端技術(vue+firebase)</li>
  <li>使用者登入登出</li>
  <li>商品加入購物車</li>
  <li>vuex集中管理元件data</li>
  <li>vue-router切換頁面(SPA)</li>
</ul>

