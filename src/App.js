import React from 'react';
import Footer from './Componenet/layout/Footer';
import Header from './Componenet/layout/Header';
import Login from './Componenet/auth/Login';
import Signup from './Componenet/auth/Signup';
import Profile from './Componenet/auth/Profile';
import Payment from './Componenet/auth/Payment';
import Order from './Componenet/auth/Oder';
import Address from './Componenet/auth/Address';
import Contact from './Componenet/auth/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Componenet/layout/Layout';


function App() {
  const [islogin, setIslogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false)
  return (
    <>
      <BrowserRouter>
        {islogin ? <>
          <div className="hero">
            <Layout setShowProfile={setShowProfile} showProfile={showProfile} />
            <main className={showProfile ? 'main-conatiner show-sidebar' : " main-conatiner"}>
              <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/history' element={<Order />} />
                <Route path='/address' element={<Address />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </main>
          </div>
        </>
          : <>
            <Header />
            <main >
              <Routes>
                console.log("props", props);
                <Route path='/' element={<Login setIslogin={setIslogin} />}> </Route>
                <Route path='/signup' element={<Signup />}> </Route>
              </Routes>
            </main>
            <Footer /></>}


      </BrowserRouter>

    </>
  );
}

export default App;
