import React from 'react'
import banner4 from "../userhomepage/images/banner4.jpg"

import banner5 from "../userhomepage/images/banner5.png"

const Banner = () => {
  return (
    <div>
<div className='banner mt-5 mx-2'>
        <div className='banner-body d-flex justify-content-center align-items-center mx-4'>
          <div style={{ position: 'relative', marginRight: '10px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', color: 'black', zIndex: '1' }}>
              <h5 style={{ color: 'grey' }}>Spring Sale is Coming</h5>
              <p style={{ color: 'grey', fontFamily: 'sans-serif' }}>All Smart watches Discount</p>


              <p><a href='#' style={{ textDecoration: 'none' }}>15% off</a></p>
              <button className="btn btn-primary btn-oval" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                Discover Now <span style={{ marginLeft: '5px' }}>&rarr;</span>
              </button>
            </div>
            <img src={banner4} className="img-fluid" alt="" />
          </div>
          <div style={{ position: 'relative', marginLeft: '10px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', color: 'white', zIndex: '1' }}>
              <p style={{ fontFamily: 'sans-serif' }}>Amazing Value</p>
              <h6 style={{ width: '170px', fontFamily: 'sans-serif' }}>Headphones Trending JBL Harman from Rs15,999</h6>

              <button className="btn btn-primary btn-oval" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                Discover Now <span style={{ marginLeft: '5px' }}>&rarr;</span>
              </button>
            </div>
            <img src={banner5} className="img-fluid" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Banner;