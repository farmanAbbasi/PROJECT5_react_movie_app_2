import React from 'react';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    icon: <FcIcons.FcHome />,
    cName: 'nav-text'
  },
  {
    title: 'New User',
    path: '/user',
    // icon: <IoIcons.IoIosPaper />,
    icon: <FcIcons.FcBusinessman />,
    cName: 'nav-text'
  },
  {
    title: 'Write Review',
    path: '/create',
    // icon: <FaIcons.FaCartPlus />,
    icon: <FcIcons.FcEditImage />,
    cName: 'nav-text'
  }
];
