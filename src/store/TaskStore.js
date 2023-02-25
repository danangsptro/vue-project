import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: '',
        dropShiperName: '',
        phonenumber: '',
        dropShiperPhoneNumber: '',
        deliveryAddress: '',
        costOfGoods: 500000,
        dropShiping: 0,
        goSend: 0,
        count: 0
    })
})
