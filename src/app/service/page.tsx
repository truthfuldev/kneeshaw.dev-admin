import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Service`,
  description: `${SITE_TITLE} - Service`
};

export default function Service() {
  return <>Service</>;
}
