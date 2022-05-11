import React from "react";

/**
 * Renderiza informações sobre o usuário obtidas do Microsoft Graph
 */
export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p><strong>Primeiro Nome: </strong> {props.graphData.givenName}</p>
            <p><strong>Sobrenome: </strong> {props.graphData.surname}</p>
            <p><strong>E-mail: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};