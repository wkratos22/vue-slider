var app = new Vue(
    {
        el: `#root`,
        data: {
            immagini: [
                `https://source.unsplash.com/random/?cars`,
                `https://source.unsplash.com/random/?shoes`,
                `https://source.unsplash.com/random/?mountains`,
            ],

            i : 0,
        },
        methods: {
            next(){
                i=i+1;
            },
            prev(){
                i--;
            },

        }
    }
)