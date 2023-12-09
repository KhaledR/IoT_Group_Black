import './App.css';

import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  const appStyle = {
    backgroundImage: 'url("../public/Picture1.png")',
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    // Add other styles as needed
  };
  
  return (
    <div style={appStyle}>
    <Header />
    
    <Footer />

   </div>
   
  );
}

export default App;
