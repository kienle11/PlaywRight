import {test, expect} from '@playwright/test';
test ("GetAllBrandsList", async ({request})=>{
    const response = await request.get('https://automationexercise.com/api/brandsList');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const brands = responseBody.brands.length; 
    expect(brands).toBeGreaterThan(0);
    console.log(`Total number of brands: ${brands}`);
    console.log(responseBody);
})