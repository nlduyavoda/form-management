import "./menu.scss";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import Option from "./option";
import { useRef, useState } from "react";
import { toggleModal } from "./toggleModal";

type OptionColors = {
  primary: string;
};

type OptionsType = {
  label: string;
  options: any;
  optionColors: OptionColors;
};

const Options = ({ label, options, optionColors, ...props }: OptionsType) => {
  const modalRef = useRef(null);
  const [isShow, setShow] = useState(false);

  const handleToggle = () => {
    toggleModal(modalRef, isShow);
    setShow(!isShow);
  };

  return (
    <div className="modal">
      <div
        className="header"
        style={{ backgroundColor: `${optionColors.primary}` }}
      >
        <div>{label}</div>
        <div onClick={handleToggle}>
          <div className={`headerIcon ${isShow && "showIcon"}`}>
            <MinusIcon />
          </div>
          <div className={`headerIcon ${!isShow && "showIcon"}`}>
            <PlusIcon />
          </div>
        </div>
      </div>

      <div className="container" ref={modalRef}>
        {options.map((opt: any) => (
          <Option
            {...props}
            id={opt.id}
            name={opt.name}
            checkColor={optionColors.primary}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
