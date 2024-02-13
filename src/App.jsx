import './App.css';
import Aside from './components/Aside/Aside';
import UserIcon from './images/Dorothy.jpg'

const App = () => {

  const user = {
    firstName: 'Dorothy',
    lastName: 'Kovalsky Parker',
    photo: UserIcon,
    role: 'Pet Owner',
    isActive: true
  }

  return (
    <div className='flex '>
      <Aside user={user} />
    </div>
  );
};

export default App;
