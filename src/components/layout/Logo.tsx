"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <img
        className="min-h-[86px] min-w-[192px]"
        src={"/logo/logo-black.png"}
        alt="Logo"
      />
    </Link>
  );
}
