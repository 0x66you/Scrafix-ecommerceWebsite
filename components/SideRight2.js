export default {
    name: 'sideright2',
    template: `
        <div>
            <div class="mt-3 pt-2 text-center" style="background:#ffffe0;border:1px solid #d3d3d3;"><p
                    class="text-start"
                    style="font-size:14px;background:rgba(253, 227, 167, 0.5); 
                            margin:2px 13px;color:rgba(242, 120, 75, 1);
                            padding-left:5px;">
                {{ this.$store.getters.getNotice2.title }} </p>
                <ul style="margin-right:20px;margin-top:10px;">
                    <li v-for="notice in this.$store.getters.getNotice2.content"
                        style="font-size:13px;margin-bottom: 5px; list-style-image: url('../components/images/online-shopping.png')"
                        class="text-start"> {{notice}}
                    </li>
                </ul>
            </div>
        </div>      `
}