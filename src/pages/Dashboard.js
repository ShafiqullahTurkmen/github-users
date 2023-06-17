import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { useGithubContext } from '../context/context';
const Dashboard = () => {
  const { greeting } = useGithubContext();
  return (
    <main>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
      <h1>{greeting}</h1>
    </main>
  );
};

export default Dashboard;
