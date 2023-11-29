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
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User`,
  description: `${SITE_TITLE} - User`
};

export default function User() {
  return (
    <main className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>Full Name</TableHead>
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
            <TableCell className="flex flex-row gap-[20px] text-right">
              <Link href="/user/id">
                <FaPencil />
              </Link>
              <MdDelete />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
