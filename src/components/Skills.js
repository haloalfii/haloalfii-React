import React from "react";

export const Skills = () => {
    return (
        <div>
            <h4 className='text-center text-white mt-3'>Skills</h4>

            <div className='row mt-5'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 d-flex justify-content-between'>
                    <h3 className='text-white mx-3 '>
                        <i class='bi bi-code-slash'></i>
                    </h3>
                    <h3 className='text-white mx-3 '>
                        <i class='bi bi-clipboard-data-fill'></i>
                    </h3>
                    <h3 className='text-white mx-3 '>
                        <i class='bi bi-github'></i>
                    </h3>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    );
};
