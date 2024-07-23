import React from 'react'
import '../Footer/style.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='part1'>
        <ul>
          <li>Made with <i class="ri-heart-fill"></i> by</li>
          <li>@cuvette</li>
        </ul>
      </div>
      <div className='part2'>
        <ul>
          <li>Status <i class="ri-external-link-line"></i></li>
          <li>Dcumentation <i class="ri-external-link-line"></i></li>
          <li>Roadmap <i class="ri-external-link-line"></i></li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className='part3'>
        <ul>
          <li>Discord <i class="ri-external-link-line"></i></li>
          <li>Github repository <i class="ri-external-link-line"></i></li>
          <li>Twitter <i class="ri-external-link-line"></i></li>
          <li>LinkedIn <i class="ri-external-link-line"></i></li>
          <li>OSS Friends</li>
        </ul>
      </div>
      <div className='part4'>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
