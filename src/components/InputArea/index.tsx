import { Item } from '../../types/Item';
import * as C from './styled';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const handleAddEvent = () => {
        const newItem: Item = {
            date: new Date(2021, 11, 27),
            category: 'food',
            title: 'item de teste',
            value: 250.25
        };
        onAdd(newItem);
    }
    return(
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}