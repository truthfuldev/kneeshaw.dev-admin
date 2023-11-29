import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};

export default function User() {
  return (
    <main className="h-[100vh] bg-[#211E19] p-[100px]">
      <Table className="text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>UserName</TableHead>
            <TableHead>Role</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>Ivan Kovalenko</TableCell>
            <TableCell>ivan@gmail.com</TableCell>
            <TableCell>Ivan</TableCell>
            <TableCell>Developer</TableCell>
            <TableCell className="text-right">
              <Link href="/user/id">
                <button className="w-[55px] rounded-lg border-black bg-white p-[3px] text-black">
                  edit
                </button>
              </Link>

              <button className="ml-[10px] w-[55px] rounded-lg border-black bg-white p-[3px] text-black">
                delete
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
