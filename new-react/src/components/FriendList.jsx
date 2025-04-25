import React from "react";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;
