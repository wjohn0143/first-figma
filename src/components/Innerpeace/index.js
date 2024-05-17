import react from 'react';
import './index.css'


const Innerpeace = ({ items }) => {

    return (
        <div className='descriptioncard descriptioncard_wrapper'>
            <h6>{items.title}</h6>
            <p>{items.description && items.description.map((desc, descIndex) => {
                return (
                    <p key={descIndex}>{desc}</p>
                )
            })}</p>
        </div>
    )
}

export default Innerpeace;