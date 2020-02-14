---
layout: article
title: Výroba prototypu deskové hry (2/2)
authors: Petr „ilgir“ Chval
tags: deskové hry
summary: V minulém čísle Drakkaru jsme se zabývali výrobou prototypu po technické stránce. Jaké materiály a postupy zvolit, aby herní deska, kartičky a jiné komponenty něco vydržely a dobře plnily svůj účel. Tentokrát se podíváme podrobně na možnosti, jaké má nadšený amatér při tvorbě grafiky pro svou deskovou hru, a také, jakých zásad se vyplatí přidržet, aby prototyp dobře posloužil svému účelu. A protože strom praxe je na rozdíl od šedé teorie zelený, najdete v článku dostatek komentovaných příkladů mých vlastních výtvorů.
---

## Ručně, nebo na počítači?

Také jste si jako malí vyráběli hry tak, že jste na čtvrtku nakreslili políčka ve stylu _Člověče, nezlob se,_ propojili je linkami a některým políčkům přiřadili speciální efekty (například „Svezl tě rychlý koník, házej ještě jednou“)? Na začátku bylo políčko Start a na konci Cíl. Kostek a figurek měl každý doma dost, takže se mohlo hned hrát.

Výhody ručního procesu jsou zřejmé. Pokud není herní plán příliš složitý a neobsahuje mnoho opakujících se prvků, je to nejrychlejší a pro člověka stále ještě nejpřirozenější postup. Vidíte, co kreslíte, a nemusíte zápasit s nedostatky či vlastní neznalostí počítačových programů. Kdo však někdy zkoušel tímto způsobem vyrobit karetní hru (třeba obyčejné kvarteto), jistě dospěl k názoru, že v některých okamžicích je automatizace k nezaplacení.

Výhody počítačové tvorby jsou navíc mnohem širší. Daný dokument máte k dispozici v elektronické podobě, takže ho můžete nadále upravovat, aktualizovat a tisknout nové verze. U prototypu, který se stále vyvíjí a dolaďuje, je to zcela klíčové. Pokud pracujete na více než jedné hře, můžete například pro kartičky použít jednotné šablony, a tím si ušetřit práci ještě více. A samozřejmě, grafické programy na rozdíl od ručního kreslení umožňují zpětnou úpravu obsahu, verzování souborů, snadné vytváření kopií... a mají tlačítko zpět.

Ve skutečnosti ona otázka „ručně, nebo na počítači?“ není tak černobílá, neboť jako velmi výhodná cesta se mnohdy ukazuje kombinace ručního a počítačového postupu. Pokud chcete mít například kartičky tematicky ilustrované, pak je přirozeným postupem nakreslit obrázky na papír, naskenovat je a následně rozmístit do připravené elektronické šablony. Pokud například nakreslíte zdařilé obrázky _piráta, vojáka_ a _zbojníka_, můžete je používat ve všech verzích prototypu. A vůbec nevadí, že jejich _šerm, střelba_ a _lstivost_ se budou v různých fázích vývoje lišit.

