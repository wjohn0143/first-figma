import react, { useState } from 'react';
import { Tabs } from 'antd';
import './index.css'
import Appstore from '../../assests/appstore.svg';
import GooglePlay from '../../assests/googleplay.svg';
import GooglePlay1 from '../../assests/googleplay(1).svg';
import Appstore1 from '../../assests/appstore(1).svg';
import Ling from '../../assests/Vector3.png';
import LPhone from '../../assests/Lphone.svg';
import SPhone from '../../assests/Sphone.svg';
import Blog from '../../assests/blog.svg';
import Group from '../../assests/Group.png';
import Group_blue from '../../assests/Group879.png'
import Innerpeace from '../../components/Innerpeace';
import { InnerpeaceList, BenefitsSerenestream_list, BenefitsSerenestream_row } from '../../list/list';
import shots from '../../assests/214shots_so1.svg'
import rectAngle from '../../assests/Rectangle119.png'
import num01 from '../../assests/01.png'
import num02 from '../../assests/02.png'
import num03 from '../../assests/03.png'
import num04 from '../../assests/04.png'
import Group_Sblue from "../../assests/Group885.png"
import ReactAngle_woman from '../../assests/Rectangle112.png'
import ReactAngle_man from '../../assests/Rectangle113.png'
import Reactcro from '../../assests/Rectangle114.png'

function Home() {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'About Serenestream',
            children: <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Serenestream?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Serenestream is a mobile app designed to support emotional well-being and reduce stress. It offers features such as AI chat companions, guided meditation exercises, mood tracking, and community support to help users navigate life's ups and downs with resilience and ease.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Serenestream available for all mobile devices?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How does the AI chat companion work?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Can I track my mood with Serenestream?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Is there a cost to using Serenestream?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            key: '2',
            label: 'Technical Support   ',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Community and Support',
            children: 'Content of Tab Pane 3',
        },
    ];

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
                                <div className='col-md-4 p-0'>
                                    <Innerpeace key={index} items={item} />
                                </div>
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
                <div className='rectAngle1'><img src={rectAngle} alt="" /></div>
                <div className='rectAngle2'><img src={rectAngle} alt="" /></div>
                <div className='rectAngle3'><img src={rectAngle} alt="" /></div>
                <div className='rectAngle4'><img src={rectAngle} alt="" /></div>
                <div className='SerenestreamLife_titlebox'>
                    <a>QUALITY FEATURES</a>
                    <h3>Discover Serenestream’s life-changing features</h3>
                    <p>Dive into the heart of Serenestream and discover the tools that will guide<br /> you on your journey to emotional well-being.</p>
                </div>
                <div className='AIchat'>
                    <h3>AI Chat</h3>
                    <p>Whether you're feeling<br></br> overwhelmed, anxious, or simply want to talk, our AI chat feature provides a supportive space for<br></br> you to express yourself.</p>
                </div>
                <div className='MoodTracking'>
                    <h3>Mood Tracking</h3>
                    <p>Easily record and monitor your<br></br> mood fluctuations throughout the <br></br>day, week, or month. </p>
                </div>
                <div className='WeeklyMoodSummary'>
                    <h3>Weekly Mood Summary</h3>
                    <p> Reflect on your highs and lows, celebrate progress, and set<br></br> intentions for the week ahead. </p>
                </div>
                <div className='Meditation'>
                    <h3>Meditation</h3>
                    <p>From deep breathing to <br></br>mindfulness practices, our diverse range of meditation sessions <br></br>offers something for everyone.</p>
                </div>
            </div>
            <div className='RoadmapEmotional'>
                <div className='RoadmapEmotional_titlebox'>
                    <a>HOW IT WORKS?</a>
                    <h3>A roadmap to emotional well-being</h3>
                    <p>From signing up to exploring our key features, find out how Serenestream can guide you on <br></br>the path to inner peace and tranquility.</p>
                </div>
                <div className='row '>
                    <div className='col-md-6 p-0'>
                        <div className='SignupGetStarted'>
                            <h6>SIGN UP AND GET STARTED</h6>
                            <p>Create your Serenestream account with just a few simple steps.<br /><br />
                                Enter your details, set up your profile, and unlock access to a world of emotional support and well-being tools.</p>
                            <div className='num01'><img src={num01} alt="" /></div>
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <div className='ExploreKeyFeature'>
                            <h6>EXPLORE KEY FEATURES</h6>
                            <p> Engage in conversations with our AI chat companion, immerse yourself in guided meditation exercises, and start tracking your mood to gain valuable insights into your emotional landscape.</p>
                            <div className='num02'><img src={num02} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-md-6 p-0'>
                        <div className='ExploreKeyFeature'>
                            <h6>ENGAGE AND CONNECT</h6>
                            <p>Share experiences, offer support, and find inspiration from others who understand what you're going through.</p>
                            <div className='num02'><img src={num03} alt="" /></div>
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <div className='SignupGetStarted'>
                            <h6>PRIORITIZE SELF-CARE</h6>
                            <p> With regular use, you'll notice a positive shift in your mood, resilience, and overall well-being. <br /><br /></p>
                            <div className='num01'><img src={num04} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BenefitsSerenestream'>
                <div className='BenefitsSerenestream_titlebox'>
                    <a>BENEFITS</a>
                    <h3>Embrace the benefits of Serenestream</h3>
                    <p>Our app offers a range of benefits designed to support you on your journey towards inner peace.</p>
                </div>
                <div>
                    {
                        BenefitsSerenestream_list && BenefitsSerenestream_list.map((item, index) => {

                            return (
                                <div style={{ width: "330px" }}>
                                    <Innerpeace key={index} items={item} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='row m-0'>
                    {
                        BenefitsSerenestream_row && BenefitsSerenestream_row.map((item, index) => {

                            return (
                                <div className='col-md-6 p-0' style={{ width: "330px" }}>
                                    <Innerpeace key={index} items={item} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='ReactAngle_man'><img src={ReactAngle_man} alt="" /></div>
                <div className='ReactAngle_woman'><img src={ReactAngle_woman} alt="" /></div>
                <div className='Reactcro'><img src={Reactcro} alt="" /></div>
                <div className='Group_Sblue'><img src={Group_Sblue} alt="" /></div>
            </div>
            <div className='journey'>
                <div className='journey_titlebox'>
                    <a>GET THE APP</a>
                    <h3>Start your journey to serenity today</h3>
                    <p>Download Serenestream now and embark on your journey<br />towards inner peace.</p>
                </div>
                <div className='d-flex justify-content-center p-10'>
                    <img src={Appstore1} /> <img src={GooglePlay1} />
                </div>

            </div>
            <div className='answer'>
                <div className='answer_titlebox'>
                    <a>FAQ</a>
                    <h3>Answers to your questions</h3>
                    <p>Explore our frequently asked questions to learn more about<br /> how Serenestream can help you find peace.</p>
                </div>
                <div className='answer_detail'>
                    <Tabs defaultActiveKey="1" tabPosition={'left'} items={items} onChange={onChange} />
                </div>
            </div>
        </>
    );
}

export default Home;