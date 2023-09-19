import { FC } from "react";
import "./CurrentYear.scss";

type CurrentYearProps = {
  name: string;
  format: string;
  children: number;
};
export const CurrentYear: FC<CurrentYearProps> = ({
  name,
  format,
  children,
}) => {
  return (
    <span
      className={`current__year current__year-${format} current__year-${format}-${name}`}
    >
      {children}
    </span>
  );
};
