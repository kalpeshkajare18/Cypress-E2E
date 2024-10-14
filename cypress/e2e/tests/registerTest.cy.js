import { registerPage } from "../../pages/register"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('test automation',()=>{
    
    it('register flow', ()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephpone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.confirmPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnButton()



    })

})