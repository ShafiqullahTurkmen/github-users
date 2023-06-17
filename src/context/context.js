import React, { useState, useEffect } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return <GithubContext.Provider value={{githubUser, repos, followers}}>
    {children}
  </GithubContext.Provider>
}

const useGithubContext = () => {
  return React.useContext(GithubContext);
}

export {GithubProvider, useGithubContext}