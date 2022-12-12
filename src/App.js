import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routers/Routes';

function App() {
  return (
    <div className="">
      
      <div>
        <RouterProvider router={router}> </RouterProvider>
      </div>
    </div>
  );
}

export default App;
