import { FC, useRef, useState } from "react";
import "./menu.scss";
import CheckedIcon from "../icons/checkedIcon";

type OptionType = {
  id: string;
  name: string;
  checkColor?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Option: FC<OptionType> = ({ ...props }) => {
  const checkRef = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);
  const handleOnClick = (e: any) => {
    setChecked(!checked);
    return checked
      ? checkRef.current?.classList.remove("iconShow")
      : checkRef.current?.classList.add("iconShow");
  };
  return (
    <div className="item" key={props.id}>
      <div onClick={handleOnClick} className="icon" ref={checkRef}>
        <CheckedIcon />
      </div>
      <input
        {...props}
        type="checkbox"
        onClick={(e) => handleOnClick(e)}
        onChange={(e) => {
          return;
        }}
        style={{ border: `2px solid ${props.checkColor}` }}
      />
      <label>{props.name}</label>
    </div>
  );
};

export default Option;
