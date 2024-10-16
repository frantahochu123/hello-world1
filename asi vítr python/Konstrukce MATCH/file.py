def den_v_tydnu(cislo_dne):
    match cislo_dne:
        case 1:
            return "Pondělí"
        case 2:
            return "Úterý"
        case 3:
            return "Středa"
        case 4:
            return "Čtvrtek"
        case 5:
            return "Pátek"
        case 6:
            return "Sobota"
        case 7:
            return "Neděle"
        case _:
            return "Neplatné číslo dne"

def je_prestupny_rok(rok):
    match (rok % 4 == 0, rok % 100 == 0, rok % 400 == 0):
        case (True, False, _):
            return True
        case (True, True, True):
            return True
        case (True, True, False):
            return False
        case (False, _, _):
            return False

def zbyle_roky_do_prestupneho(rok):
    if je_prestupny_rok(rok):
        return 0
    else:
        while not je_prestupny_rok(rok):
            rok += 1
        return rok - (rok - 1)  

def rgb_kod(barva):
    match barva:
        case "červená":
            return (255, 0, 0)
        case "modrá":
            return (0, 0, 255)
        case "zelená":
            return (0, 255, 0)
        case _:
            return "Neznámá barva"

print("Vyberte úkol:")
print("1. Zjistit den v týdnu")
print("2. Posoudit rok")
print("3. Ovládat barvy")

volba = int(input("Zadejte číslo úkolu (1-3): "))

if volba == 1:
    cislo_dne = int(input("Zadejte číslo dne (1-7): "))
    print(den_v_tydnu(cislo_dne))

elif volba == 2:
    rok = int(input("Zadejte rok: "))
    if je_prestupny_rok(rok):
        print(f"{rok} je přestupný rok.")
    else:
        print(f"Nejbližší přestupný rok nastane za {zbyle_roky_do_prestupneho(rok)} let.")

elif volba == 3:
    barva = input("Zadejte název barvy (červená, modrá, zelená): ")
    print(f"RGB kód pro {barva} je {rgb_kod(barva)}.")

else:
    print("Neplatná volba.")