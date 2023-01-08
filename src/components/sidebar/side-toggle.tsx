import { useTheme } from "@hooks/theme-context";
import Toogle from "@ui/Toggle";

export default function DarkModeToggle() {
  const { dark, changeDarkMode } = useTheme();
  return (
    <Toogle checked={dark} onChange={changeDarkMode} /> 
  )
}
