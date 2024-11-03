import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { SignInScreen, SignUpScreen, LibraryScreen } from '@/screens'

const AppRoutes = () => {
  const isAuthenticated = true

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
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SignInScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/cadastrar"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SignUpScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/biblioteca"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <LibraryScreen />
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
    return <Navigate to="/" replace />
  }

  return children
}

const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return children
}
