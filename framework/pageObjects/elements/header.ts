import { Page, Locator } from "@playwright/test";

export class PageFooter {
  flightsTab: Locator;
  hotelsTab: Locator;
  toursTab: Locator;
  carsTab: Locator;
  blogsTab: Locator;

  constructor(page: Page) {
    this.flightsTab = page.getByRole("link", { name: "Flights" });
    this.hotelsTab = page.getByRole("link", { name: "Hotels" });
    this.toursTab = page.getByRole("link", { name: "Tours" });
    this.carsTab = page.getByRole("link", { name: "Cars" });
    this.blogsTab = page.getByRole("link", { name: "Blogs" });
  }
}
