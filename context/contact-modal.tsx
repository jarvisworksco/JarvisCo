"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ContactModalCtx {
  isOpen: boolean;
  selectedPlan: string;
  open: (plan?: string) => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalCtx>({
  isOpen: false,
  selectedPlan: "",
  open: () => {},
  close: () => {},
});

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        selectedPlan,
        open: (plan = "") => {
          setSelectedPlan(plan);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
