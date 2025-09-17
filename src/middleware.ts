import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async (req: NextRequest) => {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith("/api/auth")) {
      return NextResponse.next();
    }
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login).*)",
  ],
};
