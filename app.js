const app = new Vue({
    el : '#app',
    data : {
        products : []
    },

    computed: {
        totalProducts () {
            return this.products.reduce((sum, product) => {
            return sum + product.quantity   
            }, 0)
        },

        totalProduct () {
            return this.product.reduce((sum, product) => {
            return sum + product[0].quantity + product[1].quantity + product[2].quantity, product[3].quantity, product[4].quantity, product[5].quantity, product[6].quantity, product[7].quantity, product[8].quantity
            }, 0)
        }
    },

created() {
    fetch('https://api.myjson.com/bins/1acrav')
    .then(response => response.json())
    .then(json => {
        this.products = json.products
    })    
    }
})