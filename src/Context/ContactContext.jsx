import { Children, createContext, useState } from "react";

export const ContactContext = createContext();

export const ContctProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  return (
    <ContactContext.Provider value={{ data, setData }}>
      {children}
    </ContactContext.Provider>
  );
};
