import React, { useState } from 'react'
import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'
import overlay from "../shared/assets/overlay.png"
import capture from "../shared/assets/capture.png"
import add from "../shared/assets/add.png"
const Images = () => {
    const navigate=useNavigate();
    const [show, setshow] = useState(true);
    const direct=()=>{
        navigate("/property/confirm");
    }
    const update= ()=>{
      setshow(false);
    }
  return (
    <>  
        <ProLayout/>
        <div className='container-pro'>
          <div className='layout-pro'>
            <div className='nav-pro'>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>PROPERTY DETAILS</p>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>LOCATION DETAILS</p>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>FEATURES & AMENITIES</p>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>PRICE DETAILS</p>
                <p style={{color:"#122B49"}} className='detail-pro2'>PROPERTY IMAGES</p>
            </div>
            <div style={{paddingRight:"6%"}} className='body-pro'>
                <p style={{paddingTop:"6%"}}>Add Photos / videos to attract more tenants! </p><br/>
                <p style={{paddingTop:"3%", fontSize:"92%"}}>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p><br/>
                <div className='contain-images'>
                    <div className='block-images'>
                    <div><img className='ml-[40%]' src={capture} alt="camera"/></div>
                    <button><img src={add} alt="add"/> <p style={{paddingLeft:"4%"}}>Add Photos Now</p></button>
                    </div>
                </div> 
                <p>OR</p><br/>
                <p>We can upload them for you! You can email the pictures and videos to us at Dylanestate.com </p> <br/><br/>
                <p className='text-sm'>Accepted formats are .jpg, .gif, .bmp & .png. </p>
                <p className='text-sm pb-[30%]'>Maximum size allowed is 20 MB. Minimum dimension allowed 600*400 Pixel</p>             
            </div>
            {!show && <div className='overlay-images'>
              <img className='h-[180px] w-[240px] md:h-[38%] md:w-[42%]' src={overlay} alt="click" onClick={direct}/>
            </div>}
            <div className='foot-pro'>
                <div>
                    <p>Need Help? Call 9999999999</p>
                </div>
                <button className='image-button' onClick={update}>SAVE</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Images