import { useState } from 'react';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import * as C from './styled';
import { items, StorageItem } from '../../data/items';

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [selectCategory, setselectCategory] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [newId, setNewId] = useState(items.length);
    const categoryKey = Object.keys(categories);

    const handleAddEvent = () => {
        if((inputTitle === '') || inputValue === '' || selectCategory === '' || inputDate === ''){
            alert('Preencha todos os campos para finalizar')
        }else{
            console.log(items.length)
            const operator = selectCategory === 'income' ? '+' : '-';
            const newValue = inputValue.substring(0, 1) === '-' || inputValue.substring(0, 1) === '+' ? `${operator}${inputValue.substring(1)}` : `${operator}${inputValue}`;
            const newItem: Item = {
                id: newId,
                date: new Date(inputDate.split('-').join('/')),
                category: selectCategory,
                title: inputTitle,
                value: Number(newValue)
            };
            onAdd(newItem);
            // StorageItem.set([newItem])
            setNewId(newId+1)
            setInputDate('');
            setselectCategory('');
            setInputTitle('');
            setInputValue('');
        }
    }
    return(
        <C.Container>
            <C.Label>
                <C.InputTitle>Data:</C.InputTitle>
            <C.Input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)} />
            </C.Label>
            <C.Label>
                <C.InputTitle>Categoria:</C.InputTitle>
                <C.Select value={selectCategory} onChange={e => setselectCategory(e.target.value)}>
                    <option></option>
                    {categoryKey.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </C.Select>
            </C.Label>
            <C.Label>
                <C.InputTitle>Título:</C.InputTitle>
                <C.Input type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} />
            </C.Label>
            <C.Label>
                <C.InputTitle>Valor:</C.InputTitle>
                <C.Input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </C.Label>
            <C.Label>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.Label>
        </C.Container>
    )
}