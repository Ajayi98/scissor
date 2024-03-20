

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InputForm from './components/InputForm';

function App() {
    const handleSubmit = (url: string) => {
        
        console.log("Shortened URL:", url);
    };

    return (
        <>
            <Navbar />
            
                <HeroSection />
            
            <div>
                <InputForm onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default App;
