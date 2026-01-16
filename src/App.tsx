import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AeroChain from './pages/AeroChain';
import CustomDev from './pages/CustomDev';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import News from './pages/News';
import Partners from './pages/Partners';
import Fundraising from './pages/Fundraising';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aerochain" element={<AeroChain />} />
          <Route path="/custom-dev" element={<CustomDev />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/fundraising" element={<Fundraising />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
