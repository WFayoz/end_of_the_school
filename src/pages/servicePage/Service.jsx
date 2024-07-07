import React from 'react'
import ServiceCards from './ServiceCards'
import FactsInNums from '../aboutUs/FactsInNums'
import Certificates from '../aboutUs/Certificates'
import FormSection from '../../components/customComponents/FormSection'

const Service = () => {
  return (
    <div>
        <ServiceCards/>
        <FactsInNums/>
        <Certificates/>
        <FormSection/>
        <div className='mb-36'></div>
    </div>
  )
}

export default Service