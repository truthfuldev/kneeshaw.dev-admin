import axiosInstance from "./axiosInstance";

const getAllJobSkills = () => axiosInstance.get(`/job/skill`);

export { getAllJobSkills };
