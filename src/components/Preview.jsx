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

const Preview = () => {
  return (
    <>
      <div className='ml-[6%] mt-[90px] mb-[2%]'>
        <img className='h-6 w-6' src={back} alt="back" />
      </div>
      <div className='w-full md:flex block'>
        <div className='ml-[6%] md:w-[69%] w-full pr-[6%] md:mr-0 '>
          <p className='font-bold text-wrap w-full text-xl md:text-3xl md:w-[88%] mb-3'>1 BHK Flat / Apartment For Rent in Gokul Village Chs 2
            (545 Sq.ft.) </p>

          <div className='flex items-center justify-between mb-3'>
            <div className='flex w-[60%]'><img className='md:h-[24px] md:w-[24px] h-[18px] mr-[1%]' src={location} alt="location" />
              <p className='md:text-base text-sm'>Gokul village chs 2 Shanti Park, near st. Xaviours High school</p></div>
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
                <div className='w-full flex justify-between md:ml-6'>
                  <p className='text-[#7A7A7A] hidden md:block'>Property ID : 99999999</p>
                  <span className='flex justify-evenly w-[200px] items-center bg-white text-1#424242]'>Reject this property <p className='text-[230%] text-[#122B49]'>&times;</p></span>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex justify-between items-end  mt-[9%] ml-[3%] mb-[5%] mr-[3%]'>
            <p className='text-3xl'>Property Overview</p>
            <p className='text-[#7A7A7A]'>Society  : Gokul Village</p>
          </div>
          <div className='flex justify-start flex-wrap ml-[3%]'>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={car} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Two(2)</p>
                <p className='text-[#7A7A7A]'>Bedrooms</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={bath} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>One(1)</p>
                <p className='text-[#7A7A7A]'>Bathrooms</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={area} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>580</p>
                <p className='text-[#7A7A7A]'>Sq. Ft.</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={ground} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Ground</p>
                <p className='text-[#7A7A7A]'>Property on Floor</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={ground} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>4</p>
                <p className='text-[#7A7A7A]'>Total Floors</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={east} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>East</p>
                <p className='text-[#7A7A7A]'>Facing</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white md:mr-[11%]'>
              <div className='text-[#122B49]'>
                <img src={balcony} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>No Balcony</p>
                <p className='text-[#7A7A7A]'>Balcony</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white mr-[11%]'>
              <div className='h-[24px] w-[25px]'>
                <img src={furniture} alt="overview" />
              </div>
              <div>
                <p className='text-[#122B49]'>Semi-furnished</p>
                <p className='text-[#7A7A7A]'>Furnishing</p>
              </div>
            </div>
            <div className='flex text-sm h-[100px] w-[170px] bg-white mr-[11%]'>
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
          <div className='pl-[3%] pr-[3%] pt-[3%] pb-[3%] md:md-0 mb-[9%]'>
            <p className='text-3xl mt-[5%] mb-[3%] '>Description</p>
            <p className='text-[#424242]'>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.</p><br />
            <p className='text-[#424242]'>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p><br />
            <p className='text-[#424242]'>Never miss out on lifestyle as Rassaz Mall......</p><br />
            <p className='text-[#424242] font-bold underline'>Show more</p>
          </div>
        </div>

        <div className='md:w-[32%] max-sm:w-[100%] md:ml-[2%] md:mr-[4%] m-0'>
          <div className='flex flex-wrap justify-between p-5 bg-[#F6EFE6]'>
            <div className='text-center'>
              <p className='text-lg'><b>₹ 20,000/</b>Month</p>
              <p className='mb-1'>(Rent-Negotiable)</p>
            </div>
            <div className='text-center'>
              <p className='text-lg'><b>₹ 20,000</b></p>
              <p>(Deposit)</p>
            </div>
          </div>
          <div className='mt-12 p-5 bg-[#FDFAF7]'>
            <p className='font-bold text-lg mb-1'>Send an inquiry for this property?</p>
            <p className='text-[#424242] mb-5'>Contact Person : Melvin Lasrado</p>
            <input className='h-[32px] w-full mb-3 p-3 border-2 text-[#122B49] border-[#eae9e9] rounded-md font-bold' type='tel' value="+91-9999999999"></input><br />
            <input className='h-[32px] w-full mb-3 p-3 border-2 text-[#122B49] border-[#eae9e9] rounded-md' type='name' placeholder='Name'></input><br />
            <input className='h-[32px] w-full mb-3 p-3 border-2 text-[#122B49] border-[#eae9e9] rounded-md' placeholder='Emial'></input>
            <div>
              <select className='h-[32px] w-[46px] mb-3 mr-1 rounded-s-md border-2 text-[#122B49] border-[#eae9e9] font-bold '>
                <option selected hidden disabled>+91</option>
              </select>
              <input className='h-[32px] w-[82%] md:w-[85%] mb-3 p-3 rounded-e-md border-2 text-[#122B49] border-[#eae9e9] placeholder-black' type='tel' placeholder="999-999-9999"></input>
            </div>
            <p className='p-3 text-sm bg-white text-[#424242] mb-10'>I would like more information about Sector 5, shanti nagar, anubhav society</p>
            <button className='h-8 rounded w-full text-white bg-[#122B49]'>SEND INQUIRY</button>
          </div>
        </div>
      </div>


      {/* section2 */}
      {/* <div>
        <p >Explore Neighborhood</p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <div className='m-[3%] p-[3%] border-2 border-[#eae9e9] rounded-lg'>
        <p className='text-3xl mb-[8%]'>Ratings & Reviews</p>
        <div className='md:flex block justify-between '>

          <div className='md:w-[460px] w-full mb-[10%] mr-6'>
            <div className='flex justify-between'>
              <div className='flex'>
                <div>
                  <img className='mr-3' src={person} alt="person" />
                </div>
                <div>
                  <p className='text-md font-bold text-[#122B49]'>Aishwarya Malik</p>
                  <p className='text-[#424242] text-sm'>Tenant ( 8 months )</p>
                </div>
              </div>
              <div className='flex'>
                <p className='text-md font-bold text-[#122B49]'>4.5</p>
                <img className=' ml-2 h-[19px]' src={star} alt="star" />
              </div>
            </div>
            <div className='text-[#424242]'>
              <p className='text-md font-bold mb-2 mt-3'>Good Society</p>
              <p>The garden view is mesmerizing, the exposure of natural light is good.<br />
                Easy access to stores, markets and schools.</p>
            </div>
          </div>

          <div className='md:w-[460px] w-full mb-3'>
            <div className='flex justify-between'>
              <div className='flex'>
                <div>
                  <img className='mr-3' src={person} alt="person" />
                </div>
                <div>
                  <p className='text-md font-bold text-[#122B49]'>Rajendra Prasad</p>
                  <p className='text-[#424242] text-sm'>Owner (10+ years)</p>
                </div>
              </div>
              <div className='flex'>
                <p className='text-md font-bold text-[#122B49]'>4.5</p>
                <img className=' ml-2 h-[19px]' src={star} alt="star" />
              </div>
            </div>
            <div className='text-[#424242]'>
              <p className='text-md font-bold mb-2 mt-3'>Good Society & Apartment</p>
              <p>With its thoughtfully designed apartments, power backup, and 24x7 security, it offers a secure and worry-free living experience.
              Easy access to stores, markets and schools....</p>
              <p className='text-[#424242] font-bold underline mb-9'>Show more</p>             
            </div>
          </div>

          
        </div>
        <button className='h-8 rounded w-[169px] text-white bg-[#122B49]'>Write a Review</button>
      </div>
      <div className='bg-[#FDFAF7] p-[3%] mb-2'>
        <p className='mb-7 text-3xl'>Similar Properties In Mira road</p>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='md:mr-[4.5%] h-[387px] w-[308px] mb-4 bg-white'>
            <img src={house} alt="house" />
            <div className='m-[3%]'>
              <p className='text-[#122B49] text-lg font-bold mb-2'>Modern & Luxury 2BHK Flat For Rent</p>
              <span className='flex h-[18px] mb-2'><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span className='flex h-[18px] mb-2'><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span className='flex h-[18px]'><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div className='md:mr-[4.5%] h-[387px] w-[308px] mb-4 bg-white'>
            <img src={house} alt="house" />
            <div className='m-[3%]'>
              <p className='text-[#122B49] text-lg font-bold mb-2'>Modern & Luxury 2BHK Flat For Rent</p>
              <span className='flex h-[18px] mb-2'><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span className='flex h-[18px] mb-2'><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span className='flex h-[18px]'><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div className='md:mr-[4.5%] h-[387px] w-[308px] mb-4 bg-white'>
            <img src={house} alt="house" />
            <div className='m-[3%]'>
              <p className='text-[#122B49] text-lg font-bold mb-2'>Modern & Luxury 2BHK Flat For Rent</p>
              <span className='flex h-[18px] mb-2'><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span className='flex h-[18px] mb-2'><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span className='flex h-[18px]'><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>
          <div className=' h-[387px] w-[308px] mb-4 bg-white'>
            <img src={house} alt="house" />
            <div className='m-[3%]'>
              <p className='text-[#122B49] text-lg font-bold mb-2'>Modern & Luxury 2BHK Flat For Rent</p>
              <span className='flex h-[18px] mb-2'><img src={location} alt="location" /><p>Kashimira, Mira Road East,  Mumbai</p></span>
              <span className='flex h-[18px] mb-2'><img src={rupees} alt="price" /><p>60.50 Lac</p></span>
              <span className='flex h-[18px]'><img src={area} alt="area" /><p>1850Sq. ft.</p></span>
            </div>
          </div>

        </div>
      </div>
      <div className='m-[3%] p-[3%] border-2 border-[#eae9e9] rounded-lg'>
        <p className='text-3xl mb-[3%]'>About Miraroad</p>
        <p className='text-[#424242]'>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.</p><br />
        <p className='text-[#424242]'>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. </p><br />
        <p className='text-[#424242] pb-2'>Never miss out on lifestyle as Rassaz Mall......</p>
        <p className='text-[#424242] font-bold underline mb-9'>Show more</p>
        <button className='h-8 rounded w-[169px] text-white bg-[#122B49]'>Write a Review</button>
      </div>


      {/* footer */}
      {/* <div>
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
      </div> */}
    </>
  )
}

export default Preview