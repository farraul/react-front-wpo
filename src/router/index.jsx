/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import { Layout, ProtectedRoutes } from '@/components';
import {
  ErrorPage,
  HomePage,
  LoginPage,
  RegisterPage,
  DashboardPage,
} from '@/pages';
import { HomeWpo } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/register',
            element: <RegisterPage />,
          },
          {
            path: '/dashboard',
            element: (
              <ProtectedRoutes>
                <DashboardPage />
              </ProtectedRoutes>
            ),
          },
          {
            path: '/homewpo',
            element: (
              <ProtectedRoutes>
                <HomeWpo />
              </ProtectedRoutes>

            ),
          },
        ],
      },
    ],
  },
]);
