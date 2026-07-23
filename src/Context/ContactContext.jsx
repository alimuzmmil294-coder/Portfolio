import { Children, createContext, useState } from "react";

export const ContactContext = createContext();

export const ContctProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <ContactContext.Provider value={{ count, setCount }}>
      {children}
    </ContactContext.Provider>
  );
};
