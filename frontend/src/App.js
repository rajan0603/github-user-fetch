import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import RepositoryListPage from './components/RepositoryListPage/RepositoryListPage';
import RepositoryDetailsPage from './components/RepositoryDetailsPage/RepositoryDetailsPage';
import FollowersPage  from "./components/FollowersPage/FollowersPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = "/" Component = {HomePage}></Route>
          <Route path = "/repositories/:username" Component = {RepositoryListPage} ></Route>
          <Route path = "/repositories/:username/:repoName" Component = {RepositoryDetailsPage}></Route>
          <Route path="/followers/:username" element={<FollowersPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
