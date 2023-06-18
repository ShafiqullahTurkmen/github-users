import React, { useState, useEffect } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({show: false, msg: ""});

  const toggleError = (show=false, msg="") => {
    setError({show, msg})
  }

  const searchGithubUser = async (user) => {
    toggleError()
    setLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch(e => console.log(e));
    if (response) {
      setGithubUser(response.data);
      const {login, followers_url} = response.data;
      const repoResponse = await axios(`${rootUrl}/users/${login}/repos?per_page=100`)
      setRepos(repoResponse.data)
      const followersResponse = await axios(`${followers_url}?per_page=100`);
      setFollowers(followersResponse.data)
    } else {
      toggleError(true, "there is no user with that username")
    }
    checkRequests();
    setLoading(false);
  }

  const checkRequests = async () => {
    try {
      const {data: {rate: { remaining}}} = await axios(`${rootUrl}/rate_limit`)
      setRequests(remaining)
      if (remaining === 0) {
        toggleError(true, "sorry you have exceeded your hourly rate limit!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkRequests()
  }, [])
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        searchGithubUser,
        requests,
        error,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  return React.useContext(GithubContext);
};

export { GithubProvider, useGithubContext };
