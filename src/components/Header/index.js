import * as React from 'react';
import { Link } from 'react-router-dom';

// Component Import
import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Button, Divider }  from '@mui/material';

// Icon Import
import { RiMenuFoldFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { SiAiohttp } from "react-icons/si";
import { MdOutlineNotificationsActive} from "react-icons/md";
import { Settings, Logout } from '@mui/icons-material';


// Assets Import
import logo from '../../assets/images/logo.webp';

// Component Import
import SearchBox from '../Searchbox/index';


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpenNotificationsDrop, setisOpenNotificationsDrop] = React.useState(null);
  const openAccount = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationsDrop);

  const handleOpenAccountDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccountDrop = () => {
    setAnchorEl(null);
  };
  const handleOpenNotificationsDrop = (event) => {
    setisOpenNotificationsDrop(true);
  };

  const handleCloseNotificationsDrop = (event) => {
    setisOpenNotificationsDrop(false);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          {/* Logo */}
          <div className="col-sm-2 d-flex align-items-center logo-wrapper">
            <Link to="/" className="d-flex align-items-center justify-content-center logo">
              <img src={logo} alt="Company Logo" />
              <span className="ml-2">Tryton.id</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="col-sm-3 d-flex align-items-center menu-wrapper pl-4">
            <Button className="rounded-circle"><RiMenuFoldFill/></Button>
            <SearchBox/>
          </div>

          <div className="col-sm-7 d-flex align-content-center justify-content-end menu-items-wrapper">
            <Button className="rounded-circle mr-3"><CgDarkMode/></Button>
            <Button className="rounded-circle mr-3"><SiAiohttp/></Button>

            {/* Notification */}
            <div className="notification-wrapper position-relative">
              <Button className="rounded-circle mr-3"
                onClick={handleOpenNotificationsDrop}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openNotifications ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openNotifications ? 'true' : undefined}
              ><MdOutlineNotificationsActive/></Button>
              <Menu
                  anchorEl={isOpenNotificationsDrop}
                  className="notifications dropdown-list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleCloseNotificationsDrop}
                  onClick={handleCloseNotificationsDrop}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <div className='notification-header ps-3 pb-0'>
                    <h4>Notifications (34)</h4>
                  </div>

                  <Divider sx={{ height: 1, backgroundColor: 'black' }} />

                    <div className='scroll'>

                      <div className='d-flex w-100'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                      <div className='d-flex'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                      <div className='d-flex'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                      <div className='d-flex'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                      <div className='d-flex'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                      <div className='d-flex'>
                        <div className='notification-info'>
                          <h4>
                            <span>
                              <b>Name</b>
                              <br/>
                              Added to his favorites List
                              <br/>
                              <b>Leather Belt steve Madden</b>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <Divider sx={{ height: 1, backgroundColor: 'black'}} />

                    </div>

              </Menu>
            </div>
              {/* End Notification */}

            {/* Profile */}
            <div className="profile-wrapper">
              <Button className="profile d-flex align-items-center"
                onClick={handleOpenAccountDrop}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openAccount ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAccount ? 'true' : undefined}
              >
                <div className="profile-image">
                  <span className="rounded-circle">
                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar"/>
                  </span>
                </div>
                <div className="profile-name">
                  <h4>Jhon Doe</h4>
                  <p>@jhondoe1997</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                classname="accountdrop"
                id="accountdrop"
                open={openAccount}
                onClose={handleCloseAccountDrop}
                onClick={handleCloseAccountDrop}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleCloseAccountDrop}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleCloseAccountDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          {/* End Prodile */}

          </div>
        </div>
      </div>
    </header>
  );
}