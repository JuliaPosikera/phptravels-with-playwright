import { Page, Locator } from "@playwright/test";

export class PageFooter {
  //   /**
  //    * @param {import('@playwright/test').Page} page
  //    */
  page: Page;
  playstoreButton: Locator;
  appstoreButton: Locator;
  mobileAppsImages: Locator;
  aboutUsLink: Locator;
  privacyPolicyLink: Locator;
  fileAClaimLink: Locator;
  contactUsLink: Locator;
  becomeASupplierLink: Locator;
  careersAndJobsLink: Locator;
  termOfUseLink: Locator;
  faqLink: Locator;
  howToBookLink: Locator;
  cookiesPolicyLink: Locator;
  bookingTipsLink: Locator;
  signUpNameInput: Locator;
  signUpEmailInput: Locator;
  signUpButton: Locator;
  rightsText: Locator;
  //   socialMediaLocators: { [key: string]: Locator };
  socialMediaLocators: Locator[];

  constructor(page: Page) {
    this.page = page;
    this.playstoreButton = page.getByRole("link", {
      name: "Playstore",
    });
    this.appstoreButton = page.getByRole("link", { name: "App Store" });
    this.mobileAppsImages = page.getByRole("img", { name: "apps" });
    this.aboutUsLink = page.getByRole("link", { name: "about us" });
    this.privacyPolicyLink = page.getByRole("link", { name: "privacy policy" });
    this.fileAClaimLink = page.getByRole("link", { name: "file a claim" });
    this.contactUsLink = page.getByRole("link", {
      name: "contact us",
      exact: true,
    });
    this.becomeASupplierLink = page.getByRole("link", {
      name: "become a supplier",
    });
    this.careersAndJobsLink = page.getByRole("link", {
      name: "careers and jobs",
    });
    this.termOfUseLink = page.getByRole("link", { name: "terms of use" });
    this.faqLink = page.getByRole("link", { name: "faq" });
    this.howToBookLink = page.getByRole("link", { name: "how to book" });
    this.cookiesPolicyLink = page.getByRole("link", { name: "cookies policy" });
    this.bookingTipsLink = page.getByRole("link", { name: "booking tips" });
    this.signUpNameInput = page.locator('input[name="name"]');
    this.signUpEmailInput = page.locator('input[name="email"]');
    this.signUpButton = page.getByRole("button", { name: "Signup Newsletter" });
    this.rightsText = page.getByText("All Rights Reserved by PHPTravels");
    this.socialMediaLocators = [];
  }

  async init(): Promise<void> {
    this.socialMediaLocators = await this.page
      .locator(".social-profile")
      .getByRole("listitem")
      .all();
  }

  // Static async factory method to create an instance
  static async create(page: Page): Promise<PageFooter> {
    const footer = new PageFooter(page);
    await footer.init();
    return footer;
  }

  async inputNametoSighUp(text: string): Promise<void> {
    await this.signUpNameInput.fill(text);
  }
  async inputEmailtoSighUp(text: string): Promise<void> {
    await this.signUpEmailInput.fill(text);
  }
}
