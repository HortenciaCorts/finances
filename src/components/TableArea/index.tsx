import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'
import * as C from './styled'

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
                    <C.TableHeaderColumn>Título</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={150}>Valor</C.TableHeaderColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    )
}