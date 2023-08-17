<script setup>
import {ref} from 'vue'

const itemId = ref(0)
const shoppingitem = ref('')
const shoppinglist = ref([])
const shopped = ref(false)

function addItem(){
    shoppinglist.value.push({
        id: itemId.value++,
        item:shoppingitem.value,    
        status: shopped.value
    })
    shoppingitem.value = ""
}

function removeItem(i){
    shoppinglist.value = shoppinglist.value.filter((t) => t !== i)
}

//composition API with SFC .vue
</script>

<template>

<div>
    <h1>my shopping list</h1>

    <input type="text" v-model="shoppingitem">
    <button @click="addItem">Add Item</button>
    <ol>
        <li v-for="i in shoppinglist">
        <input type="checkbox" v-model="i.status">
        <span :class="{done: i.shopped}">{{ i.item }}</span>
        <button @click="removeItem(i)">X</button>
        </li>
    </ol>
    <button>Add Item</button>
</div>

</template>

<style scoped>
    .done{
        text-decoration: line-through   ;
    }

    div{
        width:100;
        height:400px;
        background-color:bisque;
    }
</style>