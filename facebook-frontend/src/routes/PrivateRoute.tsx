
import { Component } from "react";
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "~/contexts/AuthContext"

export default function PrivateRoute({ children }:any) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

