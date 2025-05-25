import { test, expect } from '@playwright/test';

test('login with mocked backend', async ({ page }) => {
  await page.route('**/users/login', async (route) => {
    const request = route.request();
    const postData = JSON.parse(request.postData() || '{}');

    if (postData.username === 'validUser' && postData.password === 'validPass') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ token: 'fake-jwt-token' }),
      });
    } else {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Invalid credentials' }),
      });
    }
  });

  await page.goto('data:text/html,<html></html>');

  const baseUrl = 'http://localhost:3000';

  const validResponse = await page.evaluate((url) =>
    fetch(url + '/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'validUser', password: 'validPass' }),
    }).then(async res => ({
      status: res.status,
      body: await res.json(),
    }))
  , baseUrl);

  expect(validResponse.status).toBe(200);
  expect(validResponse.body).toHaveProperty('token');

  const invalidResponse = await page.evaluate((url) =>
    fetch(url + '/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'badUser', password: 'wrongPass' }),
    }).then(res => ({
      status: res.status,
    }))
  , baseUrl);

  expect(invalidResponse.status).toBe(401);
});
