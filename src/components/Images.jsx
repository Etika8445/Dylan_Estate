import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'
import capture from "../shared/assets/capture.png"
import add from "../shared/assets/add.png"
const Images = () => {
    const navigate=useNavigate();
    const update= ()=>{
        navigate("/property/confirm");
    }
  return (
    <>  
        <ProLayout/>
        <div className='container-pro'>
          <div className='layout-pro'>
            <div className='nav-pro'>
                <p>PROPERTY DETAILS</p>
                <p>LOCATION DETAILS</p>
                <p>FEATURES & AMENITIES</p>
                <p>PRICE DETAILS</p>
                <p>PROPERTY IMAGES</p>
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
            <div className='foot-pro'>
                <div>
                    <p>Need Help? Call 9999999999</p>
                </div>
                <button className='image-button' onClick={update}>SAVE AND POST</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Images