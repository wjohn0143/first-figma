import react from 'react';
import './index.css'
import Appstore from '../../assests/appstore.svg';
import GooglePlay from '../../assests/googleplay.svg';
import Ling from '../../assests/Vector 3.png'
function Home() {

    return (
        <div className='row m-0'>
            <div className='col-md-6 FirstLeft '>
                <p className='title m-0'>Serenestream,<br />
                    your gateway to emotional resilience</p>
                <img src={Ling} className='line'/>
                <p className='m-0 description'>Whether you're riding the highs or weathering the lows, our app is here to guide you towards tranquility
                    and emotional well-being.</p>
                <div className='Store'>
                    <img src={Appstore} alt="" />
                    <img src={GooglePlay} alt="" />
                </div>
            </div>
            <div className='col-md-6 FirstRight'>
            </div>
        </div>
    );
}

export default Home;