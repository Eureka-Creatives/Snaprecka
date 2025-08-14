import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string().min(1, { message: "Firstname is required" }),
    lastName: z.string().min(1, { message: "Lastname is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().min(8, {
    message: "New Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password must be at least 8 characters long",
  }),
});
export const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: "OTP must be at least 6 characters long",
  }),
  email: z.string().email().optional(),
});
