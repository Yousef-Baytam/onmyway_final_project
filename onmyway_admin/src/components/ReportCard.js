import React from 'react'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'
import BanIcon from '../assets/icons/BanIcon'
import ActivateIcon from '../assets/icons/ActivateIcon'

export default function ReportCard({ data }) {
    console.log(data)

    const handleReviewed = async () => {

    }
    return (
        <div className='cardContainer'>
            <div className=''>
                <div>
                    {data.reportType}
                </div>
                <div>
                    {data.report}
                </div>
            </div>
            <div className='infoContainer'>
                <div>
                    <div>{data.reported.username}</div>
                </div>
                <div>
                    {
                        data.status == 'pending' &&
                        <div onClick={handleReviewed}>
                            <ActivateIcon />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
