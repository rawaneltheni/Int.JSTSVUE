<template>
    <div class="backdrop" @click="closeModal()">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <!-- using a prop -->
            <h1>{{ header }}</h1>
            <!-- hard coded without a prop -->
            <p>modal content</p>
        </div>
    </div>
</template>

<!-- we can use <style scope> means the style will only be applied to this component -->
<!-- better practice is to create a seprate globale style sheet -->
<script>
    export default {
        props:  ['header', 'sale'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style> 
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: whitesmoke;
        border-radius: 10px;
    }
    .backdrop {
        top: 0px;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: aqua;
        border: none;
        padding: 0
    }
    .modal p {
        font-style: normal;
    }
    .modal.sale{
        background: crimson;
        color: white
    }
    .model.sale h1 {
        color: white;
    }
</style>