import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game`,
  description: `${SITE_TITLE} - Game`
};

export default function Game() {
  return <>Game</>;
}
