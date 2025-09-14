import React from 'react';
import type { DayData, GeneralInfo } from '../types';

// FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
// This resolves "Cannot find name 'svg'" and other related JSX syntax errors.
const MichaelSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M5 25 h90 M20 10 v30 M80 10 v30 M50 10 a20 20 0 0 1 0 30 a20 20 0 0 1 0 -30 M10 40 l10 -20 l10 20 M70 40 l10 -20 l10 20", strokeLinecap: "round", strokeLinejoin: "round" }));
const GabrielSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 40 v-30 h20 v30 M10 25 h20 M50 10 a15 15 0 1 1 0 30 a15 15 0 1 1 0 -30 M80 10 l10 30 l-20 -15 h20", strokeLinecap: "round", strokeLinejoin: "round" }));
const SamaelSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 10 h20 a10 10 0 0 1 0 20 h-20 M20 30 v10 M50 10 l20 30 M70 10 l-20 30 M85 25 a10 10 0 1 1 -20 0 a10 10 0 0 1 20 0", strokeLinecap: "round", strokeLinejoin: "round" }));
const RaphaelSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 40 v-30 h15 a15 15 0 0 1 0 30 M10 25 h15 M50 25 h20 M60 10 v30 M85 10 l-10 15 l10 15 M85 25 h-10", strokeLinecap: "round", strokeLinejoin: "round" }));
const SachielSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 10 h20 v30 h-20 z M40 10 l20 30 M60 10 l-20 30 M80 10 h15 v15 h-15 z M87.5 25 v15", strokeLinecap: "round", strokeLinejoin: "round" }));
const AnaelSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 40 l20 -30 l20 30 M20 25 h20 M55 10 a15 15 0 0 1 15 15 a15 15 0 0 1 -30 0", strokeLinecap: "round", strokeLinejoin: "round" }));
const CassielSigil = () => React.createElement('svg', { viewBox: "0 0 100 50", className: "stroke-current text-amber-200", fill: "none", strokeWidth: "2" }, React.createElement('path', { d: "M10 10 a15 15 0 0 1 30 0 v30 M60 10 h20 v30 M60 25 h20 M90 10 l-10 15 l10 15", strokeLinecap: "round", strokeLinejoin: "round" }));

