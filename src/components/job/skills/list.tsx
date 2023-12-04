"use client";

import { useEffect, useState } from "react";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getAllJobSkills } from "@/app/api/JobSkillService";
import JobSkillCreateDialog from "./CreateDialog";

export default function JobSkillsList() {
  const [skills, setSkills] = useState<IJobSkill[]>([]);

  const initialize = async () => {
    const res = await getAllJobSkills();
    setSkills(res.data.data);
  };

  const handleCreated = () => {
    initialize();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <JobSkillCreateDialog onCreated={handleCreated} />

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">No</TableHead>
            <TableHead className="w-[15%] text-center">Skill</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {skills.map((skill, index) => (
            <TableRow key={skill._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{skill.name}</TableCell>
              <TableCell>{skill.description}</TableCell>
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
    </>
  );
}
