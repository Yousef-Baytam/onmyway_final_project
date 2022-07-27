import moment from 'moment'

const handleSortPosts = (posts) => {
    let arr = []
    for (let i of posts) {
        if (!i.repeat) arr.push(i)
        else {
            const date = getDates(JSON.parse(i.days))
            arr.push({ ...i, date: date })
        }
    }
    return arr.sort((a, b) => (new Date(a.date) - new Date(b.date)))
}

const getDates = (obj) => {
    let days = ['monday', 'tuesday', 'wendnesday', 'thursday', 'friday', 'saturday', 'sunday']
    let date = moment().add(8, 'days')
    for (let i of Object.keys(obj)) {
        if (obj[i]) {
            if (i === moment().format('dddd').toLowerCase())
                return moment()
            const d = new Date();
            d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + days.indexOf(i) + 1) % 7);
            date = Math.min(date, d)
        }
    }
    return moment(date)
}

export { handleSortPosts }