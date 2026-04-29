import { test, expect } from '@playwright/test';
import {Login} from '../PageObjectModel/Login';
import {SignUp} from '../PageObjectModel/Signup';
import {signupData} from '../Resources/Data/Signup_Data';
import { DeleteUser } from '../Utils/Helper';

test ('Login', async ({page})=>{
    await page.goto('https://automationexercise.com/login');
    const login = new Login(page);
    await login.LogIn('abc@gmail.com', 'abc')
    await page.pause()
})

test ("signUp", async ({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle("Automation Exercise");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    const signUp = new SignUp(page)
    await signUp.SignUp('KienLe','letrungkien1611@gmail.com',signupData)
    await DeleteUser(page)
    await page.pause()
})

test('Delete Account', async({page})=>{
    await page.goto('https://automationexercise.com/login');
    await expect(page.getByText('Login to your account')).toBeVisible();
    const login= page.locator('.login-form');
    await login.getByPlaceholder('Email Address').fill("letrungkien1611@gmail.com");
    await page.getByPlaceholder('Password').fill('Trungkien1611');
    await page.getByRole('button', {name : 'Login'}).click();
    await expect(page.getByText('Logged in as ')).toBeVisible();
    await page.getByRole('link', {name: 'Delete Account'}).click();
    await expect(page.getByText('ACCOUNT DELETED')).toBeVisible();
    await page.getByText("Continue").click();
    await page.pause()
})