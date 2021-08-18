export default {
    sethtnameAsync: (context, payload) => {
        console.log('啦啦啦');
        setTimeout(() => {
            console.log('哈哈哈');
            context.commit('sethtname', payload);
        }, 3000);
        console.log('略略略');
    },
    doAjax:(context, payload) => {
        //vuex是不能被vue实例的
        let _this =payload._this;
        let url = this.axios.urls.SYSTEM_USER_DOLOGIN;
        console.log(url);
        _this.axios.post(url,{}).then((response) => {
            console.log('doAjax............');
            console.log(response);
        }).catch((response)=>{
            console.log(response);
        });
    },
}