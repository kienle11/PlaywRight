import { expect, Locator, Page } from "@playwright/test";

export class Login{
    private readonly Email_Login : Locator;
    private readonly Password : Locator;
    private readonly Btn_Login : Locator;
    
    

    constructor(private page: Page) {
        this.Email_Login = this.page.locator('.login-form').getByPlaceholder('Email Address');
        this.Password = this.page.getByPlaceholder("Password");
        this.Btn_Login = this.page.getByRole('button', {name : 'Login'});
    }
    
    
    async LogIn (email: string, password: string): Promise <void> 
    {
        await this.Email_Login.fill(email)
        await this.Password.fill(password)
        await this.Btn_Login.click()
        await expect(this.page.getByText('Logged in as ')).toBeVisible();
    }

}