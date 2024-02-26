import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "auctions",
    loadChildren: () =>
      import("./auctions/auctions.routes").then((m) => m.AUCTIONS_ROUTES),
  },
];
