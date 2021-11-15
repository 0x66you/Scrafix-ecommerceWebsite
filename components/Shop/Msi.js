import mainpart from '../Mainpart.js'
import sideleft from '../SideLeft.js'
import sideright from '../SideRight.js'
import sideright2 from '../SideRight2.js'
export default {
    name:'msi',
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
                <mainpart named="Msi"
                          img1="https://i.ibb.co/ThrWCsm/msiCover.png"
                          img2="https://i.ibb.co/CvHQ1f7/msi-Cover2.png"
                          img3="https://i.ibb.co/8jd8nv0/msi-Cover3.png">
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