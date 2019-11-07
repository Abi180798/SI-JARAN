import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderAdmin from '../../Components/HeaderAdmin'
import DKAdminEditContent from './DKAdminEditContent'

const DKAdminEdit = () => {
    let { id } = useParams()
    return (
        <div><HeaderAdmin kunci='2' component={DKAdminEditContent} id={id} /></div>
    )
}
export default DKAdminEdit