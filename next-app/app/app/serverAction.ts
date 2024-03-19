"use server";

import { cookies } from "next/headers";

export async function serverAction() {
  console.log("app server action");
  cookies().set("key", "value");
}
