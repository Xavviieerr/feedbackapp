import { FaTimes, FaEdit } from 'react-icons/fa'
import { useState } from "react";
import { useContext } from 'react'; 
import Card from '../components/shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../src/context/FeedbackContext';


function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    // const handleClick  = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // }

    return(
        <Card>
            <div className="num-display">{item.rating}</div>
                <button onClick={() => deleteFeedback(item.id)}
                    className="close">
                        <FaTimes color='purple' />
                </button>
                <button onClick={()=> editFeedback(item)} className="edit">
                    <FaEdit color='purple'/>
                </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>click me</button> */}
        </Card>
    );
}
FeedbackItem.defaultProps = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;