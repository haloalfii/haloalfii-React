import { useState } from "react";

export const RecentWork = () => {
    const [works, setWorks] = useState([
        {
            title: "Worxspace",
            link: "http://worxspace.id",
            image: "/assets/images/worxspace.png",
            detail: "Worxspace is next level company instanst messaging by PT Gamatechno Indonesia, this apps is a solution to many problems in office. This apps include Chat Engine, Task management, etc",
            id: 1,
        },
        {
            title: "Dunia Coding",
            link: "http://duniacoding.site",
            image: "/assets/images/dc.png",
            detail: "Dunia Coding Website apps is a web app that provides many conveniences to Dunia Coding itself. This web app contains Event Management, Partner Management, and Online Course",
            id: 2,
        },
        {
            title: "Sitasi",
            link: "http://stunting.xpgeosite.com/login",
            image: "/assets/images/sitasi.png",
            detail: "Sitasi (Sistem Informasi Pendataan Stunting), is a web apps to manage data of stunting chilid in Gunung Kidul",
            id: 3,
        },
    ]);

    return (
        <div>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <ol className='list-group list-group-numbered'>
                        {works.map((work) => (
                            <li className='list-group-item bg-transparent text-white d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className=''>
                                        <div className=''>
                                            <h5>
                                                <a
                                                    target='_blank'
                                                    href={work.link}
                                                    className='text-white text-decoration-none'>
                                                    {work.title}
                                                </a>
                                            </h5>
                                        </div>
                                        <img
                                            src={work.image}
                                            className='rounded mt-3 shadow-lg img-fluid'
                                            alt=''
                                            srcSet=''></img>
                                        <p className='text-start text-white mt-2'>
                                            {work.detail}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
