import { makeAutoObservable } from "mobx";

type TAudio = HTMLAudioElement | null;

export class PlayerStore {
  private audio: TAudio = null;
  private isPlaying = false;
  private duration = 0;
  private currentTime = 0;

  constructor() {
    makeAutoObservable(this);
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getAudio(): TAudio {
    return this.audio;
  }

  public setAudio(audio: HTMLAudioElement) {
    this.audio = audio;

    if (this.audio) {
      this.audio.addEventListener("loadedmetadata", this.handleLoadedMetadata);
      this.audio.addEventListener("ended", this.handleAudioEnded);
      this.audio.addEventListener("timeupdate", this.handleTimeUpdate);
    }
  }

  public play() {
    if (this.audio) {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public playOrPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public cleanup() {
    if (this.audio) {
      this.audio.removeEventListener(
        "loadedmetadata",
        this.handleLoadedMetadata,
      );
      this.audio.removeEventListener("ended", this.handleAudioEnded);
      this.audio.removeEventListener("timeupdate", this.handleTimeUpdate);
    }
  }

  private handleLoadedMetadata = () => {
    if (this.audio) {
      this.duration = this.audio.duration;
    }
  };

  private handleAudioEnded = () => {
    this.isPlaying = false;
  };

  private handleTimeUpdate = () => {
    if (this.audio) {
      this.currentTime = this.audio.currentTime;
    }
  };
}
