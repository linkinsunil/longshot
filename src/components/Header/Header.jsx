import './Header.css';
import usa from '../../images/united-states-of-america.svg';

const Header = () => {
  return (
    <div className='header'>
      <p className='explorer'>
        <span className='secondary'>Keyword Explorer{'>'}</span> Keyword
        Overview
      </p>
      <p className='keyword'>
        Keyword: <span className='secondary'>shopping in barcelona</span>
      </p>
      <p className='database'>
        <span className='secondary'>Database: United States</span>
        <img className='dbImg' src={usa} alt='database' />
      </p>
    </div>
  );
};

export default Header;
