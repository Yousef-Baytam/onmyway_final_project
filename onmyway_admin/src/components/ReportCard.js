import React from 'react'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'
import BanIcon from '../assets/icons/BanIcon'
import ActivateIcon from '../assets/icons/ActivateIcon'
import { setReportsStatus } from '../controllers/reportController'

export default function ReportCard({ data }) {
    console.log(data)

    const handleReviewed = async () => {
        try {
            await setReportsStatus(data._id)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='cardContainer'>
            <div className='reportCard'>
                <div>
                    {data.reportType}
                </div>
                <hr />
                <div>
                    {data.report}
                </div>
            </div>
            <div className='infoContainer'>
                <div>
                    <div>Reported:<br />{data.reported.username}</div>
                    <div>Reporter:<br />{data.sender.username}</div>
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
