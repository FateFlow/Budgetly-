import './App.css';
import Header from "./components/Header";
import Tabs from './components/Tabs';
import Savings from './components/Savings';
import BottomNav from './components/BottomNav';


function App() {
    return (
        <div className="App">
            <Header />
            <Tabs />
            <Savings current={233} goal={500} />
            <BottomNav />
        </div>
        
    );
}

export default App;


