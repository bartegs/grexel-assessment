import { Observable } from "rxjs";
import { AuctionsApiService } from "./auctions.api-service";
import { Auction } from "../models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuctionsService {
  constructor(private _auctionsApiService: AuctionsApiService) {}

  public getAuctions(): Observable<Auction[]> {
    return this._auctionsApiService.getAuctions();
  }
}
