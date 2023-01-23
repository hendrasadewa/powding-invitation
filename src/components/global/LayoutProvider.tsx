import { AVAILABLE_LAYOUT } from '@/constants/layout';
import { createContext, ReactNode } from 'react';

export const LayoutContext = createContext<AVAILABLE_LAYOUT>(
  AVAILABLE_LAYOUT.SIMPLE
);

interface Props {
  children: ReactNode;
  selectedLayout: AVAILABLE_LAYOUT;
}

export default function LayoutProvider({ children, selectedLayout }: Props) {
  return (
    <LayoutContext.Provider value={selectedLayout}>
      {children}
    </LayoutContext.Provider>
  );
}
