import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addbooks from './Add'

const Viewstudent = () => {
    var [update, setUpdate] = useState(false)
    var [selected, setSelected] = useState([])
    var [students, setStudents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                setStudents(students = response.data)
                console.log(response.data)
            })

            .catch()
    }, [])

    const updateValue = (value) => {
        setSelected(value);
        setUpdate(true);
    }
    const deleteValues = (id) => {
        console.log("d=elete clicked" + id)
        axios.delete("http://localhost:3005/students/" + id)
            .then((responce) => {
                console.log(responce.idvalue);
                alert("successfully deleted");
                window.location.reload(false);
            })
    }

    var finaljsx = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value, index) => {
                    return <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell>
                            <Button
                                onClick={() => deleteValues(value.id)}>Delete</Button>
                        </TableCell>
                        <TableCell><Button
                            onClick={() => updateValue(value)}>update</Button></TableCell>
                    </TableRow>
                })}

            </TableBody>
        </Table>
    </TableContainer>
    if(update)
    finaljsx=<Addbooks data={selected} method="put"/>
    

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            {finaljsx}
        </div>
    )
}

export default Addbooks
