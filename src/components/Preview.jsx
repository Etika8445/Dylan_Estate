import React from 'react'
import back from "../shared/assets/back.png"
import location from "../shared/assets/location.png"
import share from "../shared/assets/share.png"
import capture from "../shared/assets/capture.png"
import add from "../shared/assets/add.png"
import area from "../shared/assets/area.png"
import car from "../shared/assets/car.png"
import ground from "../shared/assets/ground.png"
import bath from "../shared/assets/bath.png"
import east from "../shared/assets/East.png"
import balcony from "../shared/assets/balcony.png"
import furniture from "../shared/assets/furniture.png"
import family from "../shared/assets/family.png"
import security from "../shared/assets/security.png"
import camera from "../shared/assets/camera.png"
import lift from "../shared/assets/lift.png"
import park from "../shared/assets/parking.png"
import inter from "../shared/assets/Inter.png"
import water from "../shared/assets/water.png"
import power from "../shared/assets/power.png"
import main from "../shared/assets/maintain.png"
import fire from "../shared/assets/fire.png"
import person from "../shared/assets/Person.png"
import star from "../shared/assets/star.png"
import house from "../shared/assets/house.png"
import logo from "../shared/assets/mainlogo.png"
import rupees from "../shared/assets/rupeees.png"
import forward from "../shared/assets/forward.png"
// import phone from "../shared/assets/Phone.png"
import "./Previewstyle.css"

