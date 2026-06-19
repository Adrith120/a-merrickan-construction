# A-Merrickan Construction Website Concept

This is a polished static website concept for **A-Merrickan Construction**, a local home-services business concept focused on:

- Lighting Fixtures & Equipment Services
- Gutter Services

The site uses only plain HTML, CSS, and JavaScript. It does not require React, Next.js, Tailwind, Bootstrap, npm, or a build step. It can be opened directly in a browser and is ready for GitHub Pages.

## Files Included

- `index.html` - Home page with hero, services, about, why choose us, quote callout, and footer
- `quote.html` - Get a Quote page with a demo quote form and contact card
- `styles.css` - Shared responsive styling, colors, cards, buttons, layout, and accessibility states
- `script.js` - Mobile navigation, smooth scrolling, sticky header shadow, form validation, fake success message, copy phone feature, and active nav styling
- `README.md` - Setup and editing notes

## How to Preview Locally

Open `index.html` directly in your browser.

You can also open `quote.html` directly to test the quote form page.

No local server is required.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository root:
   - `index.html`
   - `quote.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Commit and push the files.
4. In GitHub, go to **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the root folder.
8. Save the settings.

GitHub will provide a Pages URL after deployment.

## How to Edit the Phone Number

The confirmed phone number is currently:

`(678) 663-5140`

The phone links use:

`tel:+16786635140`

If the number changes, update it in:

- `index.html`
- `quote.html`
- `script.js`

In `script.js`, update:

```js
var phoneNumber = "(678) 663-5140";
```

## How to Edit the Services

The confirmed services are:

- Lighting Fixtures & Equipment Services
- Gutter Services

To edit service copy, update the service cards in `index.html`.

Important: Only add new services after the client confirms them.

## How to Edit the Quote Form

The quote form is in `quote.html`.

Current fields:

- Full Name
- Phone Number
- Email Address
- Project Address or City
- Service Needed
- Preferred Contact Method
- Best Time to Contact

The form validation and demo success message are handled in `script.js`. The business can collect deeper project details during follow-up.

To change dropdown options, edit the `Service Needed` select field in `quote.html`.

## How to Replace Placeholders With Real Client Info

The site intentionally uses placeholders where details are not confirmed:

- `[CLIENT EMAIL]`
- `[CLIENT LOCATION]`
- `[CLIENT SERVICE AREA]`

Replace these only after the client confirms the correct information.

Also update the JSON-LD structured data in both `index.html` and `quote.html` when real details are confirmed.

## How to Connect the Form Later

The quote form is currently a front-end demo only. It does not send messages yet.

Common ways to connect it later:

- **Formspree** - Add a Formspree form endpoint to the form `action` attribute and set `method="POST"`.
- **Netlify Forms** - Add Netlify form attributes if the site will be hosted on Netlify.
- **EmailJS** - Use EmailJS JavaScript to send form details through a configured email template.

After connecting a form service, update the submit behavior in `script.js` so it sends the form data instead of only showing the demo success message.

## Client Details Still Needed

- Email address
- Exact city, county, or service area
- Photos of completed projects or work examples
- Business hours
- License or insurance wording, only if accurate and confirmed
- Social media links, if any

## Accuracy Notes

This concept avoids unconfirmed business details, unsupported claims, and extra service categories. Confirm final wording with the client before publishing.
# A-Merrickan Construction Website Concept

This is a polished static website concept for **A-Merrickan Construction**, a local home-services business concept focused on:

- Lighting Fixtures & Equipment Services
- Gutter Services

The site uses only plain HTML, CSS, and JavaScript. It does not require React, Next.js, Tailwind, Bootstrap, npm, or a build step. It can be opened directly in a browser and is ready for GitHub Pages.

## Files Included

- `index.html` - Home page with hero, services, about, why choose us, quote callout, and footer
- `quote.html` - Get a Quote page with a demo quote form and contact card
- `styles.css` - Shared responsive styling, colors, cards, buttons, layout, and accessibility states
- `script.js` - Mobile navigation, smooth scrolling, sticky header shadow, form validation, fake success message, copy phone feature, and active nav styling
- `README.md` - Setup and editing notes

## How to Preview Locally

Open `index.html` directly in your browser.

You can also open `quote.html` directly to test the quote form page.

No local server is required.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository root:
   - `index.html`
   - `quote.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Commit and push the files.
4. In GitHub, go to **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the root folder.
8. Save the settings.

GitHub will provide a Pages URL after deployment.

## How to Edit the Phone Number

The confirmed phone number is currently:

`(678) 663-5140`

The phone links use:

`tel:+16786635140`

If the number changes, update it in:

- `index.html`
- `quote.html`
- `script.js`

In `script.js`, update:

```js
var phoneNumber = "(678) 663-5140";
```

## How to Edit the Services

The confirmed services are:

- Lighting Fixtures & Equipment Services
- Gutter Services

To edit service copy, update the service cards in `index.html`.

Important: Only add new services after the client confirms them.

## How to Edit the Quote Form

The quote form is in `quote.html`.

Current fields:

- Full Name
- Phone Number
- Email Address
- Project Address or City
- Service Needed
- Project Details
- Preferred Contact Method
- Best Time to Contact

The form validation and demo success message are handled in `script.js`.

To change dropdown options, edit the `Service Needed` select field in `quote.html`.

## How to Replace Placeholders With Real Client Info

The site intentionally uses placeholders where details are not confirmed:

- `[CLIENT EMAIL]`
- `[CLIENT LOCATION]`
- `[CLIENT SERVICE AREA]`

Replace these only after the client confirms the correct information.

Also update the JSON-LD structured data in both `index.html` and `quote.html` when real details are confirmed.

## How to Connect the Form Later

The quote form is currently a front-end demo only. It does not send messages yet.

Common ways to connect it later:

- **Formspree** - Add a Formspree form endpoint to the form `action` attribute and set `method="POST"`.
- **Netlify Forms** - Add Netlify form attributes if the site will be hosted on Netlify.
- **EmailJS** - Use EmailJS JavaScript to send form details through a configured email template.

After connecting a form service, update the submit behavior in `script.js` so it sends the form data instead of only showing the demo success message.

## Client Details Still Needed

- Email address
- Exact city, county, or service area
- Photos of completed projects or work examples
- Business hours
- License or insurance wording, only if accurate and confirmed
- Social media links, if any

## Accuracy Notes

This concept avoids unconfirmed business details, unsupported claims, and extra service categories. Confirm final wording with the client before publishing.
