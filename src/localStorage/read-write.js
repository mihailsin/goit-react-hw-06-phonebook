const saveToLocalStorage = items => {
  try {
    const serializedItems = JSON.stringify(items);
    localStorage.setItem('contacts', serializedItems);
  } catch (error) {
    console.log(error.message);
  }
};

const readFromLocalStorage = () => {
  try {
    const serializedItems = JSON.parse(localStorage.getItem('contacts'));
    return serializedItems;
  } catch (error) {
    return undefined;
  }
};

export { saveToLocalStorage, readFromLocalStorage };