const Preview = () => {
  return (
    <>
      <div className='ml-[6%] mt-[3%] mb-[2%]'>
        <img className='h-6 w-6' src={back} alt="back" />
      </div>
      <div className='w-full flex'>
        <div className='ml-[6%] w-[69%]'>
          <p className='font-bold text-3xl w-[800px]'>1 BHK Flat / Apartment For Rent in Gokul Village Chs 2
            (545 Sq.ft.) </p>

          <div className='flex items-center justify-between'>
            <div className='flex w-[60%]'><img className='h-[24px] w-[24px] mr-[1%]' src={location} alt="location" />
              <p>Gokul village chs 2 Shanti Park, near st. Xaviours High school</p></div>
            <img src={share} alt="share" />
          </div>
          <div>
            <div className='h-[405px] w-full bg-[#C4C4C4] relative'>
              <div className='h-[376px] flex justify-between items-center'>
                <div>
                  <img src={forward} alt="back" />
                </div>
                <div>
                  <img className='ml-[40%]' src={capture} alt="camera" />
                  <button className='w-[160px] h-[34px] text-white bg-[#122B49] rounded-lg flex justify-evenly items-center'><img className="" src={add} alt="add" /> <p>Add Photos Now</p></button>
                </div>
                <div>
                  <img src={forward} alt="back" />
                </div>
              </div>
              <div className='flex w-full h-[29px] bg-slate-300 absolute bottom-0'>
                <div className='w-full flex justify-between ml-6'>
                  <p className='text-[#7A7A7A]'>Property ID : 99999999</p>
                  <span className='flex justify-evenly w-[25%] items-center bg-white text-1#424242]'>Reject this property <p className='text-[230%] text-[#122B49]'>&times;</p></span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-end mt-[5%] ml-[3%] mb-[5%] mr-[3%]'>
            <p className='text-3xl'>Property Overview</p>
            <p className='text-[#7A7A7A]'>Society  : Gokul Village</p>
          </div>
          <div className='flex justify-start flex-wrap ml-[3%]'>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={car} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Two(2)</p>
                <p className='text-[#7A7A7A]'>Bedrooms</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={bath} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>One(1)</p>
                <p className='text-[#7A7A7A]'>Bathrooms</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={area} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>580</p>
                <p className='text-[#7A7A7A]'>Sq. Ft.</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={ground} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Ground</p>
                <p className='text-[#7A7A7A]'>Property on Floor</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={ground} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>4</p>
                <p className='text-[#7A7A7A]'>Total Floors</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={east} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>East</p>
                <p className='text-[#7A7A7A]'>Facing</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='text-[#122B49]'>
                <img src={balcony} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>No Balcony</p>
                <p className='text-[#7A7A7A]'>Balcony</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={furniture} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Semi-furnished</p>
                <p className='text-[#7A7A7A]'>Furnishing</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[200px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={family} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Any (Family/Bachelor)</p>
                <p className='text-[#7A7A7A]'>Tenant Preference</p>
              </div>
            </div>
          </div>
          <p className='text-3xl mt-[5%] ml-[3%] mb-[5%] mr-[3%]'>Amenities</p>
          <div className='flex justify-start flex-wrap ml-[3%] mr-[3%]'>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={security} alt="amenities" />
              <p className='text-[#7A7A7A]'>24/7 Security</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={camera} alt="amenities" />
              <p className='text-[#7A7A7A]'>Camera Security</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={lift} alt="amenities" />
              <p className='text-[#7A7A7A]'>Lift</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={park} alt="amenities" />
              <p className='text-[#7A7A7A]'>Reserved Parking</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={water} alt="amenities" />
              <p className='text-[#7A7A7A]'>Regular eater supply</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={power} alt="amenities" />
              <p className='text-[#7A7A7A]'>Power Back up-Partial</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={power} alt="amenities" />
              <p className='text-[#7A7A7A]'>Power Back up-Full</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={main} alt="amenities" />
              <p className='text-[#7A7A7A]'>Maintenance staff</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>
              <img className='ml-12' src={inter} alt="amenities" />
              <p className='text-[#7A7A7A]'>Intercom</p>
            </div>
            <div className='text-sm h-[100px] w-[130px] bg-white mr-[10%] text-center'>       
              <img className='ml-12' src={fire} alt="amenities" />
              <p className='text-[#7A7A7A]'>Fire Safety</p>
            </div>
          </div>
          <div className='pl-[3%] pr-[3%] pt-[3%] pb-[3%]'>
            <p className='text-3xl mt-[5%] mb-[3%] '>Description</p>
            <p className='text-[#424242]'>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.</p><br/>
            <p className='text-[#424242]'>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p><br/>
            <p className='text-[#424242]'>Never miss out on lifestyle as Rassaz Mall......</p><br/>
            <p className='text-[#424242] font-bold underline'>Show more</p>
          </div>
        </div>

        <div className='w-[25.5%] bg-purple-700 ml-[4%] mr-[4%]'>
          <div>
            <div>
              <p>₹ 20,000/Month</p>
              <p>(Rent-Negotiable)</p>
            </div>
            <div>
            <p>₹ 20,000</p>
            <p>(Deposit)</p>
            </div>
          </div>
          <div>
            <p>Send an inquiry for this property?</p>
            <p>Contact Person : Melvin Lasrado</p>
            {/* <input className='bg-img'></input> */}
          </div>
        </div>
      </div>


      {/* section2 */}
      <div>
        <p>Explore Neighborhood</p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <p>Ratings & Reviews</p>
        <div>
          <div>
            <div>
              <img src={person} alt="person" />
            </div>
            <div>
              <p>Aishwarya Malik</p>
              <p>Tenant ( 8 months )</p>
            </div>
            <div>
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div>
            <p>Good Society</p>
            <p>The garden view is mesmerizing, the exposure of natural light is good.<br />
              Easy access to stores, markets and schools.</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={person} alt="person" />
            </div>
            <div>
              <p>Aishwarya Malik</p>
              <p>Tenant ( 8 months )</p>
            </div>
            <div>
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>
          </div>
          <div>
            <p>Good Society</p>
            <p>The garden view is mesmerizing, the exposure of natural light is good.<br />
              Easy access to stores, markets and schools.</p>
          </div>
        </div>
        <button>Write a Review</button>
      </div>
      <div>
        <p>Similar Properties In Mira road</p>
        <div>
          <div>
            <img src={house} alt="house" />
            <div>
              <p>Modern & Luxury 2BHK Flat For Rent</p>
              <span><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div>
            <img src={house} alt="house" />
            <div>
              <p>Modern & Luxury 2BHK Flat For Rent</p>
              <span><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div>
            <img src={house} alt="house" />
            <div>
              <p>Modern & Luxury 2BHK Flat For Rent</p>
              <span><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div>
            <img src={house} alt="house" />
            <div>
              <p>Modern & Luxury 2BHK Flat For Rent</p>
              <span><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>About Miraroad</p>
        <p>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.</p>
        <p>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p>
        <p>Never miss out on lifestyle as Rassaz Mall......</p>
        <p>Show more</p>
        <button>Write a Review</button>
      </div>

      {/* footer */}
      <div>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default Preview