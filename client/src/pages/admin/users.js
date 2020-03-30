import React, { useState, useEffect } from "react";
import { Grid, Spinner, Heading } from "@components";
import styled from "styled-components";
import { StyledGrid } from "@components/UI/Grid/Grid";
import { withTokenAxios } from "@util";
import DeleteIcon from "@assets/static/icons/delete.png";

const TableHeading = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(32, 54, 93);
`;

const TableMainRow = styled(StyledGrid)`
  border: 1px solid rgb(81, 77, 251);
`;
const AdminUsers = () => {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    try {
      const result = await withTokenAxios.get("/user/getallusers");

      setUsers(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async id => {
    console.log(id);
    try {
      await withTokenAxios.delete(`/user/deleteuser/${id}`);
      getUsers();
    } catch (error) {}
  };
  if (!users) {
    return <Spinner />;
  }

  const TableMainRows = [
    {
      name: "name",
      colsProps: { xs: 12, sm: 3, md: 3, lg: 3, xl: 3 }
    },
    { name: "email", colsProps: { xs: 12, sm: 3, md: 3, lg: 3, xl: 3 } },
    { name: "role", colsProps: { xs: 12, sm: 3, md: 3, lg: 3, xl: 3 } },
    { name: "age", colsProps: { xs: 12, sm: 2, md: 2, lg: 2, xl: 2 } },
    { name: "actions", colsProps: { xs: 12, sm: 1, md: 1, lg: 1, xl: 1 } }
  ];

  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Heading>Users List</Heading>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid
          container
          justify="space-between"
          style={{
            backgroundImage: "linear-gradient(45deg, #FFC107, #FF9800)",
            textAlign: "center"
          }}
        >
          {TableMainRows.map(({ name, colsProps: { xs, sm, md, lg, xl } }) => (
            <TableMainRow key={name} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TableHeading>{name}</TableHeading>
            </TableMainRow>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {users.map(user => (
          <Grid
            key={user._id}
            container
            justify="space-between"
            style={{
              color: "rgb(158, 200, 255)",
              border: "1px solid rgb(81, 77, 251)"
            }}
          >
            <Grid
              style={{
                textAlign: "center"
              }}
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
            >
              {user.firstName} {user.lastName}
            </Grid>
            <Grid
              style={{
                textAlign: "center"
              }}
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
            >
              {user.email}
            </Grid>
            <Grid
              style={{
                textAlign: "center"
              }}
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
            >
              {user.role}
            </Grid>
            <Grid
              style={{
                textAlign: "center"
              }}
              item
              xs={12}
              sm={2}
              md={2}
              lg={2}
              xl={2}
            >
              {user.age}
            </Grid>
            <Grid
              style={{
                textAlign: "center"
              }}
              item
              xs={12}
              sm={1}
              md={1}
              lg={1}
              xl={1}
            >
              <img
                onClick={() => deleteUser(user._id)}
                style={{ width: "20px", cursor: "pointer" }}
                src={DeleteIcon}
                alt="delete user"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default AdminUsers;
