import mainpart from '../Mainpart.js'
import sideleft from '../SideLeft.js'
import sideright from '../SideRight.js'
import sideright2 from '../SideRight2.js'
export default {
    name:'asus',
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
                <mainpart named="Asus" 
                          img1="./components/images/Asus/asusCover.png"
                          img2="./components/images/Asus/asusCover2.png"
                          img3="./components/images/Asus/asusCover3.png">
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