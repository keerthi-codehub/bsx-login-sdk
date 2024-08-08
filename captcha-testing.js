const puppeteer = require('puppeteer');

(async () => {
  // Launch a browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the localhost page with the form
  await page.goto('http://localhost:3000/');

  // Fill the form fields (adapt selectors to your form)
  await page.type('#username', 'testuser'); // Example field
  await page.type('#password', 'password123'); // Example field
  
  // Submit the form or trigger the action to get the reCAPTCHA score
  await page.click('#submit-button'); // Example selector for the submit button

  // Optionally, wait for any network request or response
  await page.waitForNavigation();

  // Evaluate and print the response
  const score = await page.evaluate(() => {
    // This example assumes the score is returned in the response.
    // Replace with your actual implementation for retrieving the score.
    return document.querySelector('#captcha-score').innerText;
  });

  console.log('reCAPTCHA Score:', score);

  await browser.close();
})();
