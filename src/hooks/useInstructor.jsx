import { useEffect, useState } from "react"

const useInstructor = email => {
    console.log(email);
    const [isInstructor, setIsInstructor] = useState(false);
    console.log(isInstructor);
    const [isInstructorLoading, setIsInstructorLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/instructor/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsInstructor(data.inInstructor);
                    console.log(isInstructor);
                    setIsInstructorLoading(false);
                })
        }
    }, [email])

    return [isInstructor, isInstructorLoading]
}

export default useInstructor;