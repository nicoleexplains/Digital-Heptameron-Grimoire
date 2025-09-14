import React from 'react';
import type { DayData, GeneralInfo, HourlyAngel } from '../types';

const commonSigilProps = {
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "5",
  strokeLinecap: "round" as "round",
  strokeLinejoin: "round" as "round",
  className: "w-full h-full text-amber-200"
};

const MichaelSigil = () => React.createElement('svg', commonSigilProps,
    React.createElement('path', { d: "M50 15 V 85 M20 50 H 80" }),
    React.createElement('path', { d: "M20 50 C 10 40, 10 30, 20 20" }),
    React.createElement('path', { d: "M80 50 C 90 40, 90 30, 80 20" }),
    React.createElement('path', { d: "M20 50 C 10 60, 10 70, 20 80" }),
    React.createElement('path', { d: "M80 50 C 90 60, 90 70, 80 80" })
);

const GabrielSigil = () => React.createElement('svg', { ...commonSigilProps, viewBox: "0 0 100 110" },
    React.createElement('path', { d: "M70 10 L70 55 C 70 85, 30 85, 30 55 C 30 25, 70 25, 70 55"}),
    React.createElement('path', { d: "M30 55 L30 100 M15 85 H 45" })
);

const SamaelSigil = () => React.createElement('svg', commonSigilProps,
    React.createElement('circle', { cx: "50", cy: "35", r: "18" }),
    React.createElement('path', { d: "M50 53 V 85 M30 70 H 70" })
);

const RaphaelSigil = () => React.createElement('svg', { ...commonSigilProps, viewBox: "0 0 100 110" },
    React.createElement('path', { d: "M50 10 V 100"}),
    React.createElement('path', { d: "M25 50 H 75"}),
    React.createElement('path', { d: "M25 50 C 20 45, 20 35, 30 30"}),
    React.createElement('path', { d: "M75 50 C 80 45, 80 35, 70 30"}),
    React.createElement('circle', { cx: "50", cy: "30", r: "8" })
);

const SachielSigil = () => React.createElement('svg', commonSigilProps,
    React.createElement('path', { d: "M50 15 V 85 M30 30 H 70"}),
    React.createElement('path', { d: "M30 55 C 40 75, 60 75, 70 55" })
);

const AnaelSigil = () => React.createElement('svg', commonSigilProps,
    React.createElement('circle', { cx: "50", cy: "40", r: "20" }),
    React.createElement('path', { d: "M30 40 H 70" }),
    React.createElement('path', { d: "M50 60 V 85 M35 72.5 H 65" })
);

const CassielSigil = () => React.createElement('svg', commonSigilProps,
    React.createElement('path', { d: "M50 85 V 35" }),
    React.createElement('path', { d: "M35 70 H 65" }),
    React.createElement('path', { d: "M50 35 C 50 15, 80 15, 70 35" })
);

export const grimoireData: DayData[] = [
  {
    day: 'Sunday',
    angel: {
      name: 'Michael',
      sigil: React.createElement(MichaelSigil),
      planet: 'Sun',
      heaven: 'The Fourth Heaven',
    },
    perfume: 'Red Sanders',
    angelsOfDay: ['Michael', 'Dardiel', 'Huratapel'],
    angelsOfAir: {
      king: 'Varcan',
      ministers: ['Tus', 'Andas', 'Cynabal'],
    },
    wind: 'North Wind',
    angelsOfHeaven: {
      east: ['Salamia', 'Maseriel'],
      west: ['Saziel', 'Madiniel'],
      north: ['Mael', 'Vianuel'],
      south: ['Habudiel', 'Anabiel'],
    },
    nature: 'They give gold, and all riches, cause you to be beloved of women, and to make a man to go invisible.',
    conjuration: 'I conjure and confirm upon you, ye strong and good angels, in the name Adonai, Eye, Eye, Eya...',
  },
  {
    day: 'Monday',
    angel: {
      name: 'Gabriel',
      sigil: React.createElement(GabrielSigil),
      planet: 'Moon',
      heaven: 'The First Heaven',
    },
    perfume: 'Aloes',
    angelsOfAir: {
      king: 'Arcan',
      ministers: ['Bilet', 'Missabu', 'Abuhaza'],
    },
    wind: 'West Wind',
    nature: 'They give silver, convey things from place to place; they make horses swift, and declare the secrets of persons present and future.',
    conjuration: 'I conjure and confirm upon you, ye strong and good angels, in the name Adonai, Adonai, Adonai...',
  },
  {
    day: 'Tuesday',
    angel: {
      name: 'Samael',
      sigil: React.createElement(SamaelSigil),
      planet: 'Mars',
      heaven: 'The Fifth Heaven',
    },
    perfume: 'Pepper',
    angelsOfAir: {
      king: 'Samax',
      ministers: ['Carmax', 'Ismoli', 'Paffran'],
    },
    wind: 'East Wind',
    nature: 'They cause wars, mortality, and death; and they have two thousand angels for their ministers.',
    conjuration: 'I conjure and confirm upon you, ye strong and good angels, in the name Ya, Ya, Ya, He, He, He...',
  },
  {
    day: 'Wednesday',
    angel: {
      name: 'Raphael',
      sigil: React.createElement(RaphaelSigil),
      planet: 'Mercury',
      heaven: 'The Second Heaven',
    },
    perfume: 'Mastic',
    angelsOfAir: {
      king: 'Mediat',
      ministers: ['Vel', 'Chalan', 'Jena', 'Suth'],
    },
    wind: 'South-West Wind',
    nature: 'They give all metals, reveal all earthly things, past, present, and to come; they make men witty, eloquent, and honest.',
    conjuration: 'I conjure and confirm upon you, ye strong, holy angels, by the name of Elias, Adonai...',
  },
  {
    day: 'Thursday',
    angel: {
      name: 'Sachiel',
      sigil: React.createElement(SachielSigil),
      planet: 'Jupiter',
      heaven: 'The Sixth Heaven',
    },
    perfume: 'Saffron',
    angelsOfAir: {
      king: 'Suth',
      ministers: ['Maguth', 'Gutrix'],
    },
    wind: 'South Wind',
    nature: 'They procure the love of women, make men joyful and merry, they appease quarrels and contentions.',
    conjuration: 'I conjure and confirm upon you, ye strong and holy angels, by the name Cados, Cados, Cados, Eschereie, Eschereie, Eschereie...',
  },
  {
    day: 'Friday',
    angel: {
      name: 'Anael',
      sigil: React.createElement(AnaelSigil),
      planet: 'Venus',
      heaven: 'The Third Heaven',
    },
    perfume: 'Musk',
    angelsOfAir: {
      king: 'Sarabotes',
      ministers: ['Amabiel', 'Aba', 'Abalidoth', 'Flaef'],
    },
    wind: 'West Wind',
    nature: 'They give silver, procure the love of women, make a man to go invisible, and can reveal hidden treasures.',
    conjuration: 'I conjure and confirm upon you, ye strong, holy, and potent angels, in the name On, Hey, Heya, Ja, Je, Adonai, Sadai...',
  },
  {
    day: 'Saturday',
    angel: {
      name: 'Cassiel',
      sigil: React.createElement(CassielSigil),
      planet: 'Saturn',
      heaven: 'The Seventh Heaven',
    },
    perfume: 'Sulphur',
    angelsOfAir: {
      king: 'Maymon',
      ministers: ['Abalist', 'Balidet', 'Abumalit'],
    },
    wind: 'South-West Wind',
    nature: 'They sow discords, hatred, evil thoughts and cogitations; they give lead, and kill and lame men.',
    conjuration: 'I conjure and confirm upon you, Caphriel, Machator, and Seraquiel, strong and powerful angels...',
  },
];

