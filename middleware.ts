import authConfig from "./auth.config";
import NextAuth from "next-auth";


import { privateRoutes } from "./route";
const { auth } = NextAuth(authConfig);

export default auth(async (req) => {

  console.log("profile, ",req.auth)
  const url = "http://localhost:3000";
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/auth");
  const isApiRoute = nextUrl.pathname.includes("/api");
  if (isApiRoute) {
    return;
  }
  if(isLoggedIn && isAuthRoute){
    return Response.redirect(`${url}/user/profile`)
  }
  if (!isLoggedIn && isPrivateRoute  ) {
    return Response.redirect(`${url}/auth/login`);
  }

});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
