// import * as express from 'express'
// const app = express()
// app.use('/', (req: express.Request, res: express.Response) => res.send('Hello World!'))
// app.listen(3000, () => console.log("Listening"))

import React from "react";
import ReactDOM from "react-dom/client";
import "./style/test.scss";
// import "./styles.scss";

// const App = () => {
//   return <BoardView />;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>2048</h1>
  </>
);