export const grimoireData: DayData[] = [
  {
    day: "Sunday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Michael", sigil: MichaelSigil(), planet: "Sol", heaven: "Fourth Heaven" },
    angelsOfDay: ["Michael", "Dardiel", "Huratapal"],
    angelsOfAir: { king: "Varcan", ministers: ["Tus", "Andas", "Cynabal"] },
    wind: "North-winde",
    angelsOfHeaven: {
      east: ["Samael", "Baciel", "Atel", "Gabriel", "Vionairaba"],
      west: ["Anael", "Pabel", "Ustael", "Burchat", "Suceratos", "Capabili"],
      north: ["Aiel", "Aniel (vel Aquiel)", "Masgabriel", "Sapiel", "Matuyel"],
      south: ["Haludiel", "Machasiel", "Charsiel", "Uriel", "Naromiel"],
    },
    perfume: "Red Wheat",
    conjuration: "Conjuro & confirmo super vos Angeli fortes Dei, & sancti, in nomine Adonay, Eye, Eye, Eye, qui est ille, qui fuit, est & erit, Eye, Abraye: & in nomine Saday, Cados, Cados, Cados, alie sendentis super Cherubin, & per nomen magnum ipsius Dei fortis & potentis, exaltatique super omnes coelos, Eye, Saraye, plasmatoris seculorum, qui creavit mundum, coelum, terram, mare, & omnia quæ in eis sunt in primo die, & sigillavit ea sancto nomine suo Phaa: & per nomina sanctorum Angelorum, qui dominantur in quarto exercitu, & serviunt coram potentissimo Salamia, Angelo magno & honorato: & per nomen stella, quæ est Sol, & per signum, & per immensum nomen Dei vivi, & per nomina omnia prædicta, conjuro te Michael angele magne, qui es præpositus Diei Dominicæ: & per nomen Adonay, Dei Israel, qui creavit mundum & quicquid in eo est, quod pro melabores, & ad moleas omnem meam petitionem, juxta meum velle & votum meum, in negotio & causa mea.",
    nature: "The Spirits of the Air of the Lords day, are under the North-winde; their nature is to procure Gold, Gemmes, Carbuncles, Riches; to cause one to obtain favour and benevolence; to dissolve the enmities of men; to raise men to honors; to carry or take away infirmities.",
  },
  {
    day: "Monday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Gabriel", sigil: GabrielSigil(), planet: "Luna", heaven: "First Heaven" },
    angelsOfDay: ["Gabriel", "Michael", "Samael"],
    angelsOfAir: { king: "Arcan", ministers: ["Bilet", "Missabu", "Abuzaha"] },
    wind: "West-winde",
     angelsOfHeaven: {
        east: ["Gabriel", "Gabrael", "Madiel", "Deamiel", "Janael"],
        west: ["Sachiel", "Zaniel", "Habaiel", "Bachanael", "Corabael"],
        north: ["Mael", "Vuael", "Valnum", "Baliel", "Balay", "Humastrau"],
        south: ["Curaniel", "Dabriel", "Darquiel", "Hanun", "Anayl", "Vetuel"],
    },
    perfume: "Aloes",
    conjuration: "Conjuro & confirmo super vos Angeli fortes & boni, in nomine Adonay, Adonay, Adonay, Eie, Eie, Eie, Cados, Cados, Cados, Achim, Achim, Ja, Ja, Fortis, Ja, qui apparuis monte Sinai, cum glorificatione regis Adonay, Saday, Zebaoth, Anathay, Ya, Ya, Ya, Marinata, Abim, Jeia, qui maria creavit stagna & omnes aquas in secundo die, quasdam super coelos, & quosdam in terra. Sigillavit mare in alio nomine suo, & terminum, quam sibi posuit, non præterit: & per nomina Angelorum, qui dominantur in primo exercitu, qui serviunt Orphaniel Angelo magno, precioso & honorato: & per nomen Stellæ, quæ est Luna: & per nomina prædicta, super te conjuro, scilicet Gabriel, qui es præpositus diei. Lunæ secundo quòd pro me labores & adimpleas, &c.",
    nature: "The Spirits of the Air of Munday, are subject to the West-winde, which is the winde of the Moon: their nature is to give silver; to convey things from place to place; to make horses swift, and to disclose the secrets of persons both present and future.",
  },
  {
    day: "Tuesday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Samael", sigil: SamaelSigil(), planet: "Mars", heaven: "Fifth Heaven" },
    angelsOfDay: ["Samael", "Satael", "Amabiel"],
    angelsOfAir: { king: "Samax", ministers: ["Carmax", "Ismoli", "Paffran"] },
    wind: "East-winde",
    angelsOfHeaven: {
      east: ["Friagne", "Guael", "Damael", "Calzas", "Arragon"],
      west: ["Lama", "Astagna", "Lobquin", "Soncas", "Jazel", "Isiael", "Irel"],
      north: ["Rahumel", "Hyniel", "Rayel", "Seraphiel", "Mathiel", "Fraciel"],
      south: ["Sacriel", "Janiel", "Galdel", "Osael", "Vianuel", "Zaliel"],
    },
    perfume: "Pepper",
    conjuration: "Conjuro & confirmo super vos, Angeli fortes & sancti, per nomen Ya, Ya, Ya, He, He, He, Va, Hy, Hy, Ha, Ha, Ha, Va, Va, Va, An, An, An, Aie, Aie, Aie, El, Ay, Elibra, Eloim, Eloim: & per nomina ipsius alti Dei, qui secit aquam aridam apparere, & vocavit terram, & produxit arbores, & herbas de ea, & sigillavit super eam cum precioso, honorato, metuendo & sancto nomine suo: & per nomen angelorum dominantium in quinto exercitu, qui serviunt Acimoy Angelo magno, forti, potenti, & honorato: & per nomen Stellæ, quæ est Mars: & per nomina prædicta conjuro super te Samael, Angele magne, qui præpositus es diei Martis: & per nomina Adonay, Dei vivi & veri, quod pro me labores, & adimpleas, &c.",
    nature: "The Spirits of the Air of Tuesday are under the East-winde: their nature is to cause wars, mortality, death and combustions; and to give two thousand Souldiers at a time; to bring death, infirmities or health.",
  },
  {
    day: "Wednesday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Raphael", sigil: RaphaelSigil(), planet: "Mercurius", heaven: "Second Heaven" },
    angelsOfDay: ["Raphael", "Miel", "Seraphiel"],
    angelsOfAir: { king: "Mediat, or Modiat", ministers: ["Suquinos", "Sallales"] },
    wind: "Southwest-winde",
    angelsOfHeaven: {
      east: ["Mathlai", "Tarmiel", "Baraborat"],
      west: ["Jeresous", "Mitraton"],
      north: ["Thiel", "Rael", "Jariahel", "Venahel", "Velel", "Abuiori", "Ucirnuel"],
      south: ["Milliel", "Nelapa", "Babel", "Caluel", "Vel", "Laquel"],
    },
    perfume: "Mastick",
    conjuration: "Conjuro & confirmo vos angeli fortes, sancti & potentes, in nomine fortis, metuendissimi & benedicti Ja, Adonay, Eloim, Saday, Saday, Saday, Eie, Eie, Eie, Asamie, Asaraie: & in nomine Adonay Dei Israel, qui creavit luminaria magna, ad distinguendum diem à nocte: & per nomen omnium Angelorum deservientium in exercitu secundo coram Tetra Angelo majori, atque forti & potenti: & per nomen Stellæ, quæ est Mercurius: & per nomen Sigilli, quæ sigillatur a Deo fortissimo & honoratio: per omnia prædicta super te Raphael Angele magne, conjuro, qui es præpositus die: quarta: & per nomen sanctum quod erat scriptum in fronte Aaron sacerdotis altissimi creatoris: & per nomina Angelorum qui in gratiam Salvatoris confirmati sunt: & per nomen sedis Animalium, habentium senas alas, quòd pro me labo, et, &c.",
    nature: "To give all Metals; to reveal all earthly things past, present and to come; to pacifie judges, to give victories in war, to re-edifie, and teach experiments and all decayed Sciences, and to change bodies mixt of Elements conditionally out of one into another; to give infirmities or health; to raise the poor, and cast down the high ones; to binde or lose Spirits; to open locks or bolts.",
  },
  {
    day: "Thursday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Sachiel", sigil: SachielSigil(), planet: "Jupiter", heaven: "Sixth Heaven" },
    angelsOfDay: ["Sachiel", "Castiel", "Asasiel"],
    angelsOfAir: { king: "Suth", ministers: ["Maguth", "Gutrix"] },
    wind: "South-winde",
    perfume: "Saffron",
    conjuration: "Conjuro & confirmo super vos, Angeli sancti, per nomen, Cados, Cados, Cados, Eschereie, Eschereie, Eschereie, Hatim ya, fortis firmator seculorum, Cantine, Jaym, Janic, Anic, Calbat, Sabbac, Berifay, Alnaym: & per nomen Adonay, qui creavit pisces reptilia in aquis, & aves super faciem terræ, volantes versus coelos die quinto: & per nomina Angelorum serventium in sexto exercitu coram pastore Angelo sancto & magno & potenti principe: & per nomen stella, quæ est Jupiter: & per nomen Sigilli sui: & per nomen Adonay, summi Dei, omnium creatoris: & per nomen omnium stellarum, & per vim & virtutem earum: & per nomina prædicta, conjuro te Sachiel Angele magne, qui es præpositus diei Jovis, ut pro me labores, &c.",
    nature: "The Spirits of the Air of Thursday, are subject to the South-winde; their nature is to procure the love of woman; to cause men to be merry and joyful; to pacifie strife and contentions; to appease enemies; to heal the diseased, and to disease the whole; and procureth losses, or taketh them away.",
  },
  {
    day: "Friday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Anael", sigil: AnaelSigil(), planet: "Venus", heaven: "Third Heaven" },
    angelsOfDay: ["Anael", "Rachiel", "Sachiel"],
    angelsOfAir: { king: "Sarabotes", ministers: ["Amabiel", "Aba", "Abalidoth", "Flaef"] },
    wind: "West-winde",
    angelsOfHeaven: {
      east: ["Setchiel", "Chedusitaniel", "Corat", "Tamael", "Tenaciel"],
      west: ["Turiel", "Coniel", "Babiel", "Kadie", "Maltiel", "Huphaltiel"],
      north: ["Peniel", "Pemael", "Penat", "Raphael", "Raniel", "Doremiel"],
      south: ["Porna", "Sachiel", "Chermiel", "Samael", "Santanael", "Famiel"],
    },
    perfume: "Pepperwort",
    conjuration: "Conjuro & confirmo super vos Angeli fortes, sancti atque potentes, in nomine On, Hey, Heya, Ja, Je, Adonay, Saday, & in nomine Saday, qui creavit quadrupedia & anamalia reptilia, & homines in sexto die, & Adæ dedit potestatem super omnia animalia: unde benedictum sit nomen creatoris in loco suo: & per nomina Angelorum servientium in tertio exercitu, coram Dagiel Angelo magno, principe forti atque potenti: & per nomen Stellæ quæ est Venus: & per Sigillum ejus, quod quidem est sanctum: & per nomina prædicta conjuro super te Anael, qui es præpositus diei sextæ, ut pro me labores, &c.",
    nature: "The Spirits of the Air of Friday are subject to the West-winde; their nature is to give silver: to excite men, and incline them to luxury; to reconcile enemies through luxury; and to make marriages; to allure men to love women; to cause, or take away infirmities; and to do all things which have motion.",
  },
  {
    day: "Saturday",
    // FIX: Replaced JSX component usage with a function call to generate the element.
    angel: { name: "Cassiel", sigil: CassielSigil(), planet: "Saturnus" },
    angelsOfDay: ["Cassiel", "Machatan", "Uriel"],
    angelsOfAir: { king: "Maymon", ministers: ["Abumalith", "Assaibi", "Balidet"] },
    wind: "Southwest-winde",
    perfume: "Sulphur",
    conjuration: "Conjuro & confirmo super vos Caphriel vel Cassiel, Machatori, & Seraquiel Angeli fortes & potentes: & per nomen Adonay, Adonay, Adonay, Eie, Eie, Eie, Acim, Acim, Acin, Cados, Cados, Ina vel Ima, Ima, Saclay, Ja, Sar, Domini formatoris seculorum, qui in septimo die quievit: & per illum qui in beneplacito suo filiis Israel in hereditatem observandum dedit, ut eum firmiter custodirent, & sanctificarent, ad habendem inde bonam in alio seculo remunerationem: & per nomina Angelorum servientium in exercitu septimo Pooel Angelo magno & potenti principi: & per nomen stellæ quæ est Saturnus: & per sanctum Sigillum ejus: & per nomina prædicta conjuro super te Caphriel, qui præpositus es diei septimæ, quæ est dies Sabbati, quòd pro me labores, &c.",
    nature: "The Spirits of the Air of Saturday are subject to the Southwest-winde: the nature of them is to sow discordes, hatred, evil thoughts and cogitations; to give leave freely, to slay and kill every one, and to lame or maim every member.",
  }
];

