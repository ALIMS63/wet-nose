import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
  MenuUnfoldOutlined,
  MenuOutlined,
  UserOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  SearchOutlined,
  FileAddOutlined,
  HomeOutlined,
  SettingOutlined, 
} from '@ant-design/icons';

import AnimalIcon from './AnimalIcon'

const { SubMenu } = Menu;

function Nav() {

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: '30px'
    },
    button: {
      marginRight: '50px'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    auth: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'end',
      backgroundColor: '#3a9207',
      // background: url('../App/images/leather-green.jpg'),
      color: 'white',
    },
    btns: {
      marginTop: '13px',
    },
    appName: {
      marginLeft: '30px'
    }
  }));

  const [current, setCurrent] = useState('mail')
  const [collapsed, setCollapsed] = useState(true)

  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(isAuthenticated);

  // function toggleCollapsed() {
  //   setCollapsed(!collapsed)
  // };

  // function handleClick(e) {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };


  return (
    <>
      <div style={{ width: 256 }}>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <SubMenu key="SubMenu" icon={<MenuOutlined />}>
            <SubMenu
              key="sub1"
              title='Person'
              icon={<UserOutlined />}
            >
              {!isAuthenticated &&
                <Menu.Item
                  key="5"
                  icon={<UserAddOutlined />}
                >
                  <Link to="/registration">
                    Sign Up
                </Link>
                </Menu.Item>}

              {!isAuthenticated &&
                <Menu.Item
                  key="6"
                  icon={<UserSwitchOutlined />}
                >
                  <Link to='/login'>
                    Sign In
                </Link>
                </Menu.Item>}

              {isAuthenticated &&
                <Menu.Item
                  key="7"
                  icon={<HomeOutlined />}
                >
                  <Link to='/account'>
                    Account
                </Link>
                </Menu.Item>}

              {isAuthenticated &&
                <Menu.Item
                  key="8"
                  icon={<UserSwitchOutlined />}
                >
                  <Link to='/logout'>
                    Logout
                </Link>
                </Menu.Item>}
            </SubMenu>

            <SubMenu
              key="sub2"
              title='Animal'
              icon={<AnimalIcon />}
            >
              <Menu.Item
                key="9"
                icon={<SearchOutlined />}
              >
                <Link to="/">
                  Find Your Animal
              </Link>
              </Menu.Item>
              <Menu.Item
                key="10"
                icon={<FileAddOutlined />}
              >
                <Link to="/secret">
                  Add New
              </Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </>);
}

export default Nav