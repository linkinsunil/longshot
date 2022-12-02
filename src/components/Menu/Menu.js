import './Menu.css';
import brandLogo from '../../images/icons8-menu-squared.svg';
import avatar from '../../images/avatar.svg';
import HomeIcon from '@mui/icons-material/Home';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import {
  FavoriteBorder,
  FiberNewOutlined,
  PlaylistPlayOutlined,
  WatchLaterOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return (
    <aside className='menu-container'>
      <div className='menu-wrapper'>
        <div className='menuTop'>
          <div className='logo'>
            <img className='img' alt='brand' src={brandLogo} />
            <p className='brandText'>
              <span className='brandBold'>LONG</span>SHOT
            </p>
          </div>

          <div className='currentProject'>
            Project <span className='projectTitle'>My First Project</span>
          </div>

          <div className='item'>
            <HomeIcon />
            Dashboard
          </div>

          <div className='item' onClick={() => navigate('/outlines')}>
            <HistoryOutlinedIcon />
            Outlines
          </div>

          <div className='item'>
            <PlaylistPlayOutlined />
            Recipes
          </div>

          <hr />

          <div className='item'>
            <FavoriteBorder />
            Blog
          </div>

          <div className='item'>
            <WatchLaterOutlined />
            Templates
          </div>

          <div className='item'>
            <HistoryOutlinedIcon />
            Integrations
          </div>
        </div>

        <div className='menuFooter'>
          <div className='profileDetail'>
            <div className='item'>
              <img className='profileAvatar' alt='avatar' src={avatar} />
              <div>
                <div className='profileText'>sunil.vishwakarma</div>
                <div className='profileCredits'>Credits Used: 1000</div>
              </div>
            </div>
            <button className='button'>
              <AccountCircleOutlinedIcon />
              Change Plan
            </button>
            <div className='item'>
              <FlagOutlinedIcon />
              Product Roadmap
            </div>
            <div className='item'>
              <HelpOutlineOutlinedIcon />
              What's New
            </div>
          </div>
          <div className='item'>
            <SettingsBrightnessOutlinedIcon />
            Collapse
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
