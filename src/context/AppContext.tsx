import { createContext, useContext } from 'react';

export interface AppProps {
  companyName: string;
  country: string;
}

export const AppContext = createContext<AppProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppContext.Provider");
  return context;
}