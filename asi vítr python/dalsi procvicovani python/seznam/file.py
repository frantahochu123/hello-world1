cisla = []

def pridej_cislo(cislo):
    """Přidá číslo do seznamu."""
    cisla.append(cislo)
    print(f'Číslo {cislo} bylo přidáno.')

def odeber_cislo(cislo):
    """Odebere číslo ze seznamu, pokud existuje."""
    if cislo in cisla:
        cisla.remove(cislo)
        print(f'Číslo {cislo} bylo odebráno.')
    else:
        print(f'Číslo {cislo} není v seznamu.')

def serad_seznam():
    """Seřadí seznam čísel."""
    cisla.sort()
    print('Seznam byl seřazen.')

def zjisti_delku():
    """Vrátí délku seznamu."""
    delka = len(cisla)
    print(f'Délka seznamu je: {delka}')
    return delka

pridej_cislo(5)
pridej_cislo(3)
pridej_cislo(8)

print('Aktuální seznam:', cisla)

odeber_cislo(3)
print('Aktuální seznam po odebrání čísla 3:', cisla)

serad_seznam()
print('Aktuální seřazený seznam:', cisla)

zjisti_delku()
