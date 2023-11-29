import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Layout from "./layout";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function SignIn() {
  return <Layout>SignIn</Layout>;
}
