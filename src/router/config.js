import Hello from "../component/demo01";
import Demo02 from "../component/demo02";
import Comment from "../component/demo03";
import Demo04 from "../component/demo04";
import Demo05 from "../component/demo05";
import Demo06 from "../component/demo06";
import Demo08 from "../component/demo08";
import Demo09 from "../component/demo09";
import Demo10 from "../component/demo10";

const routes = [
  { path: "/demo01", element: <Hello /> },
  { path: "/demo02", element: <Demo02 /> },
  { path: "/demo03", element: <Comment /> },
  { path: "/demo04", element: <Demo04 /> },
  { path: "/demo05", element: <Demo05 /> },
  { path: "/demo06", element: <Demo06 /> },
  { path: "/demo08", element: <Demo08 /> },
  { path: "/demo09", element: <Demo09 /> },
  { path: "/demo10", element: <Demo10 /> },
];

export default routes;
