# Tower Petrol Maintenance Guide

This guide explains how to edit the website later.

## 1. Change phone / WhatsApp number

Open:

```text
js/translations.js
```

Find:

```js
const phone = "9647501421972";
```

Change the number without `+` and without spaces. Example:

```js
const phone = "9647501421972";
```

For Iraq, local `0750...` becomes international `964750...`.

## 2. Change WhatsApp ready message

Open:

```text
js/translations.js
```

Find:

```js
const messages = { ... }
```

Edit the Arabic, Kurdish, or English message.

## 3. Change website text

Open:

```text
js/translations.js
```

Find the language you want:

```js
ar: { ... }
ku: { ... }
en: { ... }
```

Only change the text after the colon. Do not change the keys.

Example:

```js
"hero.lead": "New text here"
```

## 4. Change services

Open:

```text
js/translations.js
```

Find:

```js
const services = { ... }
```

Each service has:

- `img`: image filename
- `title`: service title
- `body`: service description
- `tags`: small equipment/service labels

## 5. Change images

Website photos are here:

```text
assets/images/
```

To replace an image, keep the same filename. Example: replace:

```text
hero-drilling-rig.webp
```

with a new image using the same filename.

Recommended image format: `.webp`.

## 6. Change logo

Logo files are here:

```text
assets/logo/
```

Current logo files:

```text
tower-petrol-icon.png
tower-petrol-wordmark.png
```

Use transparent PNG or SVG when possible.

## 7. Change colors or spacing

Open:

```text
css/styles.css
```

At the top you will see color variables like:

```css
--orange:#f25a1d;
--charcoal:#202020;
```

Change colors carefully.

## 8. Upload changes to GitHub

In VS Code:

1. Save your files.
2. Open Source Control.
3. Write a commit message.
4. Click Commit.
5. Click Sync Changes / Push.

GitHub Pages will update after a short time.

## 9. Safety notes

This website is static:

- No database
- No login system
- No admin panel
- No contact form

This keeps it simple and safer to maintain.
