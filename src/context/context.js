import React, { useState, useEffect } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
  return <GithubContext.Provider value={{greeting: "Hello Context"}}>
    {children}
  </GithubContext.Provider>
}

const useGithubContext = () => {
  return React.useContext(GithubContext);
}

export {GithubProvider, useGithubContext}