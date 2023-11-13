import React from "react";

const students = [
    {
        id: 1,
        name: "Hong gil-dong"
    },
    {
        id: 2,
        name: "Connie"
    },
    {
        id: 3,
        name: "Steve"
    },
    {
        id: 4,
        name: "Iron man"
    }
]

export default function AttendanceBook(props) {
    return (
        <ul>
            {students.map(student => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}
