import {test, expect} from '@playwright/test';

test ("PostAllProducts", async ({request})=>{
    const response = await request.post('https://automationexercise.com/api/productsList');
    console.log(`Response status: ${response.status()}`);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe('This request method is not supported.');
})