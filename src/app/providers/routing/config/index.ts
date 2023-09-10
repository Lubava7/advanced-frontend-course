import { MainAsyncPath, AboutAsyncPath } from "./paths";

import { MainAsyncPage, AboutAsyncPage } from "./pages";
import { LazyExoticComponent, ReactElement } from "react";

interface PrivateRoute {
  path: string;
  component: LazyExoticComponent<any>;
}

export const PrivateRoutes: PrivateRoute[] = [
  {
    path: MainAsyncPath,
    component: MainAsyncPage,
  },
  {
    path: AboutAsyncPath,
    component: AboutAsyncPage,
  },
];
