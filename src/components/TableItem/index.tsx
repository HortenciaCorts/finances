import { useState } from 'react';
import * as C from './styled'; 
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { items, StorageItem } from '../../data/items';


type Props = {
    item: Item,
    onDelete: (id: number) => void
}

export const TableItem = ({ item, onDelete }: Props) => {
//   const [list, setList] = useState(items);
    
//   const handleDeleteItem = (id: number) => {
//     const newList = [...list];
//     // StorageItem.set(newList)
    
//     list.forEach(function(item, i){
//         if(item.id !== id){
//             console.log(newList.splice(id, 1))
//             // newList.splice(id, 1)
//             newList.push(item)
//             // console.log(newList)
//         }
//     })
//     console.log(newList)
//     newList.forEach(function(item){
//         onAdd(item)
//     })
//   }
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? '#e2143a' : 'green'}>
                R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <a onClick={e => onDelete(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus-circle red"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </a>
            </C.TableColumn>
        </C.TableLine>
    );
}