export type Session = {
  id: string; // UUID v4
  status: string;
};

export type SessionMedia = {
  id: Session['id'];
  mimeType: string;
  context: string;
};

export type MediaContext = {
  id: Session['id'];
  mediaId: SessionMedia['id']; // UUID v4 related to media
  context: 'front' | 'back' | 'none';
  probability: number;
};
