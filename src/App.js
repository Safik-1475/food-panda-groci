import Navbar from "./components/Navbar";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Navbar>
      <Routes>
        {/* PUBLIC ROUTES */}
        {
          PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))
        }
      </Routes>
    </Navbar>
  );
}

export default App;
