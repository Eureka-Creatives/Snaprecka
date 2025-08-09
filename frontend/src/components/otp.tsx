import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OTPSchema } from "@/schema/validation";
import { OTPdata } from "@/types/auth.types";
import { verifyOTP } from "@/service/logic/OTP";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function PasswordOTP() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPdata>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: OTPdata) => {
    const otp = data.otp;
    const result = await verifyOTP({ email: "", otp });
    if (result?.messageID) {
      toast.success(result.message || "OTP verified successfully", {
        duration: 1000,
        onAutoClose: () => {
          navigate("/");
        },
      });
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
          <CardTitle className="text-4xl">Verify OTP</CardTitle>
          <CardDescription>
            Enter the OTP sent to your email to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 mx-auto">
                <InputOTP maxLength={6}>
                  <InputOTPGroup className="flex gap-2 items-center justify-center">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        {...register(`otp`, {
                          required: "OTP is required",
                        })}
                        aria-invalid={errors.otp ? "true" : "false"}
                        className="w-14 h-14 text-center text-lg border-1 border-gray-300 rounded"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                {errors.otp && (
                  <span className="text-red-500 text-sm">
                    {errors.otp?.message || "OTP is required"}
                  </span>
                )}
              </div>

              <Button type="submit" className="w-full">
                Continue
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
