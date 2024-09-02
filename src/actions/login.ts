"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function login(values: z.infer<typeof schema>) {
  // proceeds to login

  const fetcher = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const response = await fetcher.json();

  if (!response.isSuccess) {
    throw new Error(JSON.stringify(response.errors));
  }

  return response;
}
