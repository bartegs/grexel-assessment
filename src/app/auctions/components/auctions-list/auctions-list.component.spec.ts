import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AuctionsListComponent } from "./auctions-list.component";
import { provideAnimations } from "@angular/platform-browser/animations";

describe("AuctionsListComponent", () => {
  let component: AuctionsListComponent;
  let fixture: ComponentFixture<AuctionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionsListComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain a correct header", () => {
    const correctHeader = "Upcoming Auctions";

    const AuctionsListComponent: HTMLElement = fixture.nativeElement;
    expect(AuctionsListComponent.textContent).toContain(correctHeader);
  });
});
