import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex h-dvh">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/login-image.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-black">
              <h2 className="text-4xl font-bold mb-4 text-center">
                Welcome to Doppio&apos;s
              </h2>
              <p className="text-xl text-center max-w-md">
                Your trusted computer repair shop in the City
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full" size="lg" variant="secondary">
              <LoginLink className="w-full">Sign In</LoginLink>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
