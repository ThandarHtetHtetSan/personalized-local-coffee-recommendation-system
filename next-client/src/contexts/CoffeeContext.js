import { createContext, useContext, useState } from 'react';

const CoffeeContext = createContext();

export const useCoffee = () => useContext(CoffeeContext);

export const CoffeeProvider = ({ children, initialCoffeeList = [] }) => {
  const [coffeeList, setCoffeeList] = useState(initialCoffeeList);
  const [filters, setFilters] = useState({
    roast: '',
    fragrance: '',
    groundtype: '',
    body: '',
    flavor: ''
  });

  return (
    <CoffeeContext.Provider value={{ coffeeList, setCoffeeList, filters, setFilters }}>
      {children}
    </CoffeeContext.Provider>
  );
};