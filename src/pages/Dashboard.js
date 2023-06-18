import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import { useGithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';
const Dashboard = () => {
  const { loading } = useGithubContext();
  if (loading) return (
    <main>
      <Navbar />
      <Search />
      <img src={loadingImage} alt="loading" className='loading-img' />
    </main>
  )

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
