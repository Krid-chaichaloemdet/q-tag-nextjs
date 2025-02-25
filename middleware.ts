import authConfig from "./auth.config";
import NextAuth from "next-auth";

import { privateRoutes } from "./route";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const url = "http://localhost:3000";
  const isLoggedIn = !!req.auth;

  const { nextUrl } = req;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

  const isAuthRoute = nextUrl.pathname.includes("/auth");
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) {
    return;
  }
  console.log(isLoggedIn)
  if(isLoggedIn && isAuthRoute){
    return Response.redirect(`http://localhost:3000/user/profile`)
  }
  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(`${url}/auth/login`);
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
