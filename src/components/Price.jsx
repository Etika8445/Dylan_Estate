import ProLayout from './ProLayout'
import { useNavigate } from 'react-router-dom'

const Price = () => {
    const navigate=useNavigate();
    const update= ()=>{
        navigate("/property/image");
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
            <div className='body-pro'>
            <div className='input-seller' style={{marginTop:"6%"}}>
              <div style={{ marginRight: "5%"}}>
                <p className='required'>Rent</p><br />
                <input type='salary' name='floor' id='floor' placeholder="Rupees/Month"  className='input1' required></input><br></br>
              </div>
              <div>
                <p className='required' >Maintenance</p><br />
                <select name='area' id='area' className='input1'>
                            <option vaue="" disabled selected hidden>Maintenance</option>
                            <option vaue="Included">Included in Rent</option>
                            <option vaue="Extra">Extra Maintenance</option>
                            
                        </select>
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

export default Price