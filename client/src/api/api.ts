export const getFrames = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/warframes')
    const frames = response.json();
    return frames;
  } catch (e) {
    console.log(e)
  }
}

export const getWeapons = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/weapons')
    const weapons = response.json();
    return weapons;
  } catch (e) {
    console.log(e)
  }
}

export const getNews = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/news')
    const news = response.json();
    return news;
  } catch (e) {
    console.log(e)
  }
}

export const getItems = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/items')
    const items = response.json();
    return items;
  } catch (e) {
    console.log(e)
  }
}

export const getCetusCycle = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/cetusCycle')
    const cetusCycle = response.json();
    return cetusCycle;
  } catch (e) {
    console.log(e)
  }
}

export const getVallisCycle = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/vallisCycle')
    const vallisCycle = response.json();
    return vallisCycle;
  } catch (e) {
    console.log(e)
  }
}


export const getAlerts = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/alerts')
    const alerts = response.json();
    return alerts;
  } catch (e) {
    console.log(e)
  }
}


export const getEvents = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/events')
    const events = response.json();
    return events;
  } catch (e) {
    console.log(e)
  }
}

export const getDailyDeals = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/dailyDeals')
    const deals = response.json();
    return deals;
  } catch (e) {
    console.log(e)
  }
}

export const getSorties = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/sortie')
    const sorties = response.json();
    return sorties;
  } catch (e) {
    console.log(e)
  }
}

export const getFissures = async () => {
  try {
    const response = await fetch('https://api.warframestat.us/pc/fissures')
    const fissures = response.json();
    return fissures;
  } catch (e) {
    console.log(e)
  }
}