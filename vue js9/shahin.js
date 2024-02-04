const app = Vue.createApp({
    data() {
        return {
            skills: [{ name: "html", experince: 2 },
            { name: "css", experince: 1 },
            { name: "java", experince: 0.5 }],
            addNewe: {name:"",experince:0},
        }
    },
    methods: {
        addScill() {
            this.skills.push(this.addNewe);
            this.addNewe = {};
        },
        remobe(i) {
            this.skills.splice(i, 1);
        }
    },
}).mount(".app")