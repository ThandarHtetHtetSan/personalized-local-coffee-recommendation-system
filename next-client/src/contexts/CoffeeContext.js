import { createContext, useContext, useState } from 'react';

const CoffeeContext = createContext();

export const useCoffee = () => useContext(CoffeeContext);

export const CoffeeProvider = ({ children, initialCoffeeList = [] }) => {
  const [coffeeList, setCoffeeList] = useState(initialCoffeeList);
  return (
    <CoffeeContext.Provider value={{ coffeeList, setCoffeeList }}>
      {children}
    </CoffeeContext.Provider>
  );
};