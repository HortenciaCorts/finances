import { Item } from '../types/Item';

type Props = {
    newList: Item
}

export const StorageItem = {
    get(){
        return JSON.parse(localStorage.getItem('tstodoitems:') as any)
    },
    set(newList:Props){
        return localStorage.setItem('tstodoitems:', JSON.stringify(newList));
    }
}

// export const items: Item[] = [
//     {date: new Date(2021, 12, 6), category: 'expensive', title: 'McDonals', value: -32.15},
//     {date: new Date(2021, 11, 15), category: 'expensive', title: 'Burger King', value: -28},
//     {date: new Date(2021, 11, 16), category: 'expensive', title: 'Aluguel', value: -2300},
//     {date: new Date(2021, 11, 18), category: 'income', title: 'Salário', value: 4500},
// ]

export const items: Item[] = StorageItem.get()
