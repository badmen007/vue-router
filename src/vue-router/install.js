export let Vue

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({ // mergeOptions 所有组件初始化都会调用这个方法
        beforeCreate(){
            
            if(this.$options.router) {
                this._routerRoot = this;  // 根实例
                this._router = this.$options.router;
            } else{
                //在所有的组件上增加了一个_routerRoot指向根实例
                this._routerRoot = this.$parent && this.$parent._routerRoot;
            }
        }
    })

    //就是每一个组件中都能拿到 根实例 劫持 
    Object.defineProperty(Vue.prototype, '$router',{
        get() {
            return this._routerRoot && this._routerRoot._router;
        }
    })

    Vue.component('router-view', {
        render() {
            return <div>xx</div>
        }
    })

    Vue.component('router-link', {
        render() {
            return <a>{this.$slots.default}</a>
        }
    })
}

export default install;