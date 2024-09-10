import { Page, Locator } from "@playwright/test";
import { Footer } from "./elements/footer";
import { Header } from "./elements/header";

export class FlightsPage {
  searchForm: {
    oneWayRadioButton: Locator;
    roundTripRadioButton: Locator;
    flightFromInput: Locator;
    flightToInput: Locator;
    departDateInput: Locator;
    returnDateInput: Locator;
    travellersInput: Locator;
    searchButton: Locator;
    flightClassSelect: Locator;
    backToSearchButton: Locator;
    changeDestinations: Locator;
  };
  page: Page;
  footer: Footer;
  header: Header;
  flightStops: { allflight: Locator; direct: Locator; stops_1: Locator };
  priceRange: { fromNumber: Locator; toNumber: Locator };
  resultsArea: {
    title: Locator;
    lowersPriceSorting: Locator;
    highestPriceSorting: Locator;
    listOfResults: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.footer = new Footer(page);
    this.header = new Header(page);
    this.searchForm = {
      oneWayRadioButton: page.getByLabel("One Way"),
      roundTripRadioButton: page.getByLabel("Round Trip"),
      flightFromInput: page.locator(".input-items from_flights"),
      flightToInput: page.locator(".input-items flights_arrival to_flights"),
      departDateInput: page.locator("#departure"),
      returnDateInput: page.locator("#return_date"),
      travellersInput: page.getByRole("button", { name: "Travellers" }),
      searchButton: page.locator("#flights-search"),
      flightClassSelect: page.locator("#flight_type"),
      backToSearchButton: page.getByRole("link", {
        name: "Back To Search",
      }),
      changeDestinations: page.locator("#swap div"),
    };
    this.flightStops = {
      allflight: page.getByLabel("All Flights"),
      direct: page.getByLabel("Direct"),
      stops_1: page.getByLabel("Stops"),
    };
    this.priceRange = {
      fromNumber: page.locator(".irs-from").first(),
      toNumber: page.locator(".irs-to").last(),
    };
    this.resultsArea = {
      title: page.locator(".stacked-color"),
      lowersPriceSorting: page.getByRole("button", {
        name: "Lowest to Higher",
      }),
      highestPriceSorting: page.getByRole("button", {
        name: "Highest to Lower",
      }),
      listOfResults: page.locator("#flight--list-targets"),
    };
  }

  inputDestination = async (destination: "to" | "from", airport: string) => {
    const inputField =
      destination === "to"
        ? this.searchForm.flightToInput
        : this.searchForm.flightFromInput;
    await inputField.click();
    await inputField.fill(airport);
    await this.page.keyboard.press("Enter");
  };
  inputDate = async (destination: "departure" | "return", date: string) => {
    const inputField =
      destination === "departure"
        ? this.searchForm.departDateInput
        : this.searchForm.returnDateInput;
    await inputField.click();
    await inputField.fill(date);
    await this.page.keyboard.press("Enters");
  };

  selectflightClass = async (
    value: "economy" | "economy_premium" | "business" | "first"
  ) => {
    this.searchForm.flightClassSelect.selectOption(value);
  };

  selectTravelers = async (
    adults?: number,
    child?: number,
    infants?: number
  ) => {
    await this.searchForm.travellersInput.click();
    if (adults) {
      await this.page.locator("#fchilds").fill(adults.toString());
    }
    if (child) {
      await this.page.locator("#fchilds").fill(child.toString());
    }
    if (infants) {
      await this.page.locator("#finfant").fill(infants.toString());
    }
  };
}
