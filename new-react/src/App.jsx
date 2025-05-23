// src/App.jsx
import React from 'react';
import Profile from './components/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList'
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";


const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <div className='FrirendsListDisplay'>
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>



  );
};

export default App;
