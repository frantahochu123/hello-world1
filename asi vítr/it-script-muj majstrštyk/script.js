document.addEventListener("DOMContentLoaded", () => {
    console.log("Stránka je načtena a připravena!");
});
 
function showDetails(product) {
    const details = {
        bread: 'Čerstvý a chutný chléb, pečený denně z kvalitních surovin... jestli chcete koupit najeďte na koupit zboží',
        croissant: 'Lahodné a křupavé croissanty, ideální na snídani... jestli chcete koupit najeďte na koupit zboží',
        cake: 'Luxusní dorty, vhodné pro každou příležitost... jestli chcete koupit najeďte na koupit zboží'
    };
 
    const detailElement = document.getElementById('product-details');
    detailElement.textContent = details[product];
detailElement.style.display = 'block';
}
 
