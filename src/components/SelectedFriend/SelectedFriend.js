import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedFriend.css'

const SelectedFriend = props => {
   const {image, name, budget} = props
   return (
      <div className="each-selected-friend">
         <div className="image-wrap">
            <img width="40px" src={image} alt="" />
         </div>
         <div className="name-budget-wrap">
            <h5>{name}</h5>
            <p>Deposit: &#2547;{budget}</p>
         </div>
         <div className="cross-icon">
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
         </div>
      </div>
   );
};

export default SelectedFriend;