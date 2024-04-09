function faktorial(n)
        {
        if (n==0 || n==1) return 1;
        else return n*faktorial(n-1);
        }
cislo=window.prompt("Zadej číslo v rozsahu 0 až 170","");
document.getElementById("kuskus").value = (cislo+"!="+faktorial(cislo));       
 
