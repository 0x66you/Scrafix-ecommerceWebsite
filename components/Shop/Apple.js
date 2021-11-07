import mainpart from '../Mainpart.js'
import sideleft from '../SideLeft.js'
import sideright from '../SideRight.js'

export default {
    name:'apple',
    components:{
        mainpart,
        sideleft,
        sideright
    },
    template:`
    <div>
        <div class="row">
            <div class="col-lg-auto order-xl-1">
                <mainpart named="Apple"></mainpart>
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