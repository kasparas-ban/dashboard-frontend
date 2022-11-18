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
  leftDrawer: {
    contacts: boolean,
    chatHistory: boolean,
  }
}

export const AppContext = createContext({
  overlays: {} as Overlays,
  setOverlays: (() => {}) as Dispatch<SetStateAction<Overlays>>,
});