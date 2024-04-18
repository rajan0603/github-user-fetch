import React from "react";
import './App.css';
import {BrouserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import RepositoryListPage from './components/RepositoryListPage/RepositoryListPage';
import RepositoryDetailsPage from './components/RepositoryDetailsPage/RepositoryDetailsPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {HomePage}></Route>
          <Route path = "/repositories/:username" element = {RepositoryListPage} ></Route>
          <Route path = "/repositories/:username/:repoName" element = {RepositoryDetailsPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
