<template>
<div>
    <p>{{ count }}</p>
    <button @click="count++">+1</button>
</div>
</template>

<script>
    export default {
        data() {
            return { count:0 }
        },
        methods: {
            fn() { 
                console.log('执行methods中的fn()') 
            }
        },

        setup() {
            console.log('setup');
        },

        beforeCreate() {
            console.log('beforeCreate');
            console.log(this.count);
            console.log(this.fn);
            
        },
        created() {
            console.log('created');
            console.log(this.count);
            console.log(this.fn);
            this.fn();

            this.timerId = setInterval(() => {
                console.log(this.count);
            }, 1000)
        },

        beforeMount() {
            console.log('beforeMount');
            console.log(document.querySelector('p'));
        },
        mounted() {
            console.log('mounted');
            console.log(document.querySelector('p'));
            document.querySelector('p').style.color = 'red'
            console.log(document.querySelector('p').innerHTML);
        },

        beforeUpdate() {
            console.log('beforeUpdate');
            console.log(this.count);
            console.log(document.querySelector('p').innerText);
        },
        updated() {
            console.log('updated');
            console.log(this.count);
            console.log(document.querySelector('p').innerText);
        },

        beforeUnmount() {
            console.log('beforeUnmount');
            clearInterval(this.timerId);
        },
        unmounted() {
            console.log('unmounted');

        }
    }
</script>

<style scoped>

</style>