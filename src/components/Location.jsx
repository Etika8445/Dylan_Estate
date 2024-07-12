import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'
import map from "../shared/assets/map.png"
import map2 from "../shared/assets/map2.png"
import { useState } from 'react';
const Location = () => {
  const navigate = useNavigate();
  const [show, setshow]= useState(true);
  const update = () => {
    navigate("/property/features");
  }
  const imagemage =()=>{
      setshow(false);
  }
  return (
    <>
      <ProLayout />
      <div className='container-pro'>
        <div className='layout-pro'>
          <div className='nav-pro'>
            <p>PROPERTY DETAILS</p>
            <p>LOCATION DETAILS</p>
            <p>FEATURES & AMENITIES</p>
            <p>PRICE DETAILS</p>
            <p>PROPERTY IMAGES</p>
          </div>
          <div className='body-pro'>
            <div className='input-seller' style={{marginTop:"6%"}}>
              <div style={{ marginRight: "5%"}}>
                <p className='required'>Locality / Area</p><br />
                <select name='area' id='area' className='input1'>
                  <option vaue="" disabled selected hidden>Eg : Sheetal Nagar</option>
                </select>
              </div>
              <div>
                <p >City</p><br />
                <select name='area' id='area' className='input1'>
                  <option vaue="" disabled selected hidden>Mumbai, Maharashtra</option>
                </select><br/><br/>
              </div>
            </div>
            <p >Mark Locality on Map</p><br />
            {show && <div className='map-location' onClick={imagemage}>
              <img src={map} alt="map"></img>
            </div>}
            {!show && <div className='map-location'>
              <img src={map2} alt="map"></img>
            </div>}
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

export default Location