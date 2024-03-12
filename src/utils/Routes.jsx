import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AppLayout from '../ui/AppLayout';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Aboutme from '../pages/Aboutme';
import Skills from '../pages/Skills';
import PageNotFound from '../pages/PageNotFound';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='skills' element={<Skills />} />
          <Route path='about' element={<Aboutme />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
