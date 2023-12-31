// localStorageUtils.js
export const saveDataToLocalStorage = (data, type) => {
  const storedData = JSON.parse(localStorage.getItem('patients')) || [];

  // Adicione uma propriedade type para distinguir entre dados de basicInformation e contact
  const patientData = { type, ...data };

  storedData.push(patientData);
  localStorage.setItem('patients', JSON.stringify(storedData));
};
