import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type LeftDrawerType = "contacts" | "chatHistory" | "feed";

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

interface AppState {
  chats: ChatOverlay[],
  navProfile: boolean,
  leftDrawer: {
    contacts: boolean,
    chatHistory: boolean,
    feed: boolean,
  },
  updateChats: (chats: ChatOverlay[]) => void,
  toggleNavProfile: () => void,
  toggleLeftDrawer: (drawer: LeftDrawerType) => void,
  clearOverlays: () => void,
}

export const useAppStore = create<AppState>()(set => ({
  chats: [],
  navProfile: false,
  leftDrawer: {
    contacts: false,
    chatHistory: false,
    feed: false,
  },
  updateChats: (chats: ChatOverlay[]) => set(state => ({
    chats: [ ...chats ],
  })),
  toggleNavProfile: () => set(state => ({
    navProfile: !state.navProfile,
  })),
  toggleLeftDrawer: (drawer: LeftDrawerType) => set(state => ({
    leftDrawer: {
      ...state.leftDrawer,
      ...Object.keys(state.leftDrawer).reduce((acc, key) => ({...acc, [key]: key === drawer ? !state.leftDrawer[key] : false}), {}),
    }
  })),
  clearOverlays: () => set(state => ({
    chats: [],
    navProfile: false,
    leftDrawer: {
      contacts: false,
      chatHistory: false,
      feed: false,
    },
  })),
}));