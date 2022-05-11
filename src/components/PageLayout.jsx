import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renderiza o componente navbar com um botão de login se um usuário não for autenticado
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Autenticação - Azure AD</a>
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </Navbar>
            <h5><center>Seja bem vindo(a) ao a demonstração de autenticação Azure AD</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};