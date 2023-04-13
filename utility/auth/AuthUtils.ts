import { PROTECTED_ROUTES } from "@/config/constants";

export const isProtectedRouteCheck = (
  pathname: string | null | undefined
): boolean => {
  if (pathname && PROTECTED_ROUTES.includes(pathname)) return true;
  return false;
};
