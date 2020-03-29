import React, { useState, useEffect } from "react";
import { Grid, Card, CardSide, Spinner, Heading } from "@components";
import styled from "styled-components";
import { withTokenAxios } from "@util";
import UserIcon from "@assets/static/icons/user_male.png";
import CategoryIcon from "@assets/static/icons/category.png";
import ProductIcon from "@assets/static/icons/product.png";
import DeleteIcon from "@assets/static/icons/delete.png";

const menuLinks = [
  {
    title: "Users",
    url: "/admin/users",
    color: "orange",
    icon: UserIcon,
    children: [
      { title: "All users", url: "/admin/users" },
      { title: "Create user", url: "/admin/users/create" }
    ]
  },
  {
    title: "Categories",
    url: "/admin/products",
    color: "blue",
    icon: CategoryIcon,
    children: [
      { title: "All products", url: "/admin/products" },
      { title: "Create product", url: "/admin/products/create" }
    ]
  },
  {
    title: "Products",
    url: "/admin/products",
    color: "green",
    icon: ProductIcon,
    children: [
      { title: "All products", url: "/admin/products" },
      { title: "Create product", url: "/admin/products/create" }
    ]
  }
];

const TableHeading = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(32, 54, 93);
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
  return (
    <Grid
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(45deg, black, #365ca0)"
      }}
      container
    >
      <Grid
        style={{
          height: "100%",
          backgroundColor: "#fff"
        }}
        item
        xs={12}
        sm={4}
        md={4}
        lg={3}
        xl={3}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {menuLinks.map((item, i) => (
              <Grid key={i} item xs={12} sm={12} md={12} lg={12} xl={12}>
                {/* Card */}
                <Card sidebar>
                  {/* Front side */}
                  <CardSide color={item.color}>
                    <Grid container direction="column">
                      <Grid
                        style={{ textAlign: "center" }}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                        <img
                          style={{ height: "100px" }}
                          src={item.icon}
                          alt={item.title}
                        />
                      </Grid>
                      <Grid
                        style={{ textAlign: "center" }}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                        <h3> {item.title}</h3>
                      </Grid>
                    </Grid>
                  </CardSide>

                  {/* Back Side*/}
                  <CardSide frontSide={false}>
                    <Grid container direction="column">
                      {item.children.map((submenu, index) => (
                        <Grid
                          key={index}
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                        >
                          <a href={submenu.url}> {submenu.title}</a>
                        </Grid>
                      ))}
                    </Grid>
                  </CardSide>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        lg={9}
        xl={9}
        style={{ padding: "30px" }}
      >
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
              <Grid
                style={{ border: "1px solid rgb(81, 77, 251)" }}
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
              >
                <TableHeading>Name</TableHeading>
              </Grid>
              <Grid
                style={{ border: "1px solid rgb(81, 77, 251)" }}
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
              >
                <TableHeading>Email</TableHeading>
              </Grid>
              <Grid
                style={{ border: "1px solid rgb(81, 77, 251)" }}
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
              >
                <TableHeading>Role</TableHeading>
              </Grid>
              <Grid
                style={{ border: "1px solid rgb(81, 77, 251)" }}
                item
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
              >
                <TableHeading>Age</TableHeading>
              </Grid>
              <Grid
                style={{ border: "1px solid rgb(81, 77, 251)" }}
                item
                xs={12}
                sm={1}
                md={1}
                lg={1}
                xl={1}
              >
                <TableHeading>Actions</TableHeading>
              </Grid>
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
      </Grid>
    </Grid>
  );
};
export default AdminUsers;
