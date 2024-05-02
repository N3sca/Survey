import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from './NotFoundPage.jsx';
import App from './App.jsx';

import CLSuervey from './components/survey/CLSuervey.jsx'
import LHSurvey from './components/survey/LHSurvey.jsx'
import CSSurvey from './components/survey/CSSurvey.jsx'
import MVSurvey from './components/survey/MVSurvey.jsx'
import SurveyMain from './components/survey/survey-main.jsx'

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children : [
      {
        path: '/',
        element: <SurveyMain />,
      },
      {
        path: 'lh',
        element: <LHSurvey />,
      },
      {
        path: '/cl',
        element: <CLSuervey />,
      },
      {
        path: '/cs',
        element: <CSSurvey />,
      },
      {
        path: '/mv',
        element: <MVSurvey />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
