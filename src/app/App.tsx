import {
  AppRoot,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  usePlatform,
} from "@vkontakte/vkui";
import { HomePage } from "pages/home";

export const App = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <HomePage id="main" />
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
