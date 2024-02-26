import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { GridModule } from "@progress/kendo-angular-grid";
import { Auction } from "../../models";
import { Observable, map } from "rxjs";
import { AuctionsService } from "../../services";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";

@Component({
  selector: "app-auctions-list",
  standalone: true,
  imports: [GridModule, IndicatorsModule, CommonModule, HttpClientModule],
  templateUrl: "./auctions-list.component.html",
  styleUrl: "./auctions-list.component.scss",
  providers: [AuctionsService],
  encapsulation: ViewEncapsulation.None,
})
export class AuctionsListComponent implements OnInit {
  public auctions$!: Observable<Auction[]>;

  constructor(private _auctionsService: AuctionsService) {}

  public ngOnInit(): void {
    this._initializeAuctions();
  }

  private _initializeAuctions(): void {
    this.auctions$ = this._auctionsService.getAuctions().pipe(
      map((auctions: Auction[]) => {
        // auctions are mapped through pipe to convert the dates
        return auctions.map((auction) => {
          return {
            ...auction,
            AuctionItem: {
              ...auction.AuctionItem,
              ProductionPeriodStart: new Date(
                auction.AuctionItem.ProductionPeriodStart ?? ""
              ),
              ProductionPeriodEnd: new Date(
                auction.AuctionItem.ProductionPeriodEnd ?? ""
              ),
            },
            StartDate: new Date(auction.StartDate ?? ""),
            EndDate: new Date(auction.EndDate ?? ""),
          } as unknown as Auction;
        });
      })
    );
  }
}