![Prototyp, v němž byla použita kombinace ručního a počítačového postupu. Pro snížení nákladů jsou všechny karty v prototypu černobílé. Obrázek hradu byl naskenován, převeden do režimu černá/bílá a umístěn do šablony karty. 			&#9;Ikony jsou kontrastní a jednoduché, aby byly jasně rozpoznatelné. Počet bodů za kartu (7) v pravém dolním rohu je významnější informací než počet hráčů (4–5), proto je výrazněji vyvedený. 			Použitý sw: Corel DRAW](02-opt.jpg)

## Ale já neumím kreslit!

Je pozoruhodné, jak velké množství lidí je přesvědčeno, že neumí kreslit, aniž by to kdy pořádně zkoušeli. Předpokládám, že pokud se zabýváte tvorbou her (ať už děláte do deskovek, nebo vyrábíte mapy pro svá RPG), tak už jste se od podobných předsudků vůči sobě oprostili. Pro ty však, kdo se kreslením prostě nechtějí zabývat, mám dobrou zprávu: je možné vyrobit prototyp hry, aniž byste vzali do ruky tužku a nakreslili čáru. A pokud víte, jak stahovat obrázky z internetu, a umíte na ně aplikovat úpravy v nějakém grafickém programu, můžete si dopřát i nějakou tu doprovodnou grafiku.

__Tip:__ Vyrábíte-li prototyp, nemusíte si s autorskými právy použitých obrázků lámat hlavu. Pro grafiku komerčně vydané hry už to samozřejmě neplatí.

## Forma následuje funkci

Jakkoli je funkcionalismus v architektuře uzavřenou kapitolou, pro výrobu hry si můžeme vzít jeho základní poučku k srdci. Prototyp musí být graficky přehledný a vypovídající. Co to znamená? Pokud například vytvářím kartičky, jejichž hodnota je vyjádřena počtem hvězdiček, pak tyto hvězdičky musí být na kartách vyvedeny jasně, kontrastně a v přiměřené velikosti. Doprovodná ilustrace (pokud tam nějaká bude) může opticky ustoupit do pozadí. Klidně to přežeňte, protože testeři rozhodně nestojí o to, aby museli pokaždé luštit, co která komponenta má provádět. Pokud by se hra vydávala komerčně, měl by toto na starosti grafik. Ten už ví, jak to zaonačit, aby komponenty byly herně použitelné a přitom esteticky vyvážené. Vy dávejte při výrobě prototypu přednost funkčnosti.

Rozmístění grafických prvků (ikon, čísel, symbolů) na kartičkách by mělo odpovídat logice jejich „čtení“ hráči. Nedá se obecně říci, zda je pro polohu dominantní informace vhodný třeba levý horní či pravý dolní roh. Podstatné je, aby to důležitější bylo výraznější (velikostí, kontrastem, barevností) a to méně důležité jakoby v pozadí. Pokud chcete odlišit podstatné a méně podstatné informace, můžete ty podstatné seskupit na jedno místo do rámečku („informační pole, rámeček“). To funguje ale jen v případě, kdy informací na jedné kartě není příliš mnoho.

![Prototyp ilustrovaný obrázky staženými z webu a upravenými pomocí jednotného filtru. Na kartách se nachází pouze dva podstatné ukazatele: cena (zvýrazněná velikostí písma a červenou barvou) a&#160;typ (obrázek a barva na ikonce). Název karty není pro hru samotnou významný, proto je odsunut nad obrázek, mimo informační rámeček. 			Použitý sw: Corel DRAW](03-opt.jpg)

Prototyp nemusí být krásný. Jistě, na úchvatně vypadající hru nalákáte více testerů. Ale rozhodně to není podmínkou hladkého průběhu testování. Naopak, pokud své herní plány a kartičky zavalíte množstvím hutné grafiky, pak můžete snadno způsobit, že budou nepřehledné a tedy nepoužitelné. Obzvlášť pokud nemáte výtvarné vlohy, buďte střízliví. Screenshoty z počítačových her můžou vypadat efektně, ale pozor na to, aby nepřebily to podstatné.

Při návrhu prototypu také myslete na to, že ho budete nejspíš sami stříhat, případně lepit a jinak zpracovávat. Pokud budete chtít například velikost kartiček podřídit běžně dostupným obalům, stane se pro vás devítka magickým číslem, neboť právě devět karet standardního rozměru lze umístit na formát A4. Karty na formátu se navzájem budou dotýkat hranami, abyste nemuseli stříhat víc, než je nutné. A aby byla zaručena přesnost, budete chtít použít nějaký program, který umožňuje pohodlné a přesné vytváření šablon z objektů.

__Tip:__ Pokud chcete ušetřit (platí zvláště, tisknete-li své prototypy v copycentrech), nebojte se černobílé grafiky. I ta může vypadat efektně, zvlášť pokud využijete kontrastních obrázků typu perokresba. Máte-li odpor k černobílé, můžete to částečně obejít černobílým tiskem na barevný papír, který stále vyjde výrazně levněji než plnobarevný tisk na bílý papír.

__Tip 2:__ Používáte-li jako rozlišovací rys komponentů barvu, snažte se vyhnout barvám, které jsou si (byť vzdáleně) podobné. V závislosti na osvětlení dělají nejčastěji problémy zelená s modrou, případně červená s oranžovou. S ohledem na barvoslepé testery není vhodné tlumit barvy laděním dohněda. Pokud chcete mít jistotu, využijte kromě barev i další rozlišovací znak (symbol, obrazec, popisek).

![Na tento prototyp jsem použil rýsovací program typu CAD, a to zejména kvůli velkému množství kartiček s jednotnou grafickou strukturou (sloupce s římskými čísly vyjadřují epochy ve hře, barva označuje typ výhody, čísla znázorňují, kterou výhodu ve kterých epochách karta přináší). Informace o typu budovy (průmyslová) je podána výraznou ikonou, naopak předcházející a navazující budovy jsou uvedeny malým písmem, protože tento údaj hráč sleduje pouze při nákupu karty (jedenkrát za hru). _Použitý sw: Rhinoceros_](01-opt.jpg)

## Kdybych tak uměl s Photoshopem!

Mám pro vás sdělení, které možná někoho překvapí: Adobe Photoshop navzdory své rozšířenosti a popularitě není ideálním programem pro tvorbu prototypů deskových her. Jaký software je tedy ideální? Odpověď je jednoduchá: žádný. Existují specializované softwary například pro tvorbu karet (NanDECK), ale zatím žádný program, který by vám umožnil snadno a rychle navrhnout vzájemně provázanou herní desku, kartičky, žetony a rulebook. Webové aplikace, které vám slibují snadnou tvorbu deskové hry, jsou omezeny pouze na jeden typ her (výukové, dětské...).

Co všechno tedy potřebujete od grafických programů pro tvorbu prototypu?

- Funkci malování a úprav obrázků, pokud si chcete komponenty sami ilustrovat a nechcete být omezeni pouze na ruční výrobu.
- Možnost pohodlně vytvářet šablony, které automatizují výrobu kartiček, žetonů a destiček, jež by jinak byla zdlouhavá a pracná.
- Nástroje pro efektivní práci s textem a jeho umisťování v rámci grafiky.
- Možnost tvořit ikony a symboly, ideálně v křivkách (vektorech).
- Snadnou přípravu dokumentu k tisku.

Nadšenému amatérovi tedy nezbude než provést rešerši a vybrat vhodný produkt či jejich kombinaci, která nejlépe vyhoví jeho účelům. Abych trochu zjednodušil hledání, přináším (samozřejmě nikoli vyčerpávající) výčet programů, které připadají v úvahu.

## Jaké jsou tedy možnosti?

__Adobe Photoshop__ je velmi populární software, který se z původního editoru fotografií postupně dostal mezi „univerzální“ grafické programy. Můžete v něm malovat (výhodné v kombinaci s tabletem), vytvářet koláže z rastrů, a dokonce pracovat s textem a vektory. Nicméně pro tvorbu vektorových šablon, jaké budete potřebovat při výrobě kartiček, není vhodný kvůli poněkud nepřesné práci s objekty. Photoshop můžete výhodně zakoupit, pokud jste student. Kromě studentské licence nabízí výrobce cenově dostupnou ořezanou verzi Photoshop Elements (cca 2600 Kč).

![Jednoduché kartičky využívající screenshoty z počítačové hry. Jedinou informací na kartě je její název. Z toho automaticky vyplývá, že efekt karty musí být snadno zapamatovatelný. Diskutabilní je použití černé barvy pro písmo, která v některých partiích nevytváří dostatečný kontrast. To je zmírněno použitím masivního fontu. Bílá barva písma v kombinaci se snížením jasu obrázků by možná přinesla příznivější výsledek, na druhou stranu méně by ladila s vojenskou tematikou. _Použitý SW: MS Office_](04-opt.jpg)

__Adobe Illustrator__ je software soustředící se na práci s vektory. Umožňuje vytvářet ikony a kliparty, některé jeho funkce se překrývají s Adobe InDesignem. Bohužel cena je vysoko nad hranicí, kterou je většina amatérských autorů ochotna akceptovat.

__Adobe InDesign__ je profesionální nástroj pro sazbu a dává uživateli do rukou přesně ty nástroje, které ve Photoshopu scházejí. Tedy možnost přesně a pohodlně vytvářet šablony a předtiskovou přípravu. V kombinaci s Photoshopem pokryje nároky každého tvůrce prototypů. Cenově je na tom podobně jako Illustrator.

__AutoCAD__ a jiné rýsovací programy mohou pomoci při tvorbě šablon či komponentů obsahujících minimální grafiku. Výhodou těchto SW je množství nástrojů, které automatizují výrobní proces (přichytávání, dynamické vodicí linky, kopírování, pole...). AutoCAD jako takový je pro běžného uživatele cenově nedostupný, ale existuje mnoho konkurenčních programů, které jsou levné či úplně zdarma (ProgeCAD, DraftSight, FreeCAD).

__Corel DRAW__ je původně vektorový editor, který ovšem (hlavně díky vestavěnému modulu Corel PHOTO-PAINT) zvládá i práci s obrázky, dokonce ve spojení s tabletem. Ačkoli nenabízí tolik funkcionalit jako sada Adobe, pro amatéra je víc než dostačující. Výhodou Corelu DRAW je, že pokryjete celý proces výroby jedním produktem. Cena za nekomerční licenci je relativně příznivá (cca 1900 Kč).

__Gimp__ je freeware, který byl vyvinut jako konkurence Photoshopu. Zvládá hlavně práci s obrázky a malování, pro tvorbu kartiček či žetonů ve velkém nedoporučuji ze stejných důvodů jako Photoshop.

![Tento prototyp byl zároveň finálním produktem, u&#160;nějž se už nepočítalo s dalším vývojem, proto jsem k němu přistupoval pečlivěji po grafické stránce. Udržení přehlednosti se naopak úplně nepovedlo. Žetony obsahují na malé ploše velké množství informací, což už samo o sobě může být považováno za chybu. Informace o typu kartičky je znázorněna dokonce třikrát (kruhový obrázek, barevný pruh, název kategorie v černém pruhu), což na přehlednosti nepřidává.  			&#9;Nepodstatné informace (popisek nestvůry a název pokladu) jsou potlačeny pomocí menší výraznosti písma. Důležitá informace (hodnota a typ pokladu) je vytažena pomocí barevných rámečků, které působí jako opticky samostatné ikony.  			Použitý sw: Corel DRAW](05-opt.jpg)

__Inkscape__ je freeware pro tvorbu vektorové grafiky podobný programu Corel DRAW.

__Malování__ ve Windows je z mnoha důvodů zcela nevhodné pro jakoukoli vážně míněnou grafickou tvorbu. Užitečné je pouze jako náhrada skicáku, pokud zrovna nemáte po ruce papír a tužku.

__MS Office__ (případně freeware OpenOffice) přichází v úvahu hlavně díky všeobecné rozšířenosti. Pro práci s grafikou je z balíku Office nejvhodnějším MS PowerPoint (pro vlastníky sady Professional je to MS Publisher, pro vlastníky OpenOffice je to součást jménem Draw). Ačkoli bude uživatel narážet na mnoho nedostatků při práci s objekty, ocení snadnou tvorbu šablon a automatickou přípravu k tisku. V MS Office není možné malovat, proto je nutné spokojit se s ruční kresbou a skenerem, případně s obrázky staženými z webu.

__PDF Creator__ je freeware, který vám na počítač nainstaluje virtuální pdf tiskárnu. Užitečný je tam, kde samotný program používaný k práci neumožňuje snadný převod do pdf. Tisk nebo export do pdf je užitečným postupem umožňujícím kontrolní náhled dokumentu předtím, než ho vytisknete na papír.

__Tip:__ Pokud umíte trochu anglicky, nebojte se využít altruismu osob, které na weby typu Youtube umísťují videonávody (tutoriály) pro práci s výše uvedenými programy. Učí se z nich rozhodně lépe než z vestavěných nápověd.

## Povzbuzení na závěr

<div class="sidebar" markdown="1">
### Přehledná tabulka využitelnosti jednotlivých programů

- __Tvorba ikon, symbolů (vektory):__ Adobe Illustrator a InDesign, AutoCAD, Corel DRAW, Inkscape
- __Ilustrace (rastry):__ Adobe Photoshop, Corel DRAW, Gimp, ruční práce + skener
- __Tvorba rozvržení, vložení textu:__ Adobe InDesign, AutoCAD, Corel DRAW, MS Office, OpenOffice
</div>

Bez práce nejsou koláče. Ke tvorbě prototypů sice nepotřebujete precizně ovládnout množství grafických programů, ale pokud nechcete vše dělat ručně, stejně strávíte hodiny různými pokusy a sledováním tutoriálů. Pokud tedy chcete, aby vaše prototypy vypadaly dobře a přitom byly hratelné, vyberte si vhodný program, obrňte se trpělivostí a učte se, zkoušejte, tiskněte a hrajte. Třeba jednou uslyšíte od svých testerů větu „a kdo ti dělal grafiku?“. Hodně štěstí!
