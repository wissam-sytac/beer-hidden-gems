import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/styles/theme";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./shared/styles/global.css";

async function enableMocking() {
  if (process.env.REACT_APP_MSW !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>,
  );
});
