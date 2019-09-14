
## Prose.io

- prose.io - přihlásit jako jméno: drakkarlod heslo: ...
- kliknout na `drakkar.github.io`
- vytvoření vydání
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
- vytvoření článku
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
    - štítky (nejde-li o název) začínat malým písmenem, více autorů se oddělit čárkou
    - pod to je možné začít psát normálně markdown text (nápověda viz otazník v menu nahoře)
    - nadpisy začínat ideálně úrovní 2 (tj. prefix ##)
    - nakonec nezapomenout uložit :)
    - __pozor:__ při následné editaci se položky ze záhlaví (layout a title) nezobrazují a mění se pomocí změny nadpisu (úplně nahoře, kde bylo dřív jméno souboru) případně přes nové tlačítko vpravo "metadata" (vše ostatní kromě napisu)

## Speciality pro sazbu

Obrázky se vkládají pomocí tlačítka v editoru. __Titulky k obrázkům__ se potom nastaví úpravou textu v __hranatých__ závorkách:

    ![Popisek obrázku včetně <a href="...">odkazu</a>](nazev-obrazku.jpg)

Texty v rámečcích po stranách textu (__sidebar__) se vkládají buď (samostatný odstavec):

    {:.sidebar}
    Text rámečku. Je možné i _vyznačování_.

Nebo (v případě více odstavců):

    <div class="sidebar" markdown="1">
    První odstavec.

    Druhý odstavec. I zde je možné _vyznačování_ díky atributu `markdown="1"`.
    </div>

## TODO

- [x] stránka tagů
- [x] favicon.ico (nebo tag v hlavičce linkující na jiný soubor ikony)
- [x] zmigrovat staré články
- [x] vyřešit TODOs v kódu
- [x] skrýt testovací články (čísla >= 100)
- [ ] nahrát PDF
- [ ] přesměrovat doménu
