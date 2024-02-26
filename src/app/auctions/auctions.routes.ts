import { Route } from "@angular/router";
import { AuctionsListComponent } from "./components/auctions-list/auctions-list.component";

export const AUCTIONS_ROUTES: Route[] = [
  {
    path: "",
    component: AuctionsListComponent,
  },
];
