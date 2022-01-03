import '../styles/components/App.css';
import React from 'react';
import TopSection from './TopSection/TopSection';
import HomesGuestLoves from './HomesGuestLoves/HomesGuestLoves';

function App() {
  return (
    <>
      <TopSection className="intro" />
      <HomesGuestLoves className="homes-guests-loves" />
    </>
  );
}
export default App;
