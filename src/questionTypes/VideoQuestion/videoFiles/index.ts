import boshy from './boshy.mp4';
import crysis from './crysis.mp4';
import laNuar from './laNuar.mp4';
import uncharted from './uncharted.mp4';

const Video: Record<string, string> = {
  'Uncharted 4': uncharted,
  Crysis: crysis,
  'I Wanna Be the Boshy': boshy,
  'L.A. Noire': laNuar
};

export type VideoType = typeof Video;

export default Video;
