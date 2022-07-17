import React from "react";

export const Footer = () => {
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2'>
                    <hr className='border-light border-3 opacity-75'></hr>
                </div>
                <div className='col-lg-2'>
                    <p className='text-center text-white mt-1'>
                        Made With{" "}
                        <i className='bi bi-heart-fill text-danger'></i> by
                        <a
                            href='https://github.com/haloalfii'
                            className='text-white text-decoration-none'>
                            @haloalfii
                        </a>
                    </p>
                </div>
                <div className='col-lg-2'>
                    <hr className='border-light border-3 opacity-75'></hr>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    );
};
