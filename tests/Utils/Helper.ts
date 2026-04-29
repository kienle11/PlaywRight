import { expect, Page } from "@playwright/test";
export async function DeleteUser (page : Page){
    await expect(page.getByText('Logged in as ')).toBeVisible();
    await page.getByRole('link', {name: 'Delete Account'}).click();
    await expect(page.getByText('ACCOUNT DELETED')).toBeVisible();
    await page.getByText("Continue").click();
}

export async function navigate_SignupLogin (page:Page) {
    await page.goto('https://automationexercise.com/')
    await expect(page).toHaveTitle("Automation Exercise");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
}