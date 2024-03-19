"use client";

import { serverAction } from "lib-server-action/serverAction";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    serverAction();
  }, []);
  return null;
}
