import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import SwitchBar from "@/components/job/SwitchBar";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Layout`,
  description: `${SITE_TITLE} - Layout`
};

export default function Layout({ children }: any) {
  return (
    <>
      <SwitchBar />
      {children}
    </>
  );
}
