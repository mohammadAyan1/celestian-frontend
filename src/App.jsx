
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage1 from './components/Homepage1';
import Homepage2 from './components/Homepage2';
import Homepage3 from './components/Homepage3';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('hotel');

  const renderHomepage = () => {
    switch (activeTab) {
      case 'hotel':
        return <Homepage1 />;
      case 'flight':
        return <Homepage2 />;
      case 'tour':
        return <Homepage3 />;
      case 'cab':
        return <Homepage1 />; // Using Homepage1 as placeholder for cab
      default:
        return <Homepage1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderHomepage()}
      <Footer />
    </div>
  );
}

export default App
