import React from "react";

const students = [
    {
        name: "Hong gil-dong"
    },
    {
        name: "Connie"
    },
    {
        name: "Steve"
    },
    {
        name: "Iron man"
    }
]

export default function AttendanceBook(props) {
    return (
        <ul>
            {students.map(student => {
                return <li>{student.name}</li>
            })}
        </ul>
    )
}
