import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Accent, Theme } from "../lib/types/theme";

type ThemeContext = {
  dark: boolean;
  accent: Accent;
  changeDarkMode: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  changeAccent: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

function setInitialTheme(): boolean {
  if (typeof window === "undefined") return true;

  const savedTheme = JSON.parse(localStorage.getItem("dark") as string );
  if(savedTheme) return savedTheme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark;
}

function setInitialAccent(): Accent {
  if (typeof window === "undefined") return "blue";

  const savedAccent = localStorage.getItem("accent") as Accent | null;

  return savedAccent ?? "blue";
}

export function ThemeContextProvider({
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [dark, setDark] = useState<boolean>(setInitialTheme);
  const [accent, setAccent] = useState<Accent>(setInitialAccent);

  useEffect(() => {
    const flipDarkMode = (dark: boolean) => {
      const root = document.documentElement;

      if (dark === true) root.classList.add("dark");
      else root.classList.remove("dark");

      localStorage.setItem("dark", dark.toString());
    };
    flipDarkMode(dark)
    return () => flipDarkMode(dark);
  }, [dark]);

  useEffect(() => {
    const flipAccent = (accent: Accent) => {
      const root = document.documentElement;

      root.style.setProperty("--main-accent", `var(--accent-${accent})`);

      localStorage.setItem("accent", accent);
    };
    return () => flipAccent(accent);
  }, [accent]);

  const changeDarkMode = (): void => {
    setDark((curr)=> !curr)
  };
  const changeAccent = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setAccent(value as Accent);

  const value = {
    dark,
    accent,
    changeAccent,
    changeDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used within an ThemeContextProvider");
  return context;
}
