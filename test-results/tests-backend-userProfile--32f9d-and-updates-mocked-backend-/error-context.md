# Test info

- Name: User profile loads and updates (mocked backend)
- Location: /Users/elvedina/Desktop/TasteLab/tests/tests/backend/userProfile.spec.js:3:1

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toHaveValue(expected)

Locator: getByLabel('First Name')
Expected string: "Samija"
Received: <element(s) not found>
Call log:
  - expect.toHaveValue with timeout 10000ms
  - waiting for getByLabel('First Name')

    at /Users/elvedina/Desktop/TasteLab/tests/tests/backend/userProfile.spec.js:10:47
```

# Page snapshot

```yaml
- navigation:
  - link "TasteLab":
    - /url: /
    - img
    - text: TasteLab
  - link "Home":
    - /url: /
    - img
    - text: Home
  - link "Recipes":
    - /url: /recipes
    - img
    - text: Recipes
  - link "Wellness":
    - /url: /wellness
    - img
    - text: Wellness
  - link "Grocery":
    - /url: /grocery
    - img
    - text: Grocery
  - link "Profile":
    - /url: /profile
    - img
    - text: Profile
- main:
  - heading "Your Profile" [level=1]
  - paragraph: Manage your account settings and preferences.
  - img
  - heading "Samija Hadzic" [level=2]
  - paragraph: samija123@gmail.com
  - navigation:
    - link "Account Information":
      - /url: "#"
      - img
      - text: Account Information
    - link "Notifications":
      - /url: "#"
      - img
      - text: Notifications
    - link "Preferences":
      - /url: "#"
      - img
      - text: Preferences
    - link "Help & Support":
      - /url: "#"
      - img
      - text: Help & Support
    - link "Log Out":
      - /url: "#"
      - img
      - text: Log Out
  - heading "Account Information" [level=2]
  - text: First Name
  - textbox: Samija
  - text: Last Name
  - textbox: Hadzic
  - text: Email
  - textbox: Samija123@gmail.com
  - text: Phone
  - textbox: +387 62 987 654
  - heading "Health Information" [level=3]
  - text: Height
  - textbox: 5'10"
  - text: Weight
  - textbox: 100 lbs
  - text: Date of Birth
  - textbox: 2003-01-15
  - heading "Dietary Preferences" [level=3]
  - checkbox "Vegetarian" [checked]
  - text: Vegetarian
  - checkbox "Vegan"
  - text: Vegan
  - checkbox "Gluten-Free"
  - text: Gluten-Free
  - checkbox "Lactose-Free"
  - text: Lactose-Free
  - checkbox "Low-Carb"
  - text: Low-Carb
  - checkbox "High-Protein" [checked]
  - text: High-Protein
  - button "Cancel"
  - button "Save Changes"
- contentinfo:
  - text: TasteLab © 2023 All Rights Reserved
  - link "Privacy Policy":
    - /url: "#"
  - link "Terms of Service":
    - /url: "#"
  - link "Contact Us":
    - /url: "#"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('User profile loads and updates (mocked backend)', async ({ page }) => {
   4 |   await page.goto('http://localhost:5179/profile');
   5 |
   6 |   // Wait for label to appear
   7 |   await page.waitForSelector('label:text("First Name")', { timeout: 10000 });
   8 |
   9 |   // Check input values using label selectors with extended timeout
> 10 |   await expect(page.getByLabel('First Name')).toHaveValue('Samija', { timeout: 10000 });
     |                                               ^ Error: Timed out 10000ms waiting for expect(locator).toHaveValue(expected)
  11 |   await expect(page.getByLabel('Last Name')).toHaveValue('Hadzic');
  12 |   await expect(page.getByLabel('Email')).toHaveValue('Samija123@gmail.com');
  13 |   await expect(page.getByLabel('Phone')).toHaveValue('+387 62 987 654');
  14 | });
  15 |
```