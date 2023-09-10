import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../../routing/config";

const AppRouter = () => {
  return (
    <Suspense fallback={<p>... Loading</p>}>
      <Routes>
        {PrivateRoutes.map((el) => (
          <Route path={el.path} element={<el.component />} key={el.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
