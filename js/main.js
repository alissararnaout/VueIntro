import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

// *IMPORTANT* set up a viewmodel and use the Vue framework 
const my_vm = (() => {
    //variables or define components, etc.

    let vue_VM = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [ // array of objects
                {name: "Joe", role: "Prof"},
                {name: "John", role: "Prof"},
                {name: "Jarrod", role: "Prof"}
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element');
            }
        }
    }).$mount("#app"); // telling it to find element in index (so in this case div #app)
})();
