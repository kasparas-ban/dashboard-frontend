import { createContext, Dispatch, SetStateAction } from 'react';

export interface IUser {
  pic: string | null,
  name: string,
  id: number,
}

export interface IMessage {
  messId: number,
  from: number,
  msg: string,
  time: Date,
}


export interface ChatOverlay {
  user: IUser,
  minimized: boolean,
}

export interface Overlays {
  chats: ChatOverlay[],
  navProfile: boolean,
  leftDrawer: {
    contacts: boolean,
    chatHistory: boolean,
    feed: boolean,
  },
}

export const AppContext = createContext({
  overlays: {} as Overlays,
  setOverlays: (() => {}) as Dispatch<SetStateAction<Overlays>>,
});