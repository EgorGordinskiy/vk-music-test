import { NavIdProps, Panel, PanelHeader } from "@vkontakte/vkui";
import icon from "assets/images/icon.svg";
import track from "assets/media/test.mp3";
import { FC } from "react";
import { AudioBlock } from "widgets/audio";
import { IAudio } from "shared/api";

const audio: IAudio = {
  author: "Исполнитель",
  title: "Трек",
  image: icon,
  audioSrc: track,
};

export interface IHomeProps extends NavIdProps {}

export const HomePage: FC<IHomeProps> = (props) => {
  const { id: paneId } = props;

  return (
    <Panel id={paneId}>
      <PanelHeader>VK MUSIC</PanelHeader>

      <AudioBlock audio={audio} />
    </Panel>
  );
};
