import { useEffect, useState } from "react"

const useStudent = email => {
    console.log(email);
    const [isStudent, setIsStudent] = useState(false);
    const [isStudentLoading, setIsStudentLoading] = useState(true);
    console.log(isStudent);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/student/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsStudent(data.isStudent);
                    console.log(isStudent);
                    setIsStudentLoading(false);
                })
        }
    }, [email])
    return [isStudent, isStudentLoading]
}

export default useStudent;