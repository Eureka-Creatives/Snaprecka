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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/schema/validation";
import { resetPasswordData } from "@/types/auth.types";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

export default function PasswordReset() {
  const location = useLocation();
  const { isLoading, resetPassword } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: location.state?.email || "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: resetPasswordData) => {
    const result = await resetPassword(data);
    if (result?.message) {
      toast.success(result?.message || "Password reset successfully", {
        duration: 1000,
        onAutoClose: () => {
          navigate("/auth/login");
        },
      });
    } else {
      toast.error(result?.error || "Failed to reset password");
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
          <CardTitle className="text-4xl">Reset Password</CardTitle>
          <CardDescription>Enter your new password below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Enter your new password"
                  {...register("newPassword")}
                  aria-invalid={errors.newPassword ? "true" : "false"}
                  className=""
                />
                {errors.newPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.newPassword?.message || "New Password is required"}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  required
                  {...register("confirmPassword")}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword?.message ||
                      "Confirm Password is required"}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
