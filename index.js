const KabisYear = (year) => {
    return year % 4 == 0 ? 'Kabis Yili' : 'Kabisa Yili emas'
}

console.log(KabisYear(2024));

const toUpperCase = (name) => {
    let res = name.split('')
    resalt = res.filter((val) => {
        return val == val.toUpperCase()
    }).join('')
    return resalt
}

const name = 'WebBraInAcadeMy'
console.log(toUpperCase(name));