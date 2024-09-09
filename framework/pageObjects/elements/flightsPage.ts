import { Page, Locator } from "@playwright/test";

export class PageFooter {
  oneWayRadioButton: Locator;
  roundTripRadioButton: Locator;
  flightFromInput: Locator;
  flightToInput: Locator;
  departDateInput: Locator;
  returnDateInput: Locator;
  travellersInput: Locator;
  searchButton: Locator;
  selectFlightClass: Locator;
  backToSearchButton: Locator;
  changeDestinations: Locator;

  constructor(page: Page) {
    this.oneWayRadioButton = page.getByLabel("One Way");
    this.roundTripRadioButton = page.getByLabel("Round Trip");
    this.flightFromInput = page.getByRole("combobox", {});
    this.flightToInput = page.getByRole("", {});
    this.departDateInput = page.locator("#departure");
    this.returnDateInput = page.locator("#return_date");
    this.travellersInput = page.getByRole("button", { name: "Travellers" });
    this.searchButton = page.locator("#flights-search");
    this.selectFlightClass = page.locator("#flight_type");
    this.backToSearchButton = page.getByRole("link", {
      name: "Back To Search",
    });
    this.changeDestinations = page.locator("#swap div");
  }
}
