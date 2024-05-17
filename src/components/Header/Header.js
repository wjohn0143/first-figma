import react from "react";
import './index.css'
import Logo from '../../assests/logo.png'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <>

            <nav className="navbar">
                <div className="logo">
                    <img src={Logo} />
                    <ul className="d-flex m-0">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="getapp">
                    <p className="m-0">Get the app <ArrowRightOutlined className="pl-[8px]" /></p>
                </div>
            </nav>

        </>
    );
}
export default Navbar;