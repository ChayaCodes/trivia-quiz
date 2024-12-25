import "./App.css";
import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/LoginForm/LoginForm";
import Register from "./pages/RegisterForm/RegisterForm";
import QuizPage from "./pages/QuizPage/QuizPage";
import Quizzes from "./pages/Quizzes/Quizzes";
import Container from "./components/Container/Container";
import UpdateQuiz from "./components/UpdateQuiz/UpdateQuiz";
import CreateQuizR from "./components/CreateQuiz/CreateQuizR";

function App() {
  const [userName, setUserName] = useState(null);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home userName={userName} setUserName={setUserName} />} />
          <Route path="/login" element={<Login setUserName={setUserName} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-quiz" element={<CreateQuizR />} />
          <Route path="/update-quiz" element={<UpdateQuiz />} />
          <Route path="/quiz" element={<QuizPage userName={userName} />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;