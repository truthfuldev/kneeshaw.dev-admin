import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`
};

export default function Blog() {
  return <>Blog</>;
}
