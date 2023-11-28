import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Dashboard`,
  description: `${SITE_TITLE} - Dashboard`
};

export default function Dashboard() {
  return <>Dashboard</>;
}
