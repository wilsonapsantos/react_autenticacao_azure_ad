export const msalConfig = {
  auth: {
    clientId: "e1025b73-b170-4465-83de-ff1ac12173ad",
    authority: "https://login.microsoftonline.com/bb24ffdd-87d9-46b8-9d3f-d8bf25bd0ef1", // Este é um URL (por exemplo, https://login.microsoftonline.com/{seu ID de locatário})
    redirectUri: "http://localhost:3001/",
  },
  cache: {
    cacheLocation: "sessionStorage", // Isso configura onde seu cache será armazenado
    storeAuthStateInCookie: false, // Defina isso como "true" se você estiver tendo problemas no IE11 ou Edge
  }
};

// Adicione escopos aqui para que o token de ID seja usado nos pontos de extremidade da plataforma de identidade da Microsoft.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Adicione os pontos de extremidade aqui para os serviços da API do Microsoft Graph que você gostaria de usar.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};