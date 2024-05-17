import react from 'react';
import './index.css'
import Logo from '../../assests/logo.png'
import {CopyrightOutlined} from '@ant-design/icons'
const Footer = () => {

    return (
        <>
            <div className='footer'>
                <div className='row footer_detail m-0'>

                    <div className='col-md-4 footer_desc '>
                        <h6>Serenestream</h6>
                        <p>Serenestream is dedicated to <br />helping individuals achieve<br /> greater emotional well-being<br /> and inner peace</p>
                    </div>
                    <div className='col-md-4 Logo '><img src={Logo} alt="" /></div>
                    <div className='col-md-4 footer_contact'> 
                        <ul>
                            <li>Product</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='footerLine'></div>
                <div className='define'>
                    <p>Copyright <CopyrightOutlined /> Serenestream 2024.</p>
                </div>
            </div>

        </>
    )
}
export default Footer;