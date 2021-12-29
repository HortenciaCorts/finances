import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'
import * as C from './styled'

type Props = {
    list: Item[],
    onDelete: (id: number) => void
}

export const TableArea = ({ list, onDelete }: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={90}>Categoria</C.TableHeaderColumn>
                    <C.TableHeaderColumn>Título</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={80}>Valor</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={30}></C.TableHeaderColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} onDelete={onDelete} />
                ))}
            </tbody>
        </C.Table>
    )
}