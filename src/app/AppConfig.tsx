import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { App } from "./App";
import "@vkontakte/vkui/dist/vkui.css";
import ErrorBoundary from "./ErrorBoundary";

export const AppConfig = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
