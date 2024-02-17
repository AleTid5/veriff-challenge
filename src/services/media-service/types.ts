export type MediaGroup = {
  [key in 'document-front' | 'document-back']: {
    id: string;
    context: string;
    probability: number;
  }[];
};
