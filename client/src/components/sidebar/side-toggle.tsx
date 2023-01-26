import { useTheme } from '@hooks/theme-context';
// import Toogle from '@src/components/ui/Toggle';
import Toggle from '@components/ui/Toggle'
export default function DarkModeToggle() {
  const { dark, changeDarkMode } = useTheme();
  return <Toggle checked={dark} onChange={changeDarkMode} />;
}
