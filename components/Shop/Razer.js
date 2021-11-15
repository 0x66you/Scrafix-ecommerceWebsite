import mainpart from '../Mainpart.js'
import sideleft from '../SideLeft.js'
import sideright from '../SideRight.js'
import sideright2 from '../SideRight2.js'
export default {
    name:'razer',
    components:{
        mainpart,
        sideleft,
        sideright,
        sideright2
    },
    template:`
    <div>
        <div class="row">
            <div class="col-lg-auto order-xl-1">
                <mainpart named="Razer"
                          img1="https://i.ibb.co/4j9SPRb/razer-Cover.png"
                          img2="https://i.ibb.co/R2Pvb1y/razer-Cover2.png"
                          img3="https://i.ibb.co/m5xtB0t/razer-Cover3.png">
                </mainpart>
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