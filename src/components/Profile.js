import React from "react";

export const Profile = (props) => {
    return (
        <div>
            <h1>Ini Profil nya {props.name}</h1>
            <p>Umurnya {props.umur}</p>
        </div>
    );
};
