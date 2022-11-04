const data = require('./data')
const {num2mm} = require('num-2-myanmar-english');

module.exports = (date) => {
    date = new Date(date)
    const en_year = date.getFullYear()
    const mm_year = num2mm(en_year)
    const month_index = date.getMonth()
    const en_month_num = month_index + 1;
    const mm_month_num = num2mm(en_month_num)
    const en_month = data.enMonth(month_index)
    const mm_month = data.mmMonth(month_index)
    const en_day = date.getDate()
    const mm_day = num2mm(en_day)
    const day_index = date.getDay()
    const en_day_in_week = data.enDinW(day_index)
    const mm_day_in_week = data.mmDinW(day_index)

    return {
        en_year,
        mm_year,
        en_month_num,
        mm_month_num,
        en_day,
        mm_day,
        en_month,
        mm_month,
        en_day_in_week,
        mm_day_in_week,
    }
}