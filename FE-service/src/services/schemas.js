import { z } from "zod";

export const schemaUsers = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /\d/.test(val), {
        message: "Password must contain at least one digit",
      })
      .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: "Password must contain at least one special character",
      }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export const schemaPokemons = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  weight: z.coerce.number().gt(0, { message: "Weight must be number > 0" }),
  height: z.coerce.number().gt(0, { message: "Height must be number > 0" }),
  experience: z.coerce.number().gt(0, { message: "Experience must be number > 0" }),
});
