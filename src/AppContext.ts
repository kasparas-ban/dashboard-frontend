import { createContext, Dispatch, SetStateAction } from 'react';

export interface Overlays {
  [key: string]: boolean
}

const defaultOverlays = {
  contacts: false,
  chat: false,
}

export const AppContext = createContext({
  overlays: {} as Overlays,
  setOverlays: (() => {}) as Dispatch<SetStateAction<Overlays>>,
});