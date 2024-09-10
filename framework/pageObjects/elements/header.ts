import { Page, Locator } from "@playwright/test";

export class Header {
  tabs: {
    flights: Locator;
    hotels: Locator;
    tours: Locator;
    cars: Locator;
    blogs: Locator;
  };
  navItems: { language: Locator; currency: Locator; account: Locator };

  constructor(page: Page) {
    this.tabs.flights = page.getByRole("link", { name: "Flights" });
    this.tabs.hotels = page.getByRole("link", { name: "Hotels" });
    this.tabs.tours = page.getByRole("link", { name: "Tours" });
    this.tabs.cars = page.getByRole("link", { name: "Cars" });
    this.tabs.blogs = page.getByRole("link", { name: "Blogs" });
    this.navItems.language = page.locator(".navbar-nav").nth(0);
    this.navItems.currency = page.locator(".navbar-nav").nth(1);
    this.navItems.account = page.locator(".navbar-nav").nth(2);
  }
}
