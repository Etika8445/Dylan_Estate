import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Comfirmation = () => {
    const navigate=useNavigate();
    const update= ()=>{
        navigate("/property/preview");
    }
  return (
    <div className='layout-confirmation'>
        <p style={{fontSize:"134%", paddingBottom:"3%"}}>
        Thank you for listing your property with us,
        </p>
        <p style={{paddingBottom:"4%"}}>Your listing will be reviewed and will go live within 24 hours.</p>
        <p style={{lineHeight:"200%"}}>We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. 
        </p>
        <p style={{padding:"10% 0 12% 0"}}>-Dylan Estates</p>
        <button style={{marginRight:"5%"}}>Edit Property Listing</button>
        <button onClick={update}>Preview Property Listing</button>
    </div>
  )
}
