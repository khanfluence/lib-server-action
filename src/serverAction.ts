"use server";

import { cookies } from "next/headers";

export async function serverAction() {
  cookies().set("key", "value");
}
