export interface Angel {
  name: string;
  sigil: JSX.Element;
  planet?: string;
  heaven?: string;
}

export interface AngelsOfAir {
  king: string;
  ministers: string[];
}

export interface AngelsOfHeaven {
  east: string[];
  west: string[];
  north: string[];
  south: string[];
}

export interface DayData {
  day: string;
  angel: Angel;
  perfume: string;
  angelsOfDay?: string[];
  angelsOfAir: AngelsOfAir;
  wind: string;
  angelsOfHeaven?: AngelsOfHeaven;
  nature: string;
  conjuration: string;
}

export interface GeneralInfo {
  introduction: { title: string; content: string[] };
  circle_composition: { title: string; content: string[] };
  consecrations: { title: string; content: string[] };
}

export type GeneralInfoKey = keyof GeneralInfo;

export interface HourlyAngel {
    hour: number;
    name: string;
    ruler: string;
}

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}
