
export interface AngelInfo {
  name: string;
  sigil: JSX.Element;
  planet?: string;
  sign?: string;
  heaven?: string;
}

export interface DayData {
  day: string;
  angel: AngelInfo;
  angelsOfDay: string[];
  angelsOfAir: {
    king: string;
    ministers: string[];
  };
  wind: string;
  angelsOfHeaven?: {
    east: string[];
    west: string[];
    north: string[];
    south: string[];
  };
  perfume: string;
  conjuration: string;
  nature: string;
}

export interface GeneralContent {
  title: string;
  content: string | string[];
}

export interface GeneralInfo {
  introduction: GeneralContent;
  circle_composition: GeneralContent;
  consecrations: GeneralContent;
}

export type GeneralInfoKey = keyof GeneralInfo;

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}
