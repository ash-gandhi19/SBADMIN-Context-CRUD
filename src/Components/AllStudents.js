import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { StudentsContext } from "../App";

function AllStudents() {
  let i = 1;
  let context = useContext(StudentsContext);
  //console.log(context);

  let handleDelete = (i) => {
    let newArray = [...context.students];
    newArray.splice(i, 1);
    context.setStudents(newArray);
  };

  return (
    <>
      <h1>All Students</h1>
      <Table striped borderd hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Batch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {context.students.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.class}</td>
                <td>
                  {/* <Button variant="secondary" onClick={()=>handleEdit(i)}>
                    Edit
                  </Button> */}
                  <Link to={`/edit-student/${i + 1}`}>
                    <Button variant="secondary">Edit</Button>
                  </Link>
                  <span>&nbsp;&nbsp;</span>
                  <Button variant="danger" onClick={() => handleDelete(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default AllStudents;
