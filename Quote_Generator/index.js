const quotes = [ 
    "Learning to code is like acquiring a superpower; it empowers you to create and innovate in the digital world.",
    "The beauty of coding lies in its ability to turn imagination into reality, one line of code at a time.",
    "In the world of coding, every error is a lesson, and every bug is an opportunity to grow.",
    "Coding is not just about memorizing syntax; it's about understanding problem-solving and logic.",
    "Embrace the journey of learning to code, for it's not just about reaching the destination but enjoying the process of creation along the way.",
    "The best investment you can make is in yourself, and learning to code opens doors to endless possibilities in the digital age.",
    "Coding is a language that allows you to communicate with computers, but its true power lies in how it enables you to communicate your ideas to the world.",
    "Every programmer was once a beginner; the key is persistence and practice.",
    "Learning to code is not about being perfect; it's about being resilient in the face of challenges and continuously improving.",
    "The only way to master coding is through consistent practice, curiosity, and a willingness to embrace failure as part of the learning process.",
]


const usedIndexes = new Set()
const quotesElement = document.getElementById("quote")

function generateQuote() {

    if(usedIndexes.size >= quotes.length){ 
        usedIndexes.clear()
    }
    
    while (true) {  
    const randomIdx = Math.floor(Math.random() * quotes.length)
    if (usedIndexes.has(randomIdx)) continue
    
    const quote = quotes[randomIdx]
    quotesElement.innerHTML = quote; 
    usedIndexes.add(randomIdx)
    break
    }
} 