import { Outlet, useOutlet } from "react-router-dom";
import './App.css';
import Aside from './components/Aside/Aside';
import UserIcon from './images/Dorothy.jpg'
import News from "./pages/News";

const App = () => {

  const user = {
    firstName: 'Dorothy',
    lastName: 'Kovalsky Parker',
    photo: UserIcon,
    role: 'Pet Owner',
    isActive: true
  };

  const outlet = useOutlet();

  return (
    <div className='flex '>
      <Aside user={user} />
      <div>{outlet || <News />}</div>
    </div>
  );
};

export default App;
