import React from "react";
import { Grid, Card, CardSide } from "@components";

const menuLinks = [
  {
    title: "Users",
    url: "/admin/users",
    color: "orange",
    children: [
      { title: "All users", url: "/admin/users" },
      { title: "Create user", url: "/admin/users/create" }
    ]
  },
  {
    title: "Categories",
    url: "/admin/products",
    color: "blue",
    children: [
      { title: "All products", url: "/admin/products" },
      { title: "Create product", url: "/admin/products/create" }
    ]
  },
  {
    title: "Products",
    url: "/admin/products",
    color: "green",
    children: [
      { title: "All products", url: "/admin/products" },
      { title: "Create product", url: "/admin/products/create" }
    ]
  }
];
const AdminHome = () => {
  return (
    <Grid
      style={{
        height: "100vh"
      }}
      container
      justify="center"
      alignItems="center"
    >
      {menuLinks.map((item, id) => (
        <Grid
          // style={{ margin: " 0 30px", background: "#fff" }}
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          {/* Card */}
          <Card>
            {/* Front side */}
            <CardSide color={item.color}>
              <h3> {item.title}</h3>
            </CardSide>

            {/* Back Side*/}
            <CardSide frontSide={false}>
              <Grid container direction="column">
                {item.children.map(submenu => (
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <a href={submenu.url}> {submenu.title}</a>
                  </Grid>
                ))}
              </Grid>
            </CardSide>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default AdminHome;
