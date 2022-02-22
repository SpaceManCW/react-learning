import { Routes, Route } from "react-router-dom"; // 引入 react-router-dom
import { Suspense } from "react"; // Suspense 配合前面的 laze() 使用，不加上会报错

const RouterView = (props) => {
  let { route } = props; // 拿到index.jsx页面传过来的 路由列表
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {route.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default RouterView;
