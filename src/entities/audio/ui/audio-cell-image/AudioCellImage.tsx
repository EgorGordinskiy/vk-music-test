import { Image } from "@vkontakte/vkui";
import { FC, ReactNode } from "react";

export interface IAudioCellImageProps {
  src: string;
  overlay?: ReactNode;
  overlayVisibility?: "on-hover" | "always";
}

export const AudioCellImage: FC<IAudioCellImageProps> = (props) => {
  const { src, overlay, overlayVisibility } = props;

  return (
    <Image alt="audion icon" size={40} src={src} loading="lazy">
      <Image.Overlay visibility={overlayVisibility} theme="dark">
        <>{overlay}</>
      </Image.Overlay>
    </Image>
  );
};
