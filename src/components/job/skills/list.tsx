"use client";

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
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getAllJobSkills } from "@/app/api/JobSkillService";
import { useEffect } from "react";

const skills = [
  {
    id: "1",
    skill: "Unity",
    description: "description1"
  },
  {
    id: "2",
    skill: "SEO",
    description: "description2"
  },
  {
    id: "3",
    skill: "React",
    description: "description3"
  },
  {
    id: "4",
    skill: "Angular",
    description: "description4"
  },
  {
    id: "5",
    skill: "Vue.js",
    description: "description5"
  },
  {
    id: "6",
    skill: "Laravel",
    description: "description6"
  },
  {
    id: "7",
    skill: "Adobe XD",
    description: "description7"
  },
  {
    id: "8",
    skill: "Web Design",
    description: "description8"
  }
];

export default function JobSkillsList() {
  const initialize = async () => {
    const res = await getAllJobSkills();
    console.log("res: ", res);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <div className="mr-[20px] flex justify-end">
        <Button type="button">
          <FaPlus className="text-md" />
          <span className="ml-[5px] text-[16px]">Add</span>
        </Button>
      </div>

      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[5%] text-center">ID</TableHead>
            <TableHead className="w-[15%] text-center">Skill</TableHead>
            <TableHead className="w-[65%] text-center">Description</TableHead>
            <TableHead colSpan={2} className="w-[15%] text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.id}>
              <TableCell className="font-medium">{skill.id}</TableCell>
              <TableCell>{skill.skill}</TableCell>
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
