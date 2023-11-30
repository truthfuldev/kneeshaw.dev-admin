import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Card from "@/components/game/Card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game`,
  description: `${SITE_TITLE} - Game`
};

export default function Game() {
  return (
    <main className="flex flex-col gap-[10px] p-[150px]">
      <div className="mr-[20px]">
        <Link href="/game/create">
          <Button type="button" className="bg-[#36322f]">
            Add
          </Button>
        </Link>
      </div>
      <div className="flex flex-row gap-[20px]">
        <Card />
      </div>
    </main>
  );
}
