const generateQuote = function() {
    const quotes = [
    {
        quote: "Představte si to ticho, kdyby lidé říkali jen to, co vědí.",
        author: "-Karel Čapek"
    },
    {
        quote: "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden.",
        author: "-George R. R. Martin"
    },
    {
        quote: "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.",
        author: "-Jan Werich"
    },
    {
        quote: "Správně vidíme jen srdcem. Co je důležité je očím neviditelné.",
        author: "-Antoine de Saint-Exupéry"
    },
    {
        quote: "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.",
        author: "-Oscar Wilde"
    },
    {
        quote: "Pouze dvě věci jsou nekonečné. Vesmír a lidská hloupost. U té první si tím však nejsem tak jist.",
        author: "-Albert Einstein"
    },
    {
        quote: "Svět patří těm, co se neposerou.",
        author: "-Charles Bukowski"
    },
    {
        quote: " Mnozí z těch, co žijí, by zasluhovali smrt. A mnozí z těch, co zemřeli, by si zasloužili žít.",
        author: "-J. R. R. Tolkien"
    },
    {
        quote: " Peklo je prázdné, ďáblové jsou mezi námi.",
        author: "-William Shakespeare"
    },
    {
        quote: "Ty jseš úplně retardovaná, ale úplně, a já jsem...úplně nahej......úplně",
        author: "-Dominik Feri"
    },
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
