// DataContext.js
import React, { createContext, useState } from 'react';
const initialData = {
  users: [
    { id: 1, name: 'John Doe', createdDate: '1-11-2023', dateOfBirth: '1998-10-8', phoneNumber: '9796565131', password: 'fdasdf', gender: 'male', email: 'john@example.com' },
    { id: 2, name: 'Soham More', createdDate: '2-11-2023', dateOfBirth: '2001-01-7', phoneNumber: '9795544155', password: 'fdasdf', gender: 'male', email: 'soham@example.com' },
    { id: 3, name: 'Ana Dsouja', createdDate: '3-11-2023', dateOfBirth: '2000-11-11', phoneNumber: '7489562177', password: 'fdasdf', gender: 'female', email: 'ana@example.com' },
    { id: 4, name: 'Ashish Bhagwat', createdDate: '4-11-2023', dateOfBirth: '2000-11-27', phoneNumber: '84569621', password: 'fdasdf', gender: 'male', email: 'ashish@example.com' },
    { id: 5, name: 'Emily Johnson', createdDate: '5-11-2023', dateOfBirth: '1995-09-15', phoneNumber: '7345612897', password: 'fjds673', gender: 'female', email: 'emily@example.com' },
    { id: 6, name: 'David Smith', createdDate: '6-11-2023', dateOfBirth: '1988-04-30', phoneNumber: '8765412345', password: 'kfgs578', gender: 'male', email: 'david@example.com' },
    { id: 7, name: 'Sophie Williams', createdDate: '7-11-2023', dateOfBirth: '2002-12-05', phoneNumber: '9658741236', password: 'dfhg852', gender: 'female', email: 'sophie@example.com' },
    { id: 8, name: 'Chris Brown', createdDate: '8-11-2023', dateOfBirth: '1999-07-20', phoneNumber: '6897451230', password: 'bgkf963', gender: 'male', email: 'chris@example.com' },
  ],
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${day}-${month}-${year}`;
  }
  const addUser = (newUserData) => {
    const newId = data.users.length + 1; // Generate an ID
    const newUser = { id: newId,createdDate:formatDate(new Date()), ...newUserData };
    setData({ ...data, users: [...data.users, newUser] });
  };
  console.log(data.users.length)
  return (
    <DataContext.Provider value={{ data, addUser,setData}}>
      {children}
    </DataContext.Provider>
  );
};
