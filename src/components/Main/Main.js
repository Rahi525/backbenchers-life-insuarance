import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Friends from '../Friends/Friends';
import './Main.css';

const Main = () => {
   const [friends, setFriends] = useState([])
   const [selectedFriends, setSelectedFriend] = useState([])


   useEffect(() => {
      fetch('./friends.json')
      .then(res => res.json())
      .then(data => setFriends(data))
   }, [])
   
   const addMoney = singleFriend => {
      let key = singleFriend._id
      
      if(selectedFriends.length === 0){
         const newFriend = [...selectedFriends, singleFriend]
         setSelectedFriend(newFriend)
      } else{
         let isTrue = true
         for(const friend of selectedFriends){
            if(friend._id === key){
               isTrue = false
               break
            }
         }

         if(isTrue) {
            const newFriend = [...selectedFriends, singleFriend]
            setSelectedFriend(newFriend)
         }
      }
   }

   const deleteSelectedFriend = id => {
      console.log(id)
   }

   return (
      <main>
         <div id="main-container">
            <div id="friend-calc-container">
               <div id="friends-wrapper">
                  {
                     friends.map(friend => <Friends key={friend._id} friend={friend} addMoney={addMoney}></Friends>)
                  }
               </div>
               <div id="calc-wrapper" className="sticky">
                  <Calculation friends={selectedFriends}></Calculation>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Main;