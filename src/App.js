import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Adquire silenciosamente um token de acesso que é anexado a uma solicitação de dados do Microsoft Graph
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Seja bem-vindo(a) {name}</h5>
            {graphData ?
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Obter informações de perfil</Button>
            }
        </>
    );
};

function App() {
    return (
        <PageLayout>
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>Você não está conectado! Por favor, autentique-se.</p>
            </UnauthenticatedTemplate>
        </PageLayout>
    );
}

export default App;