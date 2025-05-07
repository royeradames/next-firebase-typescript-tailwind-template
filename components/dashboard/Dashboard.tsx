import React from "react";
import Shell from "../shell";
import Content from "../content/Content";
import dynamic from 'next/dynamic';

const DashboardContent = () => {
  return (
    <>
      <Shell>
        <Content title="Dashboard">
          <>Dashboard</>
        </Content>
      </Shell>
    </>
  );
};

export default dynamic(() => Promise.resolve(DashboardContent), { ssr: false });
