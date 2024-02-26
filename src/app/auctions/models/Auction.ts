interface AuctionItem {
  AuctionItemType: string | null;
  ProductionPeriodStart: string | null;
  ProductionPeriodEnd: string | null;
  EnergySourceCode: string | null;
  TechnologyCode: string | null;
  CO2RemovalMethodCode: string | null;
  Country: string | null;
  Volume: number | null;
}

interface AuctionResult {
  AllocatedVolume: number | null;
  PriceAverage: number | null;
  PriceLowerLimit: number | null;
  PriceUpperLimit: number | null;
  NumberOfBids: number | null;
  NumberOfSuccessfulBids: number | null;
  NumberOfBidders: number | null;
  NumberOfSuccessfulBidders: number | null;
}

export interface Auction {
  OrganizationId: string | null;
  AuctionOwnerName: string | null;
  AuctionName: string | null;
  AuctionType: string | null;
  Description: string | null;
  StartDate: string | null;
  EndDate: string | null;
  Status: string | null;
  BidAllocationStatus: string | null;
  FloorPrice: number | null;
  AuctionItem: AuctionItem;
  AuctionStatistics: string | number | null;
  AuctionResult: AuctionResult;
  AuctionId: string | null;
}
