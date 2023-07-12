// import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ListRepos from './pages/ListRepos';
import TopBar from './Components/Topbar.js';

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/list-repos",
//     element: <ListRepos items={items} />,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/list-repos" element={<ListRepos items={items}/>} />
      </Routes>
    </Router>
  </>
  // </React.StrictMode>,
)
