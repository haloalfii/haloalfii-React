import React from "react";

export const Profile = (props) => {
    return (
        <div className='container px-5 pt-5 pb-3'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                    <img
                        src={props.profiles.photo}
                        className='text-start rounded-circle shadow-lg'
                        width='300'
                        height='300'
                        alt=''
                        srcSet=''></img>
                </div>
                <div className='col-lg-3 mt-3'>
                    <h1 className='ms-3 text-start text-white'>
                        {props.profiles.name}
                    </h1>
                    <p className='ms-3 text-start text-white'>
                        {props.profiles.about}
                    </p>
                    <p className='ms-3 text-start text-white'>
                        {props.profiles.about2}
                    </p>
                    <p className='ms-3 text-start text-white'>
                        You can find me here{" "}
                    </p>
                    <div className='d-flex'>
                        <h3 className='ms-3'>
                            <a
                                target='_blank'
                                href='https://github.com/haloalfii'>
                                <i className='text-white bi bi-github'></i>
                            </a>
                        </h3>
                        <h3 className='ms-3'>
                            <a
                                target='_blank'
                                href='https://www.linkedin.com/in/haloalfii/'>
                                <i className='text-white bi bi-linkedin'></i>
                            </a>
                        </h3>
                        <h3 className='ms-3'>
                            <a
                                target='_blank'
                                href='https://www.instagram.com/haloalfii/'>
                                <i className='text-white bi bi-instagram'></i>
                            </a>
                        </h3>
                    </div>
                    <p className='ms-3 text-start text-white mt-2 mb-0'>
                        {props.profiles.phone}
                    </p>
                    <p className='ms-3 text-start text-white'>
                        {props.profiles.email}
                    </p>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    );
};
