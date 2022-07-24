import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getReports } from '../controllers/reportController'

export default function Reports() {
    const [pendingReports, setPendingReports] = useState([])
    const [reviewedReports, setReviewedReports] = useState([])

    const handleGetReports = async () => {
        const res = await getReports()
        setPendingReports(res.pendingReports)
        setReviewedReports(res.reviewedReports)
    }

    useEffect(() => {
        handleGetReports()
    }, [])

    return (
        <div>
            <Header title={'Reports'} items={['None']} />
        </div>
    )
}
