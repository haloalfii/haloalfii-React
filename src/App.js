import "./style/App.css";
import { Profile } from "./components/Profile";
import { RecentWork } from "./components/RecentWork";

function App() {
    return (
        <div className='App'>
            <h1>Halo Dunia</h1>
            <Profile name='Luthfi' umur='20' />
            <RecentWork />
        </div>
    );
}

export default App;
