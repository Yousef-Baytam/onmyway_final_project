import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

export default function Reports() {
    const [pendingReports, setPendingReports] = useState([])
    const [reviewedReports, setReviewedReports] = useState([])

    useEffect(() => {
        handleGetReports()
    }, [])
    return (
        <div>
            <Header title={'Reports'} items={['None']} />
        </div>
    )
}
