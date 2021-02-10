const getFirstName = (s) => {
    let pieces = s.split(/[\s,]+/);
    return pieces[pieces.length - 1].toUpperCase();
}

const getFromTo = (arr, pageIndex, pageSize) => {
    let result = [];
    let from = pageSize * (pageIndex - 1);
    let to = pageSize * pageIndex;
    arr.forEach((child, index) => {
        if (index >= from && index < to)
            result.push(child);
    })
    return result;
}

const calIncome = (arr) => {
    let income = 0;
    arr.forEach(element => {
        income += element.months.length * 150000;
    });

    return income;
}

export {
    getFirstName,
    getFromTo,
    calIncome
}