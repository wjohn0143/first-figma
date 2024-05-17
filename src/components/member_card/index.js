import react from 'react'
import "./index.css"


export const MemberCard = ({ items }) => {

    return (
        <div className="member-wrapper col-md-6" >
            <div className="member">
                <img src={items.url} alt="" />

                <div className="member_title">
                    <h6 className='m-0'>{items.name}</h6>
                    <p className='m-0'>{items.job}</p>
                </div>
                <div className='member_desc'>
                    <p>{items.desc}</p>
                </div>
            </div>
        </div>
    )
}