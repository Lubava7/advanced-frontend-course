import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";

interface NavbarProps {
  classname?: string;
}

export const Navbar: FC<NavbarProps> = ({ classname }) => {
  return (
    <div className={classNames(cls.navbar, {}, [classname])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        About
      </AppLink>
    </div>
  );
};
