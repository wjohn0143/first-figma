import react from 'react';
import './index.css';
import Aboutus from '../../assests/Frame.png'
import { MemberCard } from '../../components/member_card';
import { MemberinfoList } from '../../list/list';
import Group_purple from '../../assests/Group.png'
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
                <img src={Aboutus} alt="" />
            </div>
            <div className='aboutus'>

                <div className="row" style={{zIndex:"4"}}>
                    {

                        MemberinfoList && MemberinfoList.map((item, index) => {
                            return (
                                <MemberCard key={index} items={item} />
                            )
                        })
                    }
                </div>
                <div className='about_background'></div>
                <div className='Group_purple'><img src={Group_purple} alt="" /></div>
            </div>
        </>
    )

}

export default About;