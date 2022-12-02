import './Dashboard.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Menu />
      <div className='dashboard-container'>
        <Header />
        <hr className='hr-separator' />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
