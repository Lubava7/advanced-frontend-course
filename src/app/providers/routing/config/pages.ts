import { lazy } from "react";

export const MainAsyncPage = lazy(() => import("pages/mainPage/ui/Main"));
export const AboutAsyncPage = lazy(() => import("pages/aboutPage/ui/About"));
