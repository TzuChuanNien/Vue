import Loading from "./loading.vue"

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
    

    Vue.prototype.$loading = $loading;
    Vue.prototype.$unload = $unload;
}

export default LoadingPlugin;