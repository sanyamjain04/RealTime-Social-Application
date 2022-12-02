
interface ToggleProps {
    checked?: boolean
    onChange: () => void;
}

export default function Toggle({checked, onChange}:ToggleProps):JSX.Element {
    
  return (
    <label className="inline-flex relative cursor-pointer items-center" htmlFor="toggle-check" aria-labelledby="toggle-check">
        <input type="checkbox" className="sr-only peer" onChange={onChange} checked={checked} id="toggle-check" />
        <div className="w-10 h-5 dark:bg-gray-700 bg-gray-400 rounded-full after:content-[''] after:w-[18px] after:h-4 after:bg-white after:rounded-full after:absolute after:top-0.5 after:transition-all peer-checked:after:translate-x-full after:left-1 peer-checked:bg-blue-600 peer-checked:after:left-[2px]" />
    </label>
  );
}
