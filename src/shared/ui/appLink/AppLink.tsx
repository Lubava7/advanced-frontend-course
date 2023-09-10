import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  classname?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = (props) => {
  const {
    classname,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [classname, cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
