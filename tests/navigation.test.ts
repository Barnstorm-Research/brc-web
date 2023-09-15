describe("Navigation Tests", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000/");
  });

  it("should display all desktop header nav links", async () => {
    await page.waitForSelector("a#home", { visible: true });
    const homeLink = await page.$("a#home");
    const homeLinkText = await page.evaluate((el) => el.textContent, homeLink);
    expect(homeLinkText).toMatch(/Home/);

    await page.waitForSelector("a#publications", { visible: true });
    const publicationsLink = await page.$("a#publications");
    const publicationsLinkText = await page.evaluate(
      (el) => el.textContent,
      publicationsLink
    );
    expect(publicationsLinkText).toMatch(/Publications/);

    await page.waitForSelector("a#contact", { visible: true });
    const contactLink = await page.$("a#contact");
    const contactLinkText = await page.evaluate(
      (el) => el.textContent,
      contactLink
    );
    expect(contactLinkText).toMatch(/Contact Us/);

    await page.waitForSelector("a#join", { visible: true });
    const joinLink = await page.$("a#join");
    const joinLinkText = await page.evaluate((el) => el.textContent, joinLink);
    expect(joinLinkText).toMatch(/Join Our Team/);
  });

  it("should display all footer nav links", async () => {
    await page.waitForSelector("a#footer-home", { visible: true });
    const homeLink = await page.$("a#footer-home");
    const homeLinkText = await page.evaluate((el) => el.textContent, homeLink);
    expect(homeLinkText).toMatch(/Home/);

    await page.waitForSelector("a#footer-publications", { visible: true });
    const publicationsLink = await page.$("a#footer-publications");
    const publicationsLinkText = await page.evaluate(
      (el) => el.textContent,
      publicationsLink
    );
    expect(publicationsLinkText).toMatch(/Publications/);

    await page.waitForSelector("a#footer-contact", { visible: true });
    const contactLink = await page.$("a#footer-contact");
    const contactLinkText = await page.evaluate(
      (el) => el.textContent,
      contactLink
    );
    expect(contactLinkText).toMatch(/Contact Us/);

    await page.waitForSelector("a#footer-join", { visible: true });
    const joinLink = await page.$("a#footer-join");
    const joinLinkText = await page.evaluate((el) => el.textContent, joinLink);
    expect(joinLinkText).toMatch(/Join Our Team/);
  });

  it("can navigate between pages using desktop header nav links", async () => {
    await page.waitForSelector("a#home", { visible: true });
    const url = await page.evaluate(() => document.location.href);
    expect(url).toBe("http://localhost:3000/");

    await Promise.all([page.click("a#publications"), page.waitForNavigation()]);
    const publicationsUrl = page.url();
    expect(publicationsUrl).toEqual("http://localhost:3000/publications");

    await Promise.all([page.click("a#contact"), page.waitForNavigation()]);
    const contactUrl = page.url();
    expect(contactUrl).toEqual("http://localhost:3000/contact");

    await Promise.all([page.click("a#join"), page.waitForNavigation()]);
    const joinUrl = page.url();
    expect(joinUrl).toEqual("http://localhost:3000/join");

    await Promise.all([page.click("a#home"), page.waitForNavigation()]);
    const homeUrl = page.url();
    expect(homeUrl).toEqual("http://localhost:3000/");
  });

  it("can navigate between pages using footer nav links", async () => {
    await page.waitForSelector("a#footer-home", { visible: true });
    const url = await page.evaluate(() => document.location.href);
    expect(url).toBe("http://localhost:3000/");

    await Promise.all([
      page.click("a#footer-publications"),
      page.waitForNavigation(),
    ]);
    const publicationsUrl = page.url();
    expect(publicationsUrl).toEqual("http://localhost:3000/publications");

    await Promise.all([
      page.click("a#footer-contact"),
      page.waitForNavigation(),
    ]);
    const contactUrl = page.url();
    expect(contactUrl).toEqual("http://localhost:3000/contact");

    await Promise.all([page.click("a#footer-join"), page.waitForNavigation()]);
    const joinUrl = page.url();
    expect(joinUrl).toEqual("http://localhost:3000/join");

    await Promise.all([page.click("a#footer-home"), page.waitForNavigation()]);
    const homeUrl = page.url();
    expect(homeUrl).toEqual("http://localhost:3000/");
  });

  it("can navigate to Barnstorm's linkedin via external link", async () => {
    await page.waitForSelector("a#linkedin-link", { visible: true });
    const url = await page.evaluate(() => document.location.href);
    expect(url).toBe("http://localhost:3000/");

    await Promise.all([
      page.click("a#linkedin-link"),
      page.waitForNavigation(),
    ]);
    const linkedinUrl = page.url();
    expect(linkedinUrl).toEqual(
      "https://www.linkedin.com/company/barnstorm-research-corporation"
    );
    const content = await page.content();
    expect(content).toContain("Barnstorm Research");
  });

  it("can navigate to Barnstorm's github via external link", async () => {
    await page.waitForSelector("#github-link", { visible: true });
    const url = await page.evaluate(() => document.location.href);
    expect(url).toBe("http://localhost:3000/");

    await Promise.all([page.click("#github-link"), page.waitForNavigation()]);
    const githubUrl = page.url();
    expect(githubUrl).toEqual("https://github.com/Barnstorm-Research/brc-web");
    const content = await page.content();
    expect(content).toContain("Barnstorm-Research");
  });

  // it("should display all mobile header nav links", async () => {
  //   // simulate mobile phone size so mobile menu is visible
  //   await page.setViewport({ width: 375, height: 667 });
  //   await page.waitForSelector("button#mobile-nav-menu-button", {
  //     visible: true,
  //   });
  //   await page.click("button#mobile-nav-menu-button");
  //   await page.waitForSelector("#mobile-nav-menu", { visible: true });

  //   await page.waitForSelector("#mobile-home", { visible: true });
  //   const homeLink = await page.$("a#mobile-home");
  //   const homeLinkText = await page.evaluate((el) => el.textContent, homeLink);
  //   expect(homeLinkText).toMatch(/Home/);

  //   await page.waitForSelector("a#mobile-publications", { visible: true });
  //   const publicationsLink = await page.$("a#mobile-publications");
  //   const publicationsLinkText = await page.evaluate(
  //     (el) => el.textContent,
  //     publicationsLink
  //   );
  //   expect(publicationsLinkText).toMatch(/Publications/);

  //   await page.waitForSelector("a#mobile-contact", { visible: true });
  //   const contactLink = await page.$("a#mobile-contact");
  //   const contactLinkText = await page.evaluate(
  //     (el) => el.textContent,
  //     contactLink
  //   );
  //   expect(contactLinkText).toMatch(/Contact Us/);

  //   await page.waitForSelector("a#mobile-join", { visible: true });
  //   const joinLink = await page.$("a#mobile-join");
  //   const joinLinkText = await page.evaluate((el) => el.textContent, joinLink);
  //   expect(joinLinkText).toMatch(/Join Our Team/);
  // });
});
