import { test } from "@playwright/test";
import { SignUp } from "../PageObjectModel/Signup";
import { signupData } from "../Resources/Data/Signup_Data";
import { DeleteUser, navigate_SignupLogin } from "../Utils/Helper";

test ("signUp", async ({page})=>{
    await navigate_SignupLogin(page)
    const signUp = new SignUp(page)
    await signUp.SignUp('KienLe','letrungkien1611@gmail.com',signupData)
    await DeleteUser(page)
    await page.pause()
})
