import { SimpleCell } from "@vkontakte/vkui";
import { FC, ReactNode } from "react";
import { IAudio } from "shared/api";
import { UiDuration } from "shared/ui";
import { toHHMMSS } from "shared/utils";
import classes from "./AudioCell.module.scss";

export interface IAudioCellProps {
  audio: IAudio;
  activated?: boolean;
  duration: number;
  left?: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

export const AudioCell: FC<IAudioCellProps> = (props) => {
  const { activated, audio, left, right, onClick, duration } = props;
  const { author, title } = audio;

  return (
    <div className={classes.cell}>
      <SimpleCell
        onClick={onClick}
        subtitle={author}
        before={left}
        activated={activated}
        after={
          <>
            <UiDuration duration={toHHMMSS(Math.floor(duration))} />
            {right}
          </>
        }
      >
        {title}
      </SimpleCell>
    </div>
  );
};
