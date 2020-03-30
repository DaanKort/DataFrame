const baseUrl = 'https://api.warframestat.us/';
export const api = async(endpoint: string): Promise<any> => {
  try {
    const response = await fetch(baseUrl + endpoint);
    return response.json()
  } catch (e) {
    console.log(e)
  }
};
