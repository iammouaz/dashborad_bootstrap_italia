import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-italia";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "Configs/queryClient";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
);
