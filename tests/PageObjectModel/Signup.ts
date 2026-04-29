import { expect, Locator, Page } from "@playwright/test";
import {Data} from '../Resources/Data/Signup_Data';

export class SignUp {
    private readonly Email_Signup : Locator;
    private readonly Btn_Signup : Locator;
    private readonly Name : Locator;

    

    constructor (private page: Page){
        this.Name = this.page.getByPlaceholder("Name")
        this.Email_Signup = this.page.locator(".signup-form").getByPlaceholder('Email')
        this.Btn_Signup = this.page.getByRole('button',{name: 'Signup'})

    }

    async SignUp (name : string, email_Signup: string, data : Data): Promise<void>
    {
        await this.Name.fill(name)
        await this.Email_Signup.fill(email_Signup)
        await this.Btn_Signup.click()
        await this.Fill_Information(data)
    }

    async Fill_Information (data : Data) : Promise <void>
    {
        await this.page.getByText(data.title).click()
        await this.page.getByRole('textbox', { name: 'Password *' }).fill(data.password)
        await this.page.locator('#days').selectOption(data.day)
        await this.page.locator('#months').selectOption(data.month)
        await this.page.locator('#years').selectOption(data.year)
        await this.page.getByRole('textbox', { name: 'First name *' }).fill(data.firstName)
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill(data.lastName)
        await this.page.getByLabel('Country *').selectOption(data.country)
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(data.address)
        await this.page.getByRole('textbox', { name: 'State *' }).fill(data.state)
        await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(data.city)
        await this.page.locator('#zipcode').fill(data.zipcode)
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(data.mobile)
        await this.page.getByRole('button',{name: 'Create Account'}).click();
        await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
        await this.page.getByText("Continue").click();
        // await this.page.pause()

    }
}