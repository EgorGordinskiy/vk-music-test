import { Icon16MoreVertical } from "@vkontakte/icons";
import { IconButton } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { usePlayer } from "features/audio";
import { AudioCell, AudioCellImage } from "entities/audio";
import { IAudio } from "shared/api";
import { UiAudioLoading } from "shared/ui";

export interface IAudioBlock {
  audio: IAudio;
}

export const AudioBlock: FC<IAudioBlock> = observer((props) => {
  const { audio } = props;

  const player = usePlayer(audio.audioSrc);

  const isStartAudio = player.getCurrentTime() > 0;
  const isPlayingAudio = player.getIsPlaying();
  const duration =
    isPlayingAudio || isStartAudio
      ? player.getCurrentTime()
      : player.getDuration();

  const hanldeClick = () => {
    player.playOrPause();
  };

  return (
    <AudioCell
      // activated={isStartAudio}
      left={
        <AudioCellImage
          src={audio.image}
          overlay={
            isStartAudio ? <UiAudioLoading isLoading={isPlayingAudio} /> : <></>
          }
          overlayVisibility={isStartAudio ? "always" : undefined}
        />
      }
      onClick={hanldeClick}
      audio={audio}
      duration={duration}
      right={
        <IconButton>
          <Icon16MoreVertical />
        </IconButton>
      }
    />
  );
});
