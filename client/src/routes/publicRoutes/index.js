import { Home } from "@pages";
import { AdminHome, AdminUsers, CreateUser } from "@pages";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/admin", component: AdminHome },
  { path: "/admin/users", component: AdminUsers },
  { path: "/admin/users/create", component: CreateUser },
  { path: "/admin/products", component: AdminHome },
  { path: "/admin/product/create", component: AdminHome }
];
