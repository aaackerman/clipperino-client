import React from 'react';
import Profile from 'views/examples/Profile.js';
import Tables from 'views/examples/Tables.js';
import Icons from 'views/examples/Icons.js';
import Clips from 'views/examples/Clips.js';

var routes = [
  {
    path: '/clips',
    name: 'Clips',
    icon: 'ni ni-tv-2 text-primary',
    component: Clips
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: Icons
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Tables
  }
];

export default routes;
