import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getReports } from '../controllers/reportController'
import ReportCard from './ReportCard'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'
import BanIcon from '../assets/icons/BanIcon'
import ActivateIcon from '../assets/icons/ActivateIcon'

export default function Reports() {
    const [pendingReports, setPendingReports] = useState([])
    const [reviewedReports, setReviewedReports] = useState([])
    const [reports, setReports] = useState([])

    const handleGetReports = async () => {
        const res = await getReports()
        setPendingReports(res.pendingReports)
        setReviewedReports(res.reviewedReports)
    }

    useEffect(() => {
        setReports([...reviewedReports, ...pendingReports])
    }, [reviewedReports, pendingReports])

    const renderReports = () => {
        return reports.map((i) => <div><ReportCard data={i} /></div>)
    }

    useEffect(() => {
        handleGetReports()
    }, [])

    return (
        <div>
            <Header title={'Reports'} items={['None']} />
            <div className='cardsContainer'>
                {reports.length != 0 && renderReports()}
            </div>
        </div>
    )
}
