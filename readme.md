
# Poznámky

- případně použít syntax `{: .csstrida}` před nebo za odstavcem/elementem, dokumentace: https://kramdown.gettalong.org/syntax.html#block-ials
- info od Bubáka:
    - minimálně tři štítky: autora, rubriku a číslo Drakkaru.
    - v menu odkaz na ročníky
        - nebo jednotlivá čísla podle ročníků (pokud ročníky, byla by to agregační stránka)
        - viz extra jekyll filtry, především group_by
    - v menu rubriky
        - nepovinné - jen pokud nezjistíme, že je jich moc
        - _ale agregační stránka by asi musela být jedna, jinak mě nenapadá řešení, než dělat stránka per rubrika ručně_
- použité klíče v orig front matter: Title, Authors, Tags, Color, Fulltext, Discussion, PDF, Summary, Notes
- verze s _posts pravděpodobně nefunkční, protipříklad:
    - obrázek automaticky prose.io nahraje do _posts
    - link na něj je relativní
    - permalink na post bude ale /nn/nazev-clanku.html
    - obrázek se nezobrazí

# TODO

- [ ] menu
- [ ] stránka čísla
- [ ] titulní stránka (jak má vypadat)
- [ ] vyřešit ne/přítomnost PDF
- [ ] styly
    - [ ] převést věci v scss na px
    - [ ] mobilní zobrazení
    - [ ] velikost nadpisů, h4 styl
    - [ ] minifikovat styly? (možno v configu jekyllu)
    - [ ] třída .sc small caps - buď syntax třídy nebo použít backticky
- [ ] favicon.ico (nebo tag v hlavičce linkující na jiný soubor ikony)
- [ ] zmigrovat staré články
- [x] návod na přispívání skrz prose.io
- [ ] jak řešit přihlášení do githubu (potvrzovací kód vs osobní účty)
- [ ] vyřešit TODOs v kódu

## Prose.io

- prose.io - přihlásit jako jméno: drakkarlod heslo: hoK1ahL3
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
        title: Tabulka záporáků
        ---
        ```
    - pod to je možné začít psát normálně markdown text (nápověda viz otazník v menu nahoře)
    - nadpisy začínat ideálně úrovní 2 (tj. prefix ##)
    - nakonec nezapomenout uložit :)
    - __pozor:__ při následné editaci se položky ze záhlaví (layout a title) nezobrazují a mění se pomocí změny nadpisu (úplně nahoře, kde bylo dřív jméno souboru) případně přes nové tlačítko vpravo "metadata" (vše ostatní kromě napisu)

## Speciality pro sazbu

Obrázky se vkládají pomocí tlačítka v editoru. __Titulky k obrázkům__ se potom nastaví úpravou textu v hranatých závorkách:

    ![Popisek obrázku včetně <a href="...">odkazu</a>](nazev-obrazku.jpg)

Texty v rámečcích po stranách textu (__sidebar__) se vkládají buď (samostatný odstavec):

    {:.sidebar}
    Text rámečku. Je možné i _vyznačování_.

Nebo (v případě více odstavců):

    <div class="sidebar" markdown="1">
    První odstavec.

    Druhý odstavec. I zde je možné _vyznačování_ díky atributu `markdown="1"`.
    </div>

## Otázky

- Zarovnání sloupce s textem (fixně ?px od levého okraje, příp % obrazovky?)
- > původní idea fixně od kraje, lze i alefovo řešení nebo jakkkoli jinak
- Šířka obrázků vpravo od textu
- > stejná jako text, příp. menší, ideálně obrázky stejně široké
- Mobil: obrázky do textu?, menu hamburger?
- > ano, menu je jedno (=ano)
- > obecně menu je jedno jak / jestli bude
- Agregace:
    - ročníky v menu, stránka autorů, tagů
    - > asi jedno
    - > "rubriky" možná lépe fixně vyjmenovat
    - ok, že jedna stránka? info, jak fungují url
    - > nevadí, spíš jde obecně o UX, možná js rozbalovací obsah per autor
- Pořadí postů (jak řešit, přejít na _posts, vypisovat na titulce články?)
- > nezásadní pořadí v čísle, pokud řadit, tak dle kategorií
- Titulka:
- > N nejnovějších článků
- Rychlost generování
    - je problém čekání např. 10s na live html po uložení?
    - > není problém
- Ikonka stránky
- > dle předpokladu
- Další postup
    - Co kdy jak
    - založit thread příp. přidat do messengeru další lidi?
    - kdy má být další číslo?
    - > číslo v říjnu, udělat úpravy, pak kontaktovat bbq a přidat další lidi, např E2
- Zveřejňování: hromadně či po jednom? Souvisí s vzhledem titulky.
    - šlo by např. na FB jeden týdně vs. vše na webu (ale je problém, že lidi po prokliku článkem uvidí číslo s všemi články instantně)
