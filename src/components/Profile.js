import React from "react";


const Profile = ({ student }) => {
    return (
        <div>
            <h2>Profile</h2>
            <img
                className="profile"
<<<<<<< HEAD
                src={`/assets/profilepic/${student.profilePic}`}
=======
                src={require(`../assets/profilePic/${student.profilePics}`).default}
>>>>>>> 8c97c0d71680f45ae2224d8d5706e6526fc825a8
                alt="Profile"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <p><b>Age:</b> {student.age}</p>
            <p><b>Gender:</b> {student.gender}</p>
            <p><b>Course:</b> {student.course}</p>
            <p><b>Country:</b> {student.address.country}</p>
            <p><b>City:</b> {student.address.city}</p>
            <p><b>Skills:</b> {student.skills.join(", ")}</p>
        </div>
    );
};

export default Profile;
