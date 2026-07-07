import { createContext, useContext, useEffect, useState } from 'react';

const ActionItemsContext = createContext(null);
const STORAGE_KEY = 'routepulse-action-status';

export function ActionItemsProvider({ children }) {
  const [statusMap, setStatusMap] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statusMap));
  }, [statusMap]);

  const approveItem = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'approved' }));
  };

  const holdItem = (id) => {
    setStatusMap((prev) => ({ ...prev, [id]: 'held' }));
  };

  return (
    <ActionItemsContext.Provider value={{ statusMap, approveItem, holdItem }}>
      {children}
    </ActionItemsContext.Provider>
  );
}

export function useActionItems() {
  const context = useContext(ActionItemsContext);
  if (!context) {
    throw new Error('useActionItems must be used within an ActionItemsProvider');
  }
  return context;
}