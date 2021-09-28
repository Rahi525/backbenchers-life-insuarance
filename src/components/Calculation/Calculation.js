import React from 'react';
import SelectedFriend from '../SelectedFriend/SelectedFriend';
import './Calculation.css'

const Calculation = props => {
   const friendsArr = props.friends
   const sumBudget = friendsArr.reduce((prev, curr) => prev+curr.budget, 0)
   return (
      <div className="calc-container">
         <h5>Total deposit: &#2547;<span id="collected-amount">{sumBudget}</span></h5>
         <h5>Member Added: <span id="collected-amount">{props.friends.length}</span></h5>
         <div className="selected-wrap">
            {
               friendsArr.map(friend => <SelectedFriend 
                  key={friend._id}
                  image={friend.picture} 
                  name={friend.name} 
                  budget={friend.budget}
               ></SelectedFriend>)
            }
         </div>
      </div>
   );
};

export default Calculation;