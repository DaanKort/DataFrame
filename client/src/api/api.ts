import { IUser } from "../interfaces";

const baseUrl = "https://api.warframestat.us/";
export const api = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(baseUrl + endpoint);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export async function Register(user: IUser) {
  return await fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      email: user.email,
      password: user.password,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return JSON.stringify(data);
    });
}


export async function Login(user: IUser) {
  return await fetch("http://localhost:8080/api/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return JSON.stringify(data);
    });
}