const quotes = [
    {
      text: "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street.",
      author: "Coco Chanel"
    },
    {
      text: "Textiles have a life of their own, and when you start to create with them, they speak to you.",
      author: "Zandra Rhodes"
    },
    {
      text: "Style is a way to say who you are without having to speak.",
      author: "Rachel Zoe"
    },
    {
      text: "I don’t design clothes. I design dreams.",
      author: "Ralph Lauren"
    },
    {
      text: "Textiles are the narrative of culture. They carry stories and identity.",
      author: "Unknown"
    },
    {
      text: "Elegance is not standing out, but being remembered.",
      author: "Giorgio Armani"
    },
    {
      text: "The fabric of society is held together by threads of art and culture.",
      author: "Unknown"
    }
  ];
  
  function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
  
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
  }
  