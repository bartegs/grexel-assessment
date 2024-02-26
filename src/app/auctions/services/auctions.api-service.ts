import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Auction } from "../models";

@Injectable({
  providedIn: "root",
})
export class AuctionsApiService {
  private readonly API_URL =
    "https://auctionapitest.grexel.com/auction/publicauctionapi/Auctions";

  constructor(private _httpClient: HttpClient) {}

  public getAuctions(): Observable<Auction[]> {
    return this._httpClient.get<Auction[]>(`${this.API_URL}`, {
      headers: {
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "X-Frame-Options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin",
        "Content-Security-Policy": "default-src 'self'",
      },
    });
  }
}
