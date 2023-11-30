import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getSkills = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const skills: AxiosResponse<ApiDataType> = await.get(
      baseUrl + '/skills'
    )
  } catch (error) {
    throw new Error(error)
  }
}

export const addSkills = async (
  formData: ISkills
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const skills: Omit<ISkills, '_id'> = {
      skill: formData.skill,
      description: formData.description,
      status: false,
    }
    const saveSkills: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-skills',
      skills
    )
    return saveSkills
  } catch (error) {
    throw new Error(error)
  }
}

export const updateSkills = async (
  formData: ISkills
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const skillsUpdate: Pick<ISkills, 'status'> = {
      status: true,
    }
    const updateSkills: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-skills/${skills._id}`,
      skillsUpdate
    )
    return updateSkills
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteSkills = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteSkills: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-skills/${_id}`
    )
    return deleteSkills
  } catch (error) {
    throw new Error(error)
  }
}