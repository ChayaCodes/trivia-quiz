import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/HomePage/HomePage";
import Login from "./pages/LoginForm/LoginForm";
import Register from "./pages/RegisterForm/RegisterForm";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import QuizPage from "./pages/QuizPage/QuizPage";
import Quizzes from "./pages/Quizzes/Quizzes";
// import Container from "./components/Container/Container";
import LeaderPlayers from './pages/LeaderPlayer/LeaderPlayer';
import Layout from "./components/Layout/Layout";
import ListOfPlayers from "./pages/ListOfPlayers/ListOfPlayers";

function App() {
  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/create-quiz" element={<CreateQuiz />} />
    //       <Route path="/quiz/:quizId" element={<QuizPage />} /> 
    //       <Route path="/quizzes" element={<Quizzes />} />
    //       <Route path="/leader-player" element={<LeaderPlayers />} />
    //     </Routes>
    //   </Layout>
    // </Router>
    <ListOfPlayers/>
  );
}

export default App;