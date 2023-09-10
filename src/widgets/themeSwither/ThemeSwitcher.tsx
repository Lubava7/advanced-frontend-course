import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";

interface Props {
  classname?: string;
}

export const ThemeSwitcher: FC<Props> = ({ classname }) => {
  return <div className={classNames(cls.ThemeSwitcher, {}, [classname])}></div>;
};
