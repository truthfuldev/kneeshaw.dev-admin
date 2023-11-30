// import React, { useState } from "react";

// type Props = {
//   saveSkills: (e: React.FormEvent, formData: ISkills | any) => void;
// };

// const AddSkills: React.FC<Props> = ({ saveSkills }) => {
//   const [formData, setFormData] = useState<ISkills | {}>();

//   const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
//     setFormData({
//       ...formData,
//       [e.currentTarget.id]: e.currentTarget.value
//     });
//   };

//   return (
//     <form className="Form" onSubmit={(e) => saveSkills(e, formData)}>
//       <div>
//         <div>
//           <label htmlFor="name">Skill</label>
//           <input onChange={handleForm} type="text" id="name" />
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <input onChange={handleForm} type="text" id="description" />
//         </div>
//       </div>
//       <button disabled={formData === undefined ? true : false}>
//         Add Skills
//       </button>
//     </form>
//   );
// };

// export default AddSkills;
