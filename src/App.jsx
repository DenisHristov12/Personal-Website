import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';

import { Toaster } from 'react-hot-toast';
import AnimatedRoutes from './utils/Routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedRoutes />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
