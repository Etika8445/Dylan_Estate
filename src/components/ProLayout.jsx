import React from 'react'
import bell from '../shared/assets/bell.png'
import '../components/ProLayoutStyle.css'
const ProLayout = () => {
  return (
    <>
        <div className='noti-pro'>
            <img src={bell} alt='noticifation'></img>
        </div>
    </>
  )
}

export default ProLayout