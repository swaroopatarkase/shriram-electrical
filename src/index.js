import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './Home/Home';
import About from './About/About';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path:"/about",
    element:<About />,
  }
])
root.render(<RouterProvider router={router}/>);