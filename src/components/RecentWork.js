import { useState } from "react";

export const RecentWork = () => {
    const [works, setWorks] = useState([
        {
            title: "Niaga Hoster",
            body: "lorem ipsum...",
            id: 1,
        },
        {
            title: "Dunia Coding!",
            body: "lorem ipsum...",
            id: 2,
        },
        {
            title: "Web dev top tips",
            body: "lorem ipsum...",
            id: 3,
        },
    ]);

    return (
        <div>
            {works.map((work) => (
                <div key={work.id}>
                    <h2>{work.title}</h2>
                    <p>{work.body}</p>
                </div>
            ))}
        </div>
    );
};
