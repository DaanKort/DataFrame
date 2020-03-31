const baseUrl = "https://api.warframestat.us/";
export const api = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(baseUrl + endpoint);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const Login = async () => {
  try {
    // return await fetch("http://localhost:8080/api/auth/user", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: user.email,
    //     firstName: user.firstName
    //   })
    // });
  } catch (e) {
    console.log(e);
  }
};
