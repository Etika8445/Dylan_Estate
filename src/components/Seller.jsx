import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'

const Seller = () => {
    const navigate=useNavigate();
    const update= ()=>{
        navigate("/property/location");
    }
  return (
    <>  
        <ProLayout/>
        <div className='container-pro'>
          <div className='layout-pro'>
            <div className='nav-pro'>
                <p style={{color:"#122B49"}} className='detail-pro'>PROPERTY DETAILS</p>
                <p>LOCATION DETAILS</p>
                <p>FEATURES & AMENITIES</p>
                <p>PRICE DETAILS</p>
                <p className='show-pro'>PROPERTY IMAGES</p>
            </div>
            <div className='body-pro'>
                        <p style={{paddingTop:"5%"}} className='required1'>Property For :</p><br/>
                        <div className="radio-content-homepage2">
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label style={{ marginRight: "10%" }}>Rent</label>
                                </label>
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label style={{ marginRight: "10%" }}>Sale</label><br /><br />
                                </label>
                        </div>
                        <p className='required1'>Property Type :</p><br/>
                        <div className="radio-content-homepage1">
                            <div className='radio-home' style={{marginRight:"130px"}}>
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label>Residential</label>
                                </label>
                                <label  className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label>Commercial</label>
                                </label>
                              </div>
                              <div className='radio-home'>
                                <label className="radio-label1">
                                    <input type='radio' className='radio-button1' required />
                                    <label>Land/Plot</label><br /><br />
                                </label>
                            </div>
                        </div>
                        {/* <div className="">
                          <div className="">
                            <p>Flat/Apartment</p>
                            <p>House/Villa</p>
                          </div>
                          <div className="">
                            <p>Office Space</p>
                            <p>Co working</p>
                            <p>Restaurant/Cafe</p>
                            <p>Shop/Showroom</p>
                            <p>Industrial Bldg.</p>
                            <p>Industrial Shed</p>
                            <p>Warehouse/Godown</p>
                          </div>
                        </div> */}
                        <div style={{paddingBottom:"20%"}} className='input-seller'>
                          <div style={{marginRight:"5%"}}>
                              <label className='required'>Property on Floor</label><br/>
                              <input type='tel'  name='floor' id='floor' placeholder="Floor"  className='input1' required></input><br></br>
                          </div>
                          <div>
                              <label className='required'>Total Floors</label><br/>
                              <input type='tel' name='total' id='total' placeholder="Total Floors"  className='input1' required></input><br></br>       
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

export default Seller