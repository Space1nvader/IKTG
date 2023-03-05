import amongAs from './amongAs.mp3';
import cyberpunk from './cyberpunk.mp3';
import farCry from './farcry.mov';
import halflife from './halflife2.mp3';
import hearthstone from './hearthstone.mp3';
import metalGear from './metalGear.mp3';
import minecraft from './minecraft.mp3';
import postal2 from './postal2.mp3';
import seriousSam from './seriousSam.mp3';
import skyrim from './skyrim.mp3';
import viceCity from './viceCity.mp3';

const Audio: Record<string, string> = {
  'Serious Sam': seriousSam,
  'Metal Gear': metalGear,
  'Postal 2': postal2,
  Minecraft: minecraft,
  Hearthstone: hearthstone,
  'Half-Life 2': halflife,
  'Far Cry 3': farCry,
  'Grand Theft Auto: Vice City': viceCity,
  'Cyberpunk 2077': cyberpunk,
  'Among Us': amongAs,
  'The Elder Scrolls V: Skyrim': skyrim
};

export type AudioType = typeof Audio;

export default Audio;
