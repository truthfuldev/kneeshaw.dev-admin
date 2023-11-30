import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Card from "@/components/game/Card";
import AddCard from "@/components/game/AddCard";
import Link from "next/link";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game`,
  description: `${SITE_TITLE} - Game`
};

export default function Game() {
  return (
    <main className="flex flex-row gap-[10px] p-[150px]">
      <Card />
      <Link href="/game/create">
        <AddCard />
      </Link>
    </main>
  );
}
