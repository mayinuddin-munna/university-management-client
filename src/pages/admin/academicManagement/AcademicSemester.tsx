import { useGetAllSemesterQuery } from "../../../redux/features/auth/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  
  return (
    <>
      <p>Academic Semester</p>
    </>
  );
};

export default AcademicSemester;
