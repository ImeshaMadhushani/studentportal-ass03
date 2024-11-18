import React from "react";

const Profile = ({ student }) => {
    return (
        <div>
            <h2>Profile</h2>
            <img
                className="profile"
                src={require(`../assets/profilepic/${student.profilePic}`)}
                alt="Profile"
                style={{ width: "150px", height: "150px" }}
            />
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <p><b>Course:</b> {student.course}</p>
            <p><b>Country:</b> {student.country}</p>
            <p><b>Details:</b> {student.details}</p>
        </div>
    );
};

export default Profile;
