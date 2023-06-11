import { useEffect, useState } from "react";

const useInstructor = (email) => {
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);
  useEffect(() => {
    console.log('before fetch');
    if (email) {
      fetch(`http://localhost:5000/users/instructor/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.isInstructor);
        
        console.log("apter fetch");
          setIsInstructorLoading(false);
        });
    }
  }, [email]);
console.log(isInstructor);
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
