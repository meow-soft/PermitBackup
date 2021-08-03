import React from 'react';

const StoreContext = React.createContext();

export const useStore = () => React.useContext(StoreContext);

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
