import {test, expect} from '@playwright/test';
import { Login } from '../PageObjectModel/Login';
import { navigate_SignupLogin } from '../Utils/Helper';

test ("LoginWithIncorrectMail", async ({page})=>{
    await navigate_SignupLogin(page)
    const login = new Login(page)
    await login.LogIn("letrungkien1611@gmail.com","123456")    
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()
    await page.pause()
})