import React from 'react';
import dynamic from 'next/dynamic';

export function ManagerDashboardScreen() {
  const PowerBIComponentWithNoSSR = dynamic(
    () => import('../../../../common/PowerBI/AlertsDashboard'),
    { ssr: false }
  );

  return <PowerBIComponentWithNoSSR />;
}
