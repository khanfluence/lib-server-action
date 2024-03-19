"use client";

import { serverAction } from "./serverAction";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    serverAction();
  }, []);
  return null;
}
