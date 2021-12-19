import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styled';
import arrowLeft from '../../images/arrow-left-circle.svg';
import arrowRight from '../../images/arrow-right-circle.svg';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() -1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }
    const handleNextMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() +1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}> <img src={arrowLeft} alt="seta para esquerda" /> </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}><img src={arrowRight} alt="seta para direita" /></C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={income + expense} 
                            color={income + expense < 0 ? '#e2143a' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}