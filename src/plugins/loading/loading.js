import Loading from "./loading.vue"
import { createApp } from 'vue'
const LoadingPlugin = {};

LoadingPlugin.install = function (Vue) {
    const VueLoading = Vue.extend(Loading);
    let instance = null;

    function $loading() {
        if (!instance) {
            instance = new VueLoading();
            instance.$mount();
            document.querySelector("#app").appendChild(instance.$el);
        }

        instance.show();
    }

    function $unload() {
        if (instance) {
            instance.hide();
        }
    }
    const app = createApp({})

    app.config.globalProperties.$loading = $loading;
    app.config.globalProperties.$unload = $unload;
}

// export default {
    
//     install:(app)=>{
//         const VueLoading = app.extend(Loading);
//         app.config.globalProperties.$loading=(instance)=>{
//             // const VueLoading = app.extend(Loading);
//             instance = null;
//             // let instance=instance;
//             if (!instance) {
//                 instance.$mount();
//                 instance = new VueLoading();
//                 document.querySelector("#app").appendChild(instance.$el);
//             }
//             instance.show();
//         }
//         app.config.globalProperties.$unload=(instance)=>{
//            if (instance) {
//                 instance.hide();
//             }
//         }
   
//     }
// }