import { FC } from "react";
import "./ArrowButton.scss";

type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
  dir: string;
};
export const ArrowButton: FC<ArrowButtonProps> = ({
  onClick,
  disabled,
  dir = "right",
}) => {
  return (
    <button
      onClick={onClick}
      className={`arrow-main arrow-main_dir_${dir} ${
        disabled && "arrow-main_disabled"
      }`}
      disabled={disabled}
    />
  );
};
