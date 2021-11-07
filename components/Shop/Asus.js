import mainpart from '../Mainpart.js'
import sideleft from '../SideLeft.js'
import sideright from '../SideRight.js'

export default {
    name:'asus',
    components:{
        mainpart,
        sideleft,
        sideright
    },
    template:`
    <div>
        <div class="row">
            <div class="col-lg-auto order-xl-1">
                <mainpart named="Asus" 
                          img1="../components/images/Asus/asusCover.png"
                          img2="../components/images/Asus/asusCover2.png"
                          img3="../components/images/Asus/asusCover3.png">
                </mainpart>
            </div>
            <div class="col-auto order-xl-0">
                <sideleft></sideleft>
            </div>
            <div class="col-auto order-xl-2">
                <sideright></sideright>
            </div>
        </div>
    </div>
    `
}