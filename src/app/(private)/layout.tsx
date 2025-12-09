import PrivateRouteGuard from "@/components/auth/PrivateRouteGuard";
import DashboardLayout from "@/components/layout/DashboardLayout";

// Force dynamic rendering for all private routes to prevent hydration issues
export const dynamic = 'force-dynamic';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivateRouteGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </PrivateRouteGuard>
  );
}
