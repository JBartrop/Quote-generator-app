var button = document.querySelector('.nextquote')
var quoteauthor = document.querySelector('.author')
var quotequote = document.querySelector('.quote')
var quotebox = document.querySelector('.quotesnow')

//button.addEventListener('click', () => {
  // var quotes = {
  //   "– William James": "Act as if what you do makes a difference. It does.", 
  //   "– Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  //   "– Theodore Roosevelt": "Believe you can and you are halfway there."
  // }
//   var authors = Object.keys(quotes);
//   var author = authors[Math.floor(Math.random() * authors.length)]
//   var quote = quotes[author];
//   quotequote.innerHTML = quote;
//   quoteauthor.innerHTML = author;

//   console.log(author, quote)
// });


button.addEventListener('click', () => {
  var quotes = [
    {
      title:"– William James",
      content: "Act as if what you do makes a difference. It does."
    },
    {
        title:"– Theodore Roosevelt",
        content: "Believe you can and you are halfway there."
    },
    {
      title: "– Albert Einstein",
      content: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
      title: "Bartrop",
      content: "life isn't all what you see. but it's all risky"
    },
    {
      title: "Robert Kiyosaki",
      content: "Your most expensive advice is the free advice you receive from your financially struggling friends and relatives."
    },
    {
      title: "Sherrilyn Keynon",
      content: "when something is coming for you, snap it's neck, better to be judged by four than being carried by six"
    },
    {
      title: "George Elliot",
      content: "It is never too late to be what you might have been."
    },
    {
      title: "Joseph Campbell",
      content: "We must be willing to let go of the life we planned so as to have the life that is waiting for us."
    },
    {
      title: "Jim Rohn",
      content: "Happiness is not by chance, but by choice."
    }
  ]

  var array = quotes.length
  var randomquotepos = Math.floor(Math.random() * array)
  var randomquote = quotes[randomquotepos]
  console.log(randomquote)
  
    quoteauthor.innerHTML = randomquote.title;
    quotequote.innerHTML = randomquote.content;

    quotebox.classList.add('active');


})