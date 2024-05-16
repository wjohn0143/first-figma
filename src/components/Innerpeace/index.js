import react from 'react';
import './index.css'


const Innerpeace = ({ items }) => {

    return (

        <div className='col-md-4 p-0'>
            <div className='descriptioncard'>
                <h6>{items.title}</h6>
                <p>{items.description}</p>
            </div>
        </div>

    )
}

export default Innerpeace;