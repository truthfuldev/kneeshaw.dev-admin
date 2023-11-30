import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
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

            <TableCell className="flex flex-row items-center justify-center gap-[20px]">
              <Link href="user/1">
                <Button className="bg-transparent hover:border hover:bg-transparent">
                  <HiOutlinePencilSquare className="text-lg text-black" />
                </Button>
              </Link>

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-transparent hover:border hover:bg-transparent">
                    <MdDeleteOutline className="text-xl text-black" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      Are you sure want to delete?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>no</AlertDialogCancel>
                    <AlertDialogAction>yes</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
