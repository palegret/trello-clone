import AppState from "./AppState";

const apiUrl = process.env.REACT_APP_BACKEND_ENDPOINT;

export const save = (payload: AppState) => {
  return fetch(`${apiUrl}/save`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const load = () => {
  return fetch(`${apiUrl}/load`)
    .then((response) => {
      return response.json() as Promise<AppState>;
    });
};
