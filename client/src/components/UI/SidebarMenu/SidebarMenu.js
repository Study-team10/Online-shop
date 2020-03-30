import React from "react";
import { Grid, Card, CardSide } from "@components";
import UserIcon from "@assets/static/icons/user_male.png";
import CategoryIcon from "@assets/static/icons/category.png";
import ProductIcon from "@assets/static/icons/product.png";

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
const SidebarMenu = () => {
  return (
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
  );
};

export default SidebarMenu;
