import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Test.module.scss";

interface Props {
  classname?: string;
}

export const Test: FC<Props> = ({ classname }) => {
  return (
    <div className={classNames(cls.Test, {}, [classname])}>
      type rfcc for snippet
    </div>
  );
};
