import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Components/Route/Route';



function App() {
  return (
    <div className="backgroundImageSeter">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
