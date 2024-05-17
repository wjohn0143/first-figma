import react from 'react';
import './index.css';
import Aboutus from '../../assests/Frame.jpg'
function About() {
    return (

        <>
            <div className="about_title">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Meet our dedicated team</h1>
                    </div>
                    <div className="col-md-5">
                        <p>At Serenestream, we're more than just a company — we're a community united by our shared dedication to improving mental health and well-being</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={Aboutus} alt="" />
            </div>
        </>
    )

}

export default About;