import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getReports } from '../controllers/reportController'
import ReportCard from './ReportCard'


export default function Reports() {
    const [pendingReports, setPendingReports] = useState([])
    const [reviewedReports, setReviewedReports] = useState([])
    const [reports, setReports] = useState([])
    const [items, setItems] = useState(['None', 'Pending', 'Reviewed'])
    const [filter, setFilter] = useState('None')
    const [search, setSearch] = useState('')

    const handleGetReports = async () => {
        const res = await getReports()
        setPendingReports(res.pendingReports)
        setReviewedReports(res.reviewedReports)
    }

    useEffect(() => {
        setReports([...reviewedReports, ...pendingReports].filter((e) => (e.reported.username.toLowerCase().includes(search) || e.sender.username.toLowerCase().includes(search) || e.reportType.toLowerCase().includes(search))))
    }, [search])

    useEffect(() => {
        setReports([...pendingReports, ...reviewedReports])
    }, [reviewedReports, pendingReports])

    useEffect(() => {
        if (filter != 'None')
            setReports([...pendingReports, ...reviewedReports].filter((i) => i.status === filter.toLowerCase()))
        else {
            setReports([...pendingReports, ...reviewedReports])
        }
    }, [filter])

    const renderReports = () => {
        return reports.map((i) => <div><ReportCard data={i} /></div>)
    }

    useEffect(() => {
        handleGetReports()
    }, [])

    return (
        <div>
            <Header title={'Reports'} items={items} search={search} setSearch={setSearch} dropdown={filter} setDropdown={setFilter} />
            <div className='cardsContainer'>
                {reports.length != 0 && renderReports()}
            </div>
        </div>
    )
}
