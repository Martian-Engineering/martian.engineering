import * as React from "react";

export interface ModalContextValue {
  open: (component: React.ComponentType<any>, props?: Record<string, unknown>) => void;
}

const defaultValue: ModalContextValue = {
  open: () => {
    // ModalProvider is optional; ignore open requests when it is absent.
  },
};

const ModalContext = React.createContext<ModalContextValue>(defaultValue);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const open = React.useCallback<ModalContextValue["open"]>(() => {
    // Modal handling is not wired up yet; this placeholder prevents runtime errors during hydration.
  }, []);

  const value = React.useMemo<ModalContextValue>(() => ({ open }), [open]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export function useModals(): ModalContextValue {
  return React.useContext(ModalContext);
}
