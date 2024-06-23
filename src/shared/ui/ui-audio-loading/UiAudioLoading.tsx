import { FC } from "react";
import classes from "./UiAudioLoading.module.scss";

export interface IUiAudioLoading {
  isLoading: boolean;
}
export const UiAudioLoading: FC<IUiAudioLoading> = (props) => {
  const { isLoading } = props;
  const className = isLoading ? classes.animation : classes.pause;

  return (
    <div className={className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
