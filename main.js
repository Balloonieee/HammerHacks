var index = 0;

function changeQuote() {
    var quotes = [
         `"I really like web development!" - Ali Lateef`,
        `"I am enjoying my time at HammerHacks!" - Ali Lateef`,
        `"Squirrels!" - Me`,
         `"Had I been present at the Creation, I would have given some useful hints for the better ordering of the universe."`
        ];
                
    var blockquote = document.querySelector("blockquote");
    blockquote.innerHTML = quotes[index]

    index++
    if(index >= 4) {
        index = 0
    }
}