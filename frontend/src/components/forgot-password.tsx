import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/schema/validation";
import { forgotPasswordFormData } from "@/types/auth.types";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function ForgotPassword() {
  const { isLoading, forgotPassword } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: forgotPasswordFormData) => {
    console.log(data);
    const result = await forgotPassword(data);
    if (result?.messageId) {
      toast.success(result?.message || "OTP sent successfully", {
        duration: 1000,
        onAutoClose: () => {
          navigate("/auth/verify-otp", {
            state: { email: data.email },
          });
        },
      });
    } else {
      toast.error(result?.message || "Failed to send reset link");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full h-full justify-center items-center rounded-2xl"
      )}
    >
      <Card className="w-md shadow-none border-none bg-transparent ">
        <CardHeader>
          <CardTitle className="text-4xl">Forgot Password</CardTitle>
          <CardDescription>
            We've all been there, Enter your email below and we'll send you a
            reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email?.message || "Email is required"}
                  </span>
                )}
              </div>

              <Button type="submit" className="w-full">
                {isLoading ? "Verifying" : "Continue"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Did you find or remember you password?{" "}
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
