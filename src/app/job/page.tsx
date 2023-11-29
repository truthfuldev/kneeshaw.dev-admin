import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Layout from "./layout";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job`,
  description: `${SITE_TITLE} - Job`
};

export default function Job() {
  return <>Job</>;
}