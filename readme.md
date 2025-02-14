
## Prose.io

- prose.io - přihlásit jako jméno: drakkarlod heslo: ...
- kliknout na `drakkar.github.io`

### Vytvoření vydání

- tlačítko new file
- _číslo 99 v následujících krocích je potřeba nahradit číslem konkrétního vydání_
- nastavit název (kliknutím na šedý text nahoře) na `99/index.md`
- obsah nahradit těmito čtyřmi řádky:
    ```
    ---
    layout: issue
    number: 99
    ---
    ```
- uložit (disketa vpravo a následně tlačítko "commit")

### Vytvoření článku

- vrátit se do kořenové složky drakkaru (navigací nahoře)
- nyní už je vidět složka nového vydání - prokliknout se do ní
- tlačítko new file
- nastavit název podobně jako u vydání (tj. číslo/nazev-clanku.md), např. `99/tabulka-zaporaku.md`
- do obsahu vložit na začátek
    ```
    ---
    layout: article
    title: Název článku
    authors: Jméno autora
    tags: štítek, další štítek
    ---
    ```
- štítky (nejde-li o název) psát s malým písmenem, více autorů oddělit čárkou
- pod to je možné začít psát normálně markdown text (nápověda viz otazník v menu nahoře)
- nadpisy začínat ideálně úrovní 2 (tj. prefix ##)
- nakonec nezapomenout uložit :)
- __pozor:__ při následné editaci se položky ze záhlaví (layout a title) nezobrazují a mění se pomocí změny nadpisu (úplně nahoře, kde bylo dřív jméno souboru) případně přes nové tlačítko vpravo "metadata" (vše ostatní kromě napisu)
- pokud článek nemá být zveřejněný, nastavit
    ```
    ---
    …
    hide: true
    ---
    ```
    článek potom nebude vidět v žádném výpisu, ale půjde zobrazit ručně zadáním adresy, např. `drakkar.sk/99/tabulka-zaporaku.html` (viz .html na konci místo .md). V okamžiku zveřejnění stačí řádek s `hide` smazat.

## Speciality pro sazbu

### Obrázky

Obrázky se vkládají pomocí tlačítka v editoru. Titulky k obrázkům se potom nastaví úpravou textu v _hranatých_ závorkách:

    ![Popisek obrázku včetně <a href="...">odkazu</a>](nazev-obrazku.jpg)

### Mapy

Mapy (a široké obrázky obecně) se vytvoří následovně:

    {:.map}
    ![](nazev-obrazku.jpg)

### Sidebary

Texty v rámečcích po stranách textu (sidebar) se vkládají buď (samostatný odstavec):

    {:.sidebar}
    Text rámečku. Je možné i _vyznačování_.

Nebo (v případě více odstavců):

    <div class="sidebar" markdown="1">
    První odstavec.

    Druhý odstavec. I zde je možné _vyznačování_ díky atributu `markdown="1"`.
    </div>

### Seriál (nebo kolektivní článek)

Do metadat v záhlaví článku se přidá:

    ---
    …
    series: Název seriálu
    ---

Na konci každého článku z seriálu se potom zobrazí odkazy na další části.

## TODO

- [x] stránka tagů
- [x] favicon.ico (nebo tag v hlavičce linkující na jiný soubor ikony)
- [x] zmigrovat staré články
- [x] vyřešit TODOs v kódu
- [x] skrýt testovací články (čísla >= 100)
- [x] nahrát PDF
- [ ] zoom pro mapy
- [x] přesměrovat doménu
- [x] preview článku
