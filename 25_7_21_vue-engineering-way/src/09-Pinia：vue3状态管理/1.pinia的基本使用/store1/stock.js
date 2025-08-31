import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useStockStore = defineStore('stock', () => {
    const stock = ref(0)

    const dbl_stock = computed(() => {
        return stock.value * 2
    })

    const addStock = () => {
        stock.value++
    }

    const subStock = () => {
        stock.value--
    }

    return {
        stock,
        dbl_stock,
        addStock,
        subStock
    }
})