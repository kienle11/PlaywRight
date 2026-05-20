import {test, expect} from '@playwright/test';
test ("GetAllProduct", async ({request})=>{
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const products = responseBody.products.length; 
    expect(products).toBeGreaterThan(0);
    console.log(`Total number of products: ${products}`);
    console.log(responseBody);
})