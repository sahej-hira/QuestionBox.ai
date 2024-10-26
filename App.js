import React from "react";
import "./App.css";
import Layout from "./components/Layout"; // Import the Layout component
import Dashboard from "./pages/Dashboard";
import QuestionsPage from "./pages/QuestionsPaper";
import AssessmentActivitiesPage from "./pages/AssignmentActivities";
import AboutUsPage from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route
            path="/assessment-activities"
            element={<AssessmentActivitiesPage />}
          />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
