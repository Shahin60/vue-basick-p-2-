const app = Vue.createApp({
data() {
    return {
        title:"shahin",
        bgColor:"red"
    }
},
methods: {
    tim(){
        const lin = new Date();
        return new Date();
    },
colorTest(colorClass){
this.bgColor = colorClass;
}
},
}).mount(".newp");