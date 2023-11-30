import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Period`,
  description: `${SITE_TITLE} - Period`
};

const period = [
  {
    id: "1",
    skill: "0 ~ 1 month",
    description: "description1"
  },
  {
    id: "2",
    skill: "1 ~ 3 months",
    description: "description2"
  },
  {
    id: "3",
    skill: "3 ~ 6 months",
    description: "description3"
  }
];

export default function Period() {
  return (
    <section className="mt-[50px] flex flex-col gap-[20px]">
      <div className="mr-[20px] flex justify-end">
        <Button type="button" variant="outline">
          Add
        </Button>
      </div>

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Period</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {period.map((period) => (
            <TableRow key={period.id}>
              <TableCell className="font-medium">{period.id}</TableCell>
              <TableCell>{period.skill}</TableCell>
              <TableCell>{period.description}</TableCell>
              <TableCell className="flex flex-row items-center justify-center gap-[20px]">
                <Button className="bg-transparent hover:border hover:bg-transparent">
                  <HiOutlinePencilSquare className="text-lg text-black" />
                </Button>

                <Button className="bg-transparent hover:border hover:bg-transparent">
                  <MdDeleteOutline className="text-xl text-black" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
