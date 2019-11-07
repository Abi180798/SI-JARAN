import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderAdmin from '../../Components/HeaderAdmin'
import DPAdminEditContent from './DPAdminEditContent'

const DPAdminEdit = () => {
  let { id } = useParams()
  return (
    <div><HeaderAdmin kunci='2' component={DPAdminEditContent} id={id} /></div>
  )
}
export default DPAdminEdit