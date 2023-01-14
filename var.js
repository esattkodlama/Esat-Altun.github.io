const app = Vue.createApp({ 
  
    data() {
        return {
            showbooks: true,
            title: 'The Best Title',
            author: 'Esat-ALTUN',
            shbk: false,
            
            // (int) değerler parentez içine alınmıyo
            age: 15
        }
    },
    methods: {
        changetitle1() {
            console.log("clicked-1")
            this.title = "Ahmet Esat'ın Projeleri:"
        },
        changetitle2() {
            console.log("clicked-2")
            this.title = "Vue.Js & Esat"
        },
        hide() {
            this.showbooks = false 
            this.shbk = true
        },
        show(){
             this.showbooks = true 
             this.shbk = false
        },
        tektus(){
                
        },
        ackapa() {
            this.showbooks = !this.showbooks
        },
    }

})
app.mount('#app')