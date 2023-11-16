import Maf from '../third_party/Maf.js';
import Easings from '../third_party/easings.js';
import { settings } from '../js/settings.js';

const fuckings = [
  'Le gouvernement',
  'Les anti-vax',
  'Le français',
  'Les gens en général',
  'tik-tok',
  'La terre plate',
  'la géographie',
  'l’éducation physique',
  'les influenceurs',
  'les casinos',
  'l’adulterie',
  'le gaslighting',
  'Taylor Swift',
  'les guerres',
  'Les sportifs',
  'la police',
  'LE SPORT PLEIN AIR',
  'les américains',
  'généraux d’armée',
  'alpha bad boys',
  'pick-me girls',
  'transphobes',
  'les xenophobes',
  'les extrémistes',
  'chrétiens extrémistes',
  'les “gigachad”',
  'wannabe soldiers',
  'glace sous la neige',
  'crevasses de neiges',
  'la vie',
  'la pollution',
  'l’école',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  'la mère de Ève',
  'jus de pommes sans pommes',
  'les karen',
  'les power-leeches',
  'les néonazi',
  'vladimir putin',
  '«just a prank, bro!»”',
  '«dans ta semaine...»',
  '«pas vraiment fâchée»',
  'les micros-ondes',
  'mansplaining',
  'Elon musk',
  'twitter',
  'misgendering on purpose',
  'les salades froides',
  'LES ROUX',
  'la dépression',
  '«danse est pas un sport»',
  'Les gun',
  'Les oies ',
  'les riches',
  'la famine',
  'Les guêpes',
  'les stéréotypes ',
  'les coins de table',
  'Les presentations orales',
  'le latin',
  'Les moustiques',
  'les moustaches poil de cul',
].map((v) => v.toUpperCase());

function isEven(n) {
  return n % 2 == 0;
}

function getFuck() {
  return settings.NSFW ? 'FUCK' : 'F**K';
}

function getFucking(t) {
  if (t >= 70.736 && t < 75.801) {
    const v = Maf.map(70.736, 75.801, 0, 1, t);
    return { text: 'F*IT', opacity: Maf.parabola(v, 1), color: 0xffffff };
  }
  if (t >= 75.801 && t < 80.856) {
    const v = Maf.map(75.801, 80.856, 0, 1, t);
    return {
      text: 'YEY LIFE',
      opacity: Maf.parabola(v, 1),
      color: 0xffffff,
    };
  }
  if (t >= 80.856 && t < 85.835) {
    const v = Maf.map(80.856, 85.835, 0, 1, t);
    return {
      text: 'MARIE & GALS',
      opacity: Maf.parabola(v, 1),
      color: 0xffffff,
    };
  }
  if (t >= 85.835 && t < 90.362) {
    const v = Maf.map(85.835, 90.362, 0, 1, t);
    return { text: 'WITH LOVE', opacity: Maf.parabola(v, 1), color: 0xffffff };
  }
  if (t > 111.09) {
    const v = Maf.clamp(t - 111.09, 0, 1);
    return { text: `${getFuck()} IT`, opacity: v, color: 0xffffff };
  }

  const et = t - 30.313;
  const beatDuration = 1 * 0.631;
  const beats = Math.floor(et / beatDuration) - 1;

  if (beats >= 27 && beats < 31) {
    return { text: '', opacity: 0, color: 0xffffff };
  }

  const text = isEven(beats) ? fuckings[beats / 2] : getFuck();
  const opacity = Easings.InOutQuint(Maf.parabola(Maf.mod(et, beatDuration) / beatDuration, 1));
  const alternate = isEven((beats - 1) / 2);
  return {
    text,
    opacity,
    color: isEven(beats) ? 0xffffff : alternate ? 0xf900ff : 0x00d3ff,
  };
}

export { getFucking };
