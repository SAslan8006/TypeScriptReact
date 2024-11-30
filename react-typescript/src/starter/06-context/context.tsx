import { useState, createContext, useContext } from "react";

const ThemeProviderContext = createContext<string | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("light");
  return (
    <ThemeProviderContext.Provider value="naaaa">
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
