import '../styles/components/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopSection from './TopSection/TopSection';
import HomesGuestLoves from './HomesGuestLoves/HomesGuestLoves';
import AvailHotelCard from './AvailableHotels/AvailHotelCard';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SignIn from './SignIn_SignOut/SignIn';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hotels" component={HomePage} />
          <Route exact path="/hotels/:id" component={AvailHotelCard} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

function HomePage() {
  return (
    <>
      <TopSection className="intro" />
      <HomesGuestLoves className="homes-guests-loves" />
    </>
  );
}

export default App;
