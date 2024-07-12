import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'
import security from "../shared/assets/security.png"
import camera from "../shared/assets/camera.png"
const Features = () => {
    const navigate=useNavigate();
    const update= ()=>{
        navigate("/property/price");
    }
  return (
    <>  
        <ProLayout/>
        <div className='container-pro'>
          <div className='layout-pro'>
            <div className='nav-pro'>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>PROPERTY DETAILS</p>
                <p style={{borderBottomColor:"#122B49", color:"#122B49"}}>LOCATION DETAILS</p>
                <p style={{color:"#122B49"}} className='detail-pro1'>FEATURES & AMENITIES</p>
                <p>PRICE DETAILS</p>
                <p>PROPERTY IMAGES</p>
            </div>
            <div style={{paddingRight:"6%"}} className='body-pro'>
                        <p style={{paddingTop:"6%", fontWeight:"700"}} >General Features</p><br/>
                        <p style={{paddingTop:"6%", fontWeight:"700"}} className='required1'>Non-Veg</p><br/>
                        <div className="radio-content-homepage2">
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label style={{ marginRight: "10%" }}>Allowed</label>
                                </label>
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label>Not Allowed</label><br /><br />
                                </label>
                        </div>
                        <p className='required1' style={{fontWeight:"700"}}>Pets Allowed</p><br/>
                        <div className="radio-content-homepage2">
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label style={{ marginRight: "10%" }}>Yes</label>
                                </label>
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label style={{ marginRight: "10%" }}>No</label><br /><br />
                                </label>
                        </div>
                        <hr></hr>
                        <p style={{paddingTop:"6%", fontWeight:"700"}}>SOCIETY AMENITIES</p>
                        <div className='amenities'>
                            <div className='pb-[20%]'>
                                <img className='ml-9' src={security} alt="security"/>
                                <p>24/7 Security</p>
                                <input type="checkbox"/>
                            </div>
                            <div className='pb-[50%]'>
                                <img className='ml-9' src={camera} alt="camera"/>
                                <p>CCTV Camera</p>
                                <input type="checkbox"/>
                            </div>
                        </div>
            </div>
            <div className='foot-pro'>
                <div>
                    <p>Need Help? Call 9999999999</p>
                </div>
                <button onClick={update}>NEXT</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Features