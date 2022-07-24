import axios from 'axios'

const getReports = async (data) => {
    try {
        let res = await axios({
            url: `/admin/reports`,
            method: "GET",
            data: data
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

const setReportsStatus = async (id) => {
    try {
        let res = await axios({
            url: `/admin/reports/${ id }`,
            method: "PATCH",
        })
        return res.data
    }
    catch (e) {
        console.log(e);
    }
}

export { getReports, setReportsStatus }