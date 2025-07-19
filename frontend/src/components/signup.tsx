import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signupFormData } from "@/types/auth.types";
import { signupSchema } from "@/schema/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full justify-center  items-center rounded-2xl"
      )}
    >
      <Card className="border-none shadow-none bg-transparent w-lg">
        <CardHeader>
          <CardTitle className="text-4xl">Signup</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="flex flex-col gap-6">
              <div
                className={`grid  grid-cols-2 gap-2 relative ${
                  errors.firstName ? "mb-4" : ""
                }`}
              >
                <div className="grid gap-2">
                  <Label htmlFor="firstname">Firstname</Label>
                  <Input
                    id="firstname"
                    type="firstname"
                    {...register("firstName")}
                    placeholder="John"
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs absolute -bottom-6">
                      {errors.firstName?.message || "Firstname is required"}
                    </span>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="lastname">Lastname</Label>
                  <Input
                    id="lastname"
                    type="lastname"
                    {...register("lastName")}
                    placeholder="Daniel"
                    aria-invalid={errors.lastName ? "true" : "false"}
                  />
                </div>
                {errors.lastName && (
                  <span className="text-red-500 text-xs absolute -bottom-6 right-0">
                    {errors.lastName.message || "Lastname is required"}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="m@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message || "Email is required"}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password?.message ||
                      "Password must be at least 8 characters long"}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  {...register("confirmPassword")}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message ||
                      "Confirm Password must be at least 8 characters long"}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full h-11 cursor-pointer">
                Sign up
              </Button>
              <Button variant="outline" className="w-full h-11 cursor-pointer">
                Sign up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
