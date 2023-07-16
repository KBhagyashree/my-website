// import { quotes } from "./allQuotes";
const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        originator: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        originator: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        originator: "Stephen King"
    },
    {
        quote:"Get busy living or get busy dying.",
        originator: "Stephen King"
    },
    {
        quote:"Get busy living or get busy dying.",
        originator:"Stephen King"   
    },
    {
        quote: "Get busy living or get busy dying.",
        originator: "Stephen King"
    },
    {
        quote: "Get busy living or get busy dying.",
        originator:"Stephen King"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        originator:"Mae West"
    },
    {
        quote:"Many of life’s failures are people who did not realize how close \
        they were to success when they gave up.",
        originator:"Thomas A. Edison"
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
        originator:"Albert Einstein"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        originator: "Babe Ruth"
    },
    {
        quote:"Money and success don’t change people; they merely amplify what is already there.",
        originator: "Will Smith"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.\
        Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        originator:"Steve Jobs"
    },
    {
        quote:"Not how long, but how well you have lived is the main thing.",
        originator:"Seneca"
    }, 
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        originator:"Eleanor Roosevelt"
    }, 
    {
        quote:"The whole secret of a successful life is to find out what is one’s \
        destiny to do, and then do it.",
        originator:"Henry Ford"
    },
    {
        quote:"In order to write about life first you must live it.",
        originator:"Ernest Hemingway"
    },
    {
        quote:"The big lesson in life, baby, is never be scared of anyone or anything.",
        originator:"Frank Sinatra"
    },
    {
        quote:"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s \
        watching, and live like it’s heaven on earth." ,
        originator:"Anonymous"
    },
    {
        quote:"Curiosity about life in all of its aspects, I think, is still the secret of great \
        creative people.",
        originator:"Leo Burnett"
    },
    {
        quote:"Life is not a problem to be solved, but a reality to be experienced." ,
        originator:"Soren Kierkegaard"
    },
    {
        quote:"The unexamined life is not worth living.",
        originator:"Socrates"
    },
    {
        quote:"Turn your wounds into wisdom.",
        originator:"Oprah Winfrey"
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance, you must keep moving." ,
        originator:"Albert Einstein"
    },
    {
        quote:"Live for each second without hesitation.",
        originator:"Elton John"
    },
    {
        quote:"Life is never easy. There is work to be done and obligations to be met – \
        obligations to truth, to justice, and to liberty.",
        originator:"John F. Kennedy"
    },
    {
        quote:"Life imposes things on you that you can’t control, but you still have the choice \
        of how you’re going to live through this.",
        originator:"Celine Dion"
    },
    {
        quote:"You never really learn much from hearing yourself speak." ,
        originator:"George Clooney"
    },
    {
        quote:"I like criticism. It makes you strong." ,
        originator:"LeBron James"
    },
    {
        quote:"Everything negative – pressure, challenges – is all an opportunity for me to rise." ,
        originator:"Kobe Bryant"
    },
    {
        quote:"Life is really simple, but men insist on making it complicated.",
        originator:"Confucius"
    },
    {
        quote:"Life is a succession of lessons which must be lived to be understood.",
        originator:"Helen Keller"
    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. \
        The vision pulls you.",
        originator:"Steve Jobs"
    }];

const bgImages = [
    "rqg/sun.jpg",
    "rqg/beachsunselt.jpg",
    "rqg/buttefly3.jpg",
    "rqg/butterfly1.jpg",
    "rqg/butterfly2.jpg",
    "rqg/cheetah.jpg",
    "rqg/elephant.jpg",
    "rqg/nature.jpg",
    "rqg/redflowerbg.jpg",
    "rqg/scenarybg.jpg"
];

let newQuoteReq = document.getElementById("get-new-quote-button");

function getRandomArrIndex(arrLength){
    return Math.floor(Math.random()*arrLength);
}

newQuoteReq.addEventListener("click", (e) => {
    let randomArrIndex = 0;
    let randomQuote = {};
    let randomBg = "";
    let imgSrc = "";
    let quoteElement = 0;
    randomArrIndex = getRandomArrIndex(bgImages.length);
    randomBg = bgImages[randomArrIndex];
    imgSrc = document.querySelector(".rqg-bg-image");
    console.log(imgSrc);
    imgSrc.src = randomBg;
    randomArrIndex = getRandomArrIndex(quotes.length);
    randomQuote = quotes[randomArrIndex];
    quoteElement = document.querySelector(".rqg-quote");
    quoteElement.innerHTML = "“" + randomQuote.quote + "”<br>— " + randomQuote.originator; 
});
