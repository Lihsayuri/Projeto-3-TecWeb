const express = require('express');
const puppeteer = require('puppeteer');

const server = express()

server.get('/', async(request,response) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.formula1.com/');
    // await page.screenshot({path: 'example.png'});
    
    const pageContent = await page.evaluate(() => {
        return {
            first : document.querySelector(".f1-podium--position.pos--1.d-none.d-md-inline-block"),
            // src_first_image: first_image.querySelector(".lazy.loaded").src,
        };
    })
    console.log('pageContent', pageContent);

    await browser.close();
    
    response.send({
        "subtitleLive": pageContent.first,
    })
});

const port = 5000;
server.listen( port ,() => {
    console.log(
        `Servidor subiu com sucessinhos!
        Acesse em http://localhost:${port}}`
    );
})

// ;(async () => {

// }) ();
