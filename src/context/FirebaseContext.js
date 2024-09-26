import React, { createContext, useContext } from 'react';
import { app } from '../firebaseConfig'; // Ajusta la ruta según la ubicación de tu archivo firebaseConfig.js
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const firebase = {
    firestore,
    auth,
  };

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