export const generalInfo: GeneralInfo = {
  introduction: {
    title: "Introduction",
    content: [
      "In the former book, which is the fourth book of Agrippa, it is sufficiently spoken concerning Magical Ceremonies, and Initiations.",
      "But because he seemeth to have written to the learned, and well-experienced in this art; because he doth not specially treat of the Ceremonies, but rather speaketh of them in general, it was therefore thought good to adde hereunto the Magical Elements of Peter de Abano: that those who are hitherto ignorant, and have not tasted of Magical Superstitions, may have them in readiness, how they may exercise themselves therein. For we see in this book, as it were a certain introduction of Magical vanity; and, as if they were in present exercise, they may behold the distinct functions of spirits, how they may be drawn to discourse and communication; what is to be done every day, and every hour; and how they shall be read, as if they were described sillable by sillable.",
      "In brief, in this book are kept the principles of Magical conveyances. But because the greatest power is attributed to the Circles; (For they are certain fortresses to defend the operators safe from the evil Spirits;) In the first place we will treat concerning the composition of a Circle."
    ]
  },
  circle_composition: {
    title: "Of the Circle, and the Composition Thereof.",
    content: "The form of Circles is not alwaies one and the same; but useth to be changed, according to the order of the Spirits that are to be called, their places, times, daies and hours. For in making a Circle, it ought to be considered in what time of the year, what day, and what hour, that you make the Circle; what Spirits you would call, to what Star and Region they do belong, and what functions they have. Therefore let there be made three Circles of the latitude of nine foot, and let them be distant one from another a hands breadth; and in the middle Circle, first, write the name of the hour wherein you do the work. In the second place, Write the name of the Angel of the hour. In the third place, The Sigil of the Angel of the hour. Fourthly, The name of the Angel that ruleth that day wherein you do the work, and the names of his ministers. In the fifth place, The name of the present time. Sixthly, The name of the Spirits ruling in that part of time, and their Presidents. Seventhly, The name of the head of the Signe ruling in that part of time wherein you work. Eighthly, The name of the earth, according to that part of time wherein you work. Ninthly, and for the compleating of the middle Circle, Write the name of the Sun and of the Moon, according to the said rule of time; for as the time is changed, so the names are to be altered. And in the outermost Circle, let there be drawn in the four Angles, the names of the presidential Angels of the Air, that day wherein you would do this work; to wit, the name of the King and his three Ministers. Without the Circle, in four Angles, let Pentagones be made. In the inner Circle let there be written four divine names with crosses interposed in the middle of the Circle; to wit, towards the East let there be written Alpha, and towards the West let there be written Omega; and let a cross divide the middle of the Circle. When the Circle is thus finished, according to the rule now before written, you shall proceed."
  },
  consecrations: {
    title: "The Consecrations and Benedictions",
    content: [
      "First of the Benediction of the Circle. When the Circle is ritely perfected, sprinkle the same with holy or purging water, and say, Thou shalt purge me with hysop, (O Lord,) and I shall be clean: Thou shalt wash me, and I shall be whiter then snow.",
      "The Benediction of perfumes. The God of Abraham, God of Isaac, God of Jacob, bless here the creatures of these kindes, that they may fill up the power and vertue of their odours; so that neither the enemy, nor any false imagination, may be able to enter into them: through our Lord Jesus Christ, &c. Then let them be sprinkled with holy water.",
      "The Exorcisme of the fire upon which the perfumes are to be put. The fire which is to be used for suffumigations, is to be in a new vessel of earth or iron; and let it be exorcised after this manner. I exorcise thee, O thou creature of fire, by him by whom all things are made, that forthwith thou cast away every phantasme from thee, that it shall not be able to do any hurt in any thing. Then say, Bless, O Lord, this creature of fire, and sanctifie it, that it may be blessed to set forth the praise of thy holy name, that no hurt may come to the Exorcisers or Spectators: through our Lord Jesus Christ, &c."
    ]
  }
};

const dayHours = ["1. Yayn", "2. Janor", "3. Nasnia", "4. Salla", "5. Sadedali", "6. Thamur", "7. Ourer", "8. Tanic", "9. Neron", "10. Jayon", "11. Abay", "12. Natalon"];
const nightHours = ["1. Beron", "2. Barol", "3. Thanu", "4. Athir", "5. Mathon", "6. Rana", "7. Netos", "8. Tafrac", "9. Saffur", "10. Aglo", "11. Calerna", "12. Salam"];

export const hourlyAngels = {
  "Sunday": {
    day: ["Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Monday": {
    day: ["Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Tuesday": {
    day: ["Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Wednesday": {
    day: ["Raphael", "Gabriel", "Cassiel", "Sachael", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Thursday": {
    day: ["Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Friday": {
    day: ["Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel"].map((angel, i) => ({ hour: nightHours[i], angel }))
  },
  "Saturday": {
    day: ["Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael"].map((angel, i) => ({ hour: dayHours[i], angel })),
    night: ["Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael", "Michael", "Anael", "Raphael", "Gabriel", "Cassiel", "Sachiel", "Samael"].map((angel, i) => ({ hour: nightHours[i], angel }))
  }
};
