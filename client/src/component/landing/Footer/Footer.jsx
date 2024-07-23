import '../Footer/style.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='part1'>
        <ul>
          <li>Made with <i className="ri-heart-fill"></i> by</li>
          <li>@cuvette</li>
        </ul>
      </div>
      <div className='part2'>
        <ul>
          <li>Status <i className="ri-external-link-line"></i></li>
          <li>Dcumentation <i className="ri-external-link-line"></i></li>
          <li>Roadmap <i className="ri-external-link-line"></i></li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className='part3'>
        <ul>
          <li>Discord <i className="ri-external-link-line"></i></li>
          <li>Github repository <i className="ri-external-link-line"></i></li>
          <li>Twitter <i className="ri-external-link-line"></i></li>
          <li>LinkedIn <i className="ri-external-link-line"></i></li>
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
