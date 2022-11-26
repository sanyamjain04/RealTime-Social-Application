import { Switch } from "@mui/material";
import { useTheme } from "../../hooks/theme-context";

const SideAvator = () => {
  const { dark, changeDarkMode } = useTheme();

  return (
    <>
      <Switch className="" checked={dark} onChange={changeDarkMode} />
    </>
  );
};

export default SideAvator;
