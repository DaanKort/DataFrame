const baseUrl = 'https://api.warframestat.us/';
export const api = async(endpoint: string): Promise<any> => {
  try {
    const response = await fetch(baseUrl + endpoint);
    const dataObj = response.json()
    return dataObj;
  } catch (e) {
    console.log(e)
  }
};
