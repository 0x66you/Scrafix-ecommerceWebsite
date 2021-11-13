export default {
    name:'sideleft',
    template:`
        <div>
            <div class="mt-3 pt-2 text-center" style="border:1px solid #d3d3d3; width:200px;">
                <p  class="text-start" 
                    style="background:rgba(253, 227, 167); margin:2px 13px;padding-left:5px;color:rgba(242, 120, 75, 1);">
                        優惠訊息
                </p>
                <p v-for="pic in this.$store.getters.getPromoPics" style="margin:10px auto;">
                    <a href="javascript:void(0)"><img :src="pic" style="border:1px solid #d3d3d3"></a>
                </p>
            </div>
        </div>
    `
}