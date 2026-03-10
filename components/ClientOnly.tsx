"use client";

import { useSyncExternalStore } from "react";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const hasMounted = useSyncExternalStore(
    () => () => {}, // subscribe (no-op)
    () => true,     // client snapshot
    () => false     // server snapshot
  );

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}