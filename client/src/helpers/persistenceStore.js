const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log(e)
  }
}

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

export default {
  getItem,
  setItem
}