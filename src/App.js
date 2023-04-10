
import Footer from './Componenet/layout/Footer';
import Header from './Componenet/layout/Header';
import Login from './Componenet/auth/Login';
import Signup from './Componenet/auth/Signup';
import Profile from './Componenet/auth/Profile';
import Info from './Componenet/auth/Info';
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
                <Route path='/history' element={<Login />} />
                <Route path='/my_address' element={<Login />} />
                <Route path='/history' element={<Login />} />
                <Route path='/history' element={<Login />} />
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