export const generalInfo: GeneralInfo = {
    introduction: {
        title: 'Introduction',
        content: [
            "The Heptameron, or Magical Elements, is a book of magic attributed to Peter de Abano.",
            "This text provides a guide to conjuring angels for the seven days of the week, detailing their names, sigils, perfumes, and the natures of the spirits they command.",
            "It is a foundational text in Western ceremonial magic, outlining the structure of the cosmos and the hierarchies of spirits that govern the hours and days."
        ]
    },
    circle_composition: {
        title: 'Circle Composition',
        content: [
            "The composition of the magical circle is of utmost importance for the protection of the operator.",
            "It involves inscriptions of divine names and symbols. The circle should be nine feet in diameter, with several concentric circles containing names of God, angels, and other protective formulas.",
            "Within the circle, the operator performs the rites, safe from the potentially malevolent forces they seek to command."
        ]

    },
    consecrations: {
        title: 'Consecrations',
        content: [
            "Various consecrations are required for the instruments, garments, and perfumes used in the magical operations.",
            "Each item must be purified and blessed through specific prayers and rites. The garments should be of clean linen, and the perfumes must be compounded of substances pleasing to the spirits being invoked.",
            "These consecrations ensure that the tools of the art are fit for sacred work and aligned with the operator's will."
        ]
    }
};

export const hourlyAngels: HourlyAngel[] = [
    { hour: 0, name: 'Yayn', ruler: 'Samael' },
    { hour: 1, name: 'Janor', ruler: 'Anael' },
    { hour: 2, name: 'Nasnia', ruler: 'Raphael' },
    { hour: 3, name: 'Salla', ruler: 'Gabriel' },
    { hour: 4, name: 'Sadedali', ruler: 'Cassiel' },
    { hour: 5, name: 'Thamur', ruler: 'Sachiel' },
    { hour: 6, name: 'Ourer', ruler: 'Michael' },
    { hour: 7, name: 'Thain', ruler: 'Samael' },
    { hour: 8, name: 'Neron', ruler: 'Anael' },
    { hour: 9, name: 'Jayon', ruler: 'Raphael' },
    { hour: 10, name: 'Abai', ruler: 'Gabriel' },
    { hour: 11, name: 'Natalon', ruler: 'Cassiel' },
    { hour: 12, name: 'Yayn', ruler: 'Samael' },
    { hour: 13, name: 'Janor', ruler: 'Anael' },
    { hour: 14, name: 'Nasnia', ruler: 'Raphael' },
    { hour: 15, name: 'Salla', ruler: 'Gabriel' },
    { hour: 16, name: 'Sadedali', ruler: 'Cassiel' },
    { hour: 17, name: 'Thamur', ruler: 'Sachiel' },
    { hour: 18, name: 'Ourer', ruler: 'Michael' },
    { hour: 19, 'name': 'Thain', ruler: 'Samael' },
    { hour: 20, name: 'Neron', ruler: 'Anael' },
    { hour: 21, name: 'Jayon', ruler: 'Raphael' },
    { hour: 22, name: 'Abai', ruler: 'Gabriel' },
    { hour: 23, name: 'Natalon', ruler: 'Cassiel' },
];