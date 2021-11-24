import moment from 'moment';

const getMonthArray = () => {
    let months = moment.months();
    let currentMonth = moment().format('MMMM');
    let position = months.findIndex(item => item === currentMonth);
    return [...months.slice(position), ...months.slice(0, position)];
};

const getBirthdayMap = data => {
    const map = new Map();
    data.forEach(element => {
        const month = moment(element.dob).format('MMMM');
        if (!map.get(month)) {
            map.set(month, [element]);
        } else {
            let arr = map.get(month);
            arr.push(element);
            arr.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
            map.set(month, arr);
        }
    });
    return map;
};

export { getMonthArray, getBirthdayMap };
