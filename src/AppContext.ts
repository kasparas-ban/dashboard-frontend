import { createContext, Dispatch, SetStateAction } from 'react';

export interface IUser {
  pic: string | null,
  name: string,
  id: number,
}

export interface ChatOverlay {
  user: IUser
}

export interface Overlays {
  chats: ChatOverlay[],
  [key: string]: any
}

export const AppContext = createContext({
  overlays: {} as Overlays,
  setOverlays: (() => {}) as Dispatch<SetStateAction<Overlays>>,
});