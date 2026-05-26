import {test, expect} from '@playwright/test';
import {UserLogin} from "../../Resources/Data/Login_Data";

test ("VerifyLogin", async ({request})=>{
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        multipart: {
            email: UserLogin.email,
            password: UserLogin.password
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe('User exists!');
})