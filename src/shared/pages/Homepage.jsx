import React, { useState } from 'react'
import '../pages/HomepageStyle.css'
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [show, setshow] = useState(true);
    const navigate = useNavigate();
    const update = () => {
        if (show) setshow(false);
        else {
            navigate('/property/seller');
        }
    }
    return (
        <div className='layout-homepage'>
            <div className='heading-homepage'>
                <p style={{ fontSize: "200%", fontWeight: "normal", paddingBottom: "16px" }}>Sell or Rent your Property For Free</p>
                <p className='paragraph-homepage' style={{ fontSize: "100%", fontWeight: "lighter", paddingBottom: "16px" }}>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
            </div>
            <div className='info-homepage'>
                <div className='step-homepage'>
                    <p style={{ fontSize: "130%" }}>Upload your property in 4  simple steps</p>
                    <ul className='list-homepage'>
                        <li>Add your properties <strong>Basic Details</strong></li>
                        <li>Add property <strong>Location</strong></li>
                        <li>Add property <strong>Features and amenities</strong></li>
                        <li>Add <strong>Price details</strong></li>
                        <li>Add your best <strong>Property Shots</strong></li>
                    </ul>
                </div>



                {/* registerion */}
                <div className='register-homepage'>
                    <div className='headreg-homepage'>LETS GET YOU STARTED !</div>
                    <div className='content-homepage'>
                        {show && <form>
                            <p className='required1'>I am:</p><br />
                            <div className="radio-content-homepage">
                                <label className="radio-label">
                                    <input type='radio' className='radio-button' required />
                                    <label style={{ marginRight: "10%" }}>Owner</label>
                                </label>
                                <label className="radio-label">
                                    <input type='radio' className='radio-button' required />
                                    <label style={{ marginRight: "10%" }}>Builder</label><br /><br />
                                </label>
                            </div>
                            <label for='name' className='required'>Your Name</label><br />
                            <input type='text' name='name' id='name' placeholder="Name" className='input' required></input><br></br>
                            <label for='country' className='required'>Country</label><br />
                            <select name='country' id='country' className='country'>
                                <option value='India'>India</option>
                                <option value='USA'>USA</option>
                            </select><br></br>
                            <label for='phone' className='required'>Phone</label><br></br>
                            <select name='code' id='code' className='code'>
                                <option value='+91'>+91</option>
                            </select>
                            <input type='phone' placeholder='000-000-0000' className="phoneno" required></input><br /><br />
                            <p>OR</p><br />
                            <label for='email' className='required'>Email</label><br></br>
                            <input type="email" placeholder='email' className='input' required></input><br />
                        </form>}
                        {!show && <form>
                            <div className='verify-homepage'>
                                <span style={{ display: "flex;" }}>
                                    <label style={{ fontWeight: "500", fontSize: "85%" }} className='required'>Enter OTP sent on 999-999-9999</label>
                                    <label className='resend-homepage'>Change</label><br /><br />
                                </span>
                                <input type='tel' placeholder="0 0 0 0" className='input-otp'></input>
                                <p style={{ marginLeft: "44%", textDecoration: "none", marginTop: "2%" }} className='resend-homepage'>Resend OTP</p>
                            </div>
                        </form>}
                    </div>
                    <div className='footreg-homepage'>
                        <span style={{ display: "flex;", fontSize: "85%" }}>
                            <p style={{ color: "#7A7A7A" }}>Need Help?</p>
                            <p style={{ color: "black" }}>Call 9999999999</p>
                        </span>
                        <div className='nextreg-homepage'>
                            <button onClick={update}>NEXT</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage