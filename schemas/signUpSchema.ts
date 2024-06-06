import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(
    /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*$/,
    "Username must be alphanumeric, with optional underscores and dashes"
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email address " }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
