import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import {
  SignInScreen,
  SignUpScreen,
  LibraryScreen,
  MovieScreen
} from '@/screens'

import { useAuth } from '@/contexts/AuthProvider'

const AppRoutes = () => {
  const { isUserLogged } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Navigate to="/biblioteca" />} />
        <Route path="*" element={<Navigate to="/biblioteca" />} />

        {/* =============================================================== */}

        <Route
          path="/entrar"
          element={
            <PublicRoute isAuthenticated={isUserLogged}>
              <SignInScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/cadastrar"
          element={
            <PublicRoute isAuthenticated={isUserLogged}>
              <SignUpScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/biblioteca"
          element={
            <PrivateRoute isAuthenticated={isUserLogged}>
              <LibraryScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/biblioteca/:movie_id"
          element={
            <PrivateRoute isAuthenticated={isUserLogged}>
              <MovieScreen />
            </PrivateRoute>
          }
        />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

interface RouteProps {
  isAuthenticated: boolean
  children: React.ReactNode
}

const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/entrar" replace />
  }

  return children
}

const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/biblioteca" />
  }

  return children
}
