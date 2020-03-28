import React, { useState, useEffect } from "react";
import { LoginForm, SignupForm } from "@forms";
import { Grid } from "@components";
import styled from "styled-components";
import { axios } from "@util";

const Accordion = styled.ul`
  width: 100%;
  /* max-width: 360px; */
  margin: 30px auto 20px;
  background: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  list-style-type: none;
  padding: 0;

  & .link {
    cursor: pointer;
    display: block;
    padding: 15px 15px 15px 42px;
    color: #4d4d4d;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid #ccc;
    position: relative;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  & li:last-child .link {
    border-bottom: 0;
  }

  & li i {
    position: absolute;
    top: 16px;
    left: 12px;
    font-size: 18px;
    color: #595959;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  & li i.fa-chevron-down {
    right: 12px;
    left: auto;
    font-size: 16px;
  }

  & li.open .link {
    color: #b63b4d;
  }

  & li.open i {
    color: #b63b4d;
  }

  & li.open i.fa-chevron-down {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;

const Submenu = styled.ul`
  background-image: linear-gradient(to bottom left, black, rgb(54, 92, 160));
  font-size: 14px;
  list-style-type: none;
  padding: 0;
  display: none;

  &.active {
    display: block;
  }
  & li {
    border-bottom: 1px solid #4b4a5e;
  }

  & a {
    display: block;
    text-decoration: none;
    color: #d9d9d9;
    padding: 12px;
    padding-left: 42px;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  & a:hover {
    background: #b63b4d;
    color: #fff;
  }
`;

const menuLinks = [
  {
    title: "Users",
    url: "/admin/users",
    children: [
      { title: "All users", url: "/admin/users" },
      { title: "Create user", url: "/admin/users/create" }
    ]
  },
  {
    title: "Products",
    url: "/admin/products",
    children: [
      { title: "All products", url: "/admin/products" },
      { title: "Create product", url: "/admin/products/create" }
    ]
  }
];
const AdminUsers = () => {
  const [showSubmenu, setShowSubmenu] = useState("");
  const toggleSubmenu = id => {
    console.log(id);
    showSubmenu === id ? setShowSubmenu("") : setShowSubmenu(id);
  };
  useEffect(() => {
    const users = async () => {
      try {
        const result = await axios.get("/user/getallusers");
        console.log(result);
      } catch (error) {}
    };

    users();
  }, []);

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
            <Accordion id="accordion" className="accordion">
              {menuLinks.map((item, id) => (
                <li onClick={() => toggleSubmenu(id)} key={id}>
                  <div className="link">
                    <i className="fa fa-database"></i>
                    {item.title}
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  {item.children && (
                    <Submenu
                      className={
                        showSubmenu === id ? "active submenu" : "submenu"
                      }
                    >
                      {item.children.map((item, i) => (
                        <li key={i}>
                          <a href={item.url}>{item.title}</a>
                        </li>
                      ))}
                    </Submenu>
                  )}
                </li>
              ))}
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
        <Grid container>
          <h1>Users List!</h1>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AdminUsers;
