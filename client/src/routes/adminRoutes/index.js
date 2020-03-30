import { AdminHome, AdminUsers, CreateUser } from "@pages";

export const adminRoutes = [
  { path: "/admin", component: AdminHome },
  { path: "/admin/users", component: AdminUsers },
  { path: "/admin/users/create", component: CreateUser },
  { path: "/admin/products", component: AdminHome },
  { path: "/admin/product/create", component: AdminHome }
];
