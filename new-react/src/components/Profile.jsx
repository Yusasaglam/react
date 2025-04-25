// src/components/Profile.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", backgroundColor: "#f5f5f5", border: "1px solid gray", borderRadius: "10px", width: "270px", textAlign: "center", borderBlockEnd: "none" }}>
            <div >
                <img style={{ width: "150px", marginTop: "10px", paddingTop: "15px", borderRadius: "100%", backgroundColor: "#262426" }} src={image} alt="User avatar" />
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>{name}</p>
                <p style={{ color: "#7d7d7a" }}>@{tag}</p>
                <p style={{ color: "#7d7d7a" }}>{location}</p>
            </div>

            <ul style={{ paddingLeft: "12px", backgroundColor: "#cecfca", padding: "0", justifyContent: "space-between", border: "3px solid black", borderTopColor: "#7d7d7a", gap: "10px", listStyleType: "none", display: "flex", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                <li style={{ paddingRight: "15px", display: "flex", flexDirection: "column", borderRight: "3px solid #7d7d7a" }}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li style={{ padding: "0px 16px", display: "flex", flexDirection: "column", borderRight: "3px solid #7d7d7a", paddingRight: "15px" }}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li style={{ padding: "0px 20px", display: "flex", flexDirection: "column" }}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};



export default Profile;
