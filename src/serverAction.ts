"use server";

import { cookies } from "next/headers";

export async function serverAction() {
  console.log("lib server action");
  cookies().set("key", "value");
}
