import react from 'react';
import './index.css'
import Appstore from '../../assests/appstore.svg';
import GooglePlay from '../../assests/googleplay.svg';
import Ling from '../../assests/Vector 3.png';
import LPhone from '../../assests/Lphone.svg';
import SPhone from '../../assests/Sphone.svg';
import Blog from '../../assests/blog.svg';
import Group from '../../assests/Group.png';
import Group_blue from '../../assests/Group 879.png'
import Innerpeace from '../../components/Innerpeace';
import { InnerpeaceList } from '../../list/list';
import shots from '../../assests/214shots_so 1.svg'
function Home() {

    return (
        <>
            <div className='row m-0 Serenestream'>
                <div className='col-md-6 FirstLeft '>
                    <p className='title m-0'>Serenestream,<br />
                        your gateway to emotional resilience</p>
                    <img src={Ling} className='line' />
                    <p className='m-0 description'>Whether you're riding the highs or weathering the lows, our app is here to guide you towards tranquility
                        and emotional well-being.</p>
                    <div className='Store'>
                        <img src={Appstore} alt="" />
                        <img src={GooglePlay} alt="" />
                    </div>
                </div>
                <div className='col-md-6 FirstRight'>
                    <div className='backIGM'></div>
                    <div className='Group'><img src={Group} alt="" /></div>
                    <div className="lphone"> <img src={LPhone} alt="" /></div>
                    <div className='Sphone'><img src={SPhone} alt="" /></div>
                    <div className='Blog'><img src={Blog} alt="" /></div>
                </div>
            </div>
            <div className='Innerpeace'>
                <div className='text-center Title'>
                    <h3>Your route to inner peace</h3>
                    <p>Dive into a realm of calm, where emotional turbulence yields to tranquility.</p>
                </div>
                
                <div className='Group_blue'><img src={Group_blue} alt="" /></div>
                <div className='row m-0 descriptionCards'>
                    {
                        InnerpeaceList && InnerpeaceList.map((item, index) => {
                            return (
                                <Innerpeace key={index} items={item} />
                            )
                        })
                    }
                </div>
                <div className='Group_blue1'><img src={Group_blue} alt="" /></div>
            </div>
            <div className='SerenestreamLife'>
                  <div className='backSqure1'></div>      
                  <div className='backSqure2'></div>      
                  <div className='backSqure3'></div>      
                  <div className='backSqure4'></div>      
                  <div className='shots'><img src={shots} alt="" /></div>
            </div>
        </>
    );
}

export default Home;