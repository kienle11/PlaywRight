import { test } from "@playwright/test";
import { Login} from "../PageObjectModel/Login";
import { DeleteUser, navigate_SignupLogin} from "../Utils/Helper";

test ("LoginCorrect", async ({page})=>{
    await navigate_SignupLogin(page)
    const login = new Login(page)
    await login.LogIn("letrungkien1611@gmail.com","123456")
    await DeleteUser(page)
    
})