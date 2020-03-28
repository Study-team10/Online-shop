import { Home } from "@pages";
import { AdminHome, AdminUsers } from "@pages";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/admin", component: AdminHome },
  { path: "/admin/users", component: AdminUsers },
  { path: "/admin/user/create", component: AdminHome },
  { path: "/admin/products", component: AdminHome },
  { path: "/admin/product/create", component: AdminHome }
];
