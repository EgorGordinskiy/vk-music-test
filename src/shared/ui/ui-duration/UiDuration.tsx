import { Headline } from "@vkontakte/vkui";
import { FC } from "react";

export type TDuration = number | string;

export interface IUiDuration {
  duration: TDuration;
}

export const UiDuration: FC<IUiDuration> = (props) => {
  const { duration } = props;

  return (
    <Headline style={{ color: "#818C99" }} level="1">
      {duration}
    </Headline>
  );
};
