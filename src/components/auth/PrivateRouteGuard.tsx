"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { commonLabels, getItem } from "@/components/constants/Common";
import { getDefaultPublicRoute } from "@/lib/config/routesConfig";

interface PrivateRouteGuardProps {
  children: React.ReactNode;
}

export default function PrivateRouteGuard({
  children,
}: PrivateRouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = getItem(commonLabels.token);

    if (!token) {
      router.replace(getDefaultPublicRoute());
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [router, pathname]);

  // Return null during SSR and initial client render to prevent hydration mismatch
  if (isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
