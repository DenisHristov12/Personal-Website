import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Contacts from './pages/contacts';
import Aboutme from './pages/aboutme';
import Skills from './pages/skills';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={
              <Navigate
                replace
                to="home"
              />
            }
          />
          <Route
            path="home"
            element={<Home />}
          />
          <Route
            path="contacts"
            element={<Contacts />}
          />
          <Route
            path="skills"
            element={<Skills />}
          />
          <Route
            path="about"
            element={<Aboutme />}
          />
        </Route>
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
