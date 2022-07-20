import "./style/App.css";
import { Profile } from "./components/Profile";
import { RecentWork } from "./components/RecentWork";
import { useState } from "react";
import { Line } from "./components/Line";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
    const [profiles, setProfiles] = useState({
        name: "Alfian Luthfi",
        about: "Hii, I'm a fullstack web developer who Passionate about developing an awesome web app",
        about2: "I've been in this industry for more than 1 year. I love to create a web app that make people work easier than ever.",
        phone: " (+62) 815-6532-654",
        email: "alfiankurniawan85@gmail.com",
        photo: "/assets/images/alfi.png",
    });

    return (
        <div className='bg-dark'>
            <Profile profiles={profiles} />
            <Line />
            <RecentWork />
            <Line />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
