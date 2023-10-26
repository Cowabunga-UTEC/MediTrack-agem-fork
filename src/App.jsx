import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/DashboardPage";
import NavigationBar from "./layout/NavigationBar";
import PermissionsGate from "./permission/PermissionGate";
import { SCOPES } from "./permission/PermissionMaps";
import PageEquipo from "./pages/PageEquipo";
import PageUsuario from "./pages/PageUsuario";
import PageTicket from "./pages/PageTicket";
import PageMantenimiento from "./pages/PageMantenimiento";
import PageProfile from "./pages/PageProfile";
import PageLanding from "./pages/PageLanding";
import LoginPage from "./pages/LoginPage";
import React from 'react';

export default function App() {
  //const { isAuthenticated } = useAuth0();
  const { isAuthenticated } = true;

  return (
    <>
      {!isAuthenticated ? (
        //<PageLanding></PageLanding>
        <LoginPage></LoginPage>
      ) : (
        <NavigationBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <>
              <Route
                path="/profile"
                element={
                  <PageProfile />
                }
              />
              <Route
                path="/dashboard"
                element={
                  <Dashboard />
                }
              />
              <Route
                path="/equipo"
                element={
                  <PageEquipo />
                }
              />
              <Route
                path="/usuario"
                element={
                  <PageUsuario />
                }
              />
              <Route
                path="/ticket"
                element={
                  <PageTicket />
                }
              />
              <Route
                path="/mantenimiento"
                element={
                  <PageMantenimiento />
                }
              />
            </>
          </Routes>
        </NavigationBar>
      )}
    </>
  );
}
