import farCry from './farcry.mov';
import halflife from './halflife2.mp3';
import hearthstone from './hearthstone.mp3';
import metalGear from './metalGear.mp3';
import minecraft from './minecraft.mp3';
import postal2 from './postal2.mp3';
import seriousSam from './seriousSam.mp3';
import viceCity from './viceCity.mp3';

const Audio: Record<string, string> = {
  'Serious Sam': seriousSam,
  'Metal Gear': metalGear,
  'Postal 2': postal2,
  Minecraft: minecraft,
  Hearthstone: hearthstone,
  'Half-Life 2': halflife,
  'Far Cry 3': farCry,
  'Grand Theft Auto: Vice City': viceCity
};

export type AudioType = typeof Audio;

export default Audio;
