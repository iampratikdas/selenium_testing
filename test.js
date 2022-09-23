const {By,Key,Builder,until} = require("selenium-webdriver");
require("chromedriver");
 
async function search(){
 
       var searchString = "google me";
 
      
       let driver = await new Builder().forBrowser("chrome").build();
 
      
        await driver.get("http://google.com");
        
        
        // driver.implicitly_wait(5);
        await driver.findElement(By.id("L2AGLb")).click();
        await driver.manage().setTimeouts( { implicit: 5000 } );
        await driver.wait(until.elementLocated(By.className("gLFyf gsfi")))
        
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.ENTER);
 
    
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
      
        await driver.quit();
 
}
 
search()