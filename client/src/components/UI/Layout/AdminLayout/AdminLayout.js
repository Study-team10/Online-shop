import React from "react";
import { Grid, SidebarMenu } from "@components";
import { StyledGrid } from "@components/UI/Grid/Grid";
import styled from "styled-components";

const Layout = styled(StyledGrid)`
  height: 100vh;
  background-image: linear-gradient(45deg, black, #365ca0);
`;

const AdminLayout = ({ children }) => {
  return (
    <Layout container>
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
        <SidebarMenu />
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
        {children}
      </Grid>
    </Layout>
  );
};

export default AdminLayout;
