import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let i in list) {
        const formatDate = new Date(list[i].date)
        console.log(formatDate.getFullYear())
        if (formatDate.getFullYear() === parseInt(year) &&
            (formatDate.getMonth() + 1) === parseInt(month)) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date: Date): string => {
    const formatDate = new Date(date)
    const year = formatDate.getFullYear();
    const month = formatDate.getMonth() + 1;
    const day = formatDate.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    const [year, month] = currentMonth.split('-');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) -1]} de ${year}`;
}