# webprodavnica

Dat je folder sa slikama proizvoda i tekstualna datoteka pod nazivom „vebprodavnica.txt“ koja predstavlja kolekciju podataka o artiklima veb prodavnice. 

Svaki red u tekstualnoj datoteci predstavlja podatke o jednom artiklu u obliku: 
•	Šifra artikla – pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 0 do 5 
•	Naziv artikla- pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 6 do 30 
•	Proizvođač - pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 31 do 50 
•	RAM memorija - pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 51 do 55 
•	Tip procesora - pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 56 do 70 
•	Kamera - pamti se kao alfa numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 71 do 80 
•	Ekran - pamti se kao numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 81 do 85 
•	Slika - pamti se putanja do slike u svakom redu tekstualne datoteke na poziciji od indeksa 91 do 120 
•	Cena - pamti se kao numerički podatak u svakom redu tekstualne datoteke na poziciji od indeksa 121 do 130 

1.	Kreirati veb aplikaciju pod nazivom “Veb prodavnica” koja se sastoji od dve stranice: Veb prodavnica i Korisničko uputstvo. 
2.	Na stranici „Veb prodavnica“ postaviti polja za unos parametara za pretraživanje artikala veb prodavnice, taster „Traži“ i link za prelaz na stranicu za uputstvo. Potrebno je omogućiti pretraživanje artikala po sledećim poljima: Proizvođač, RAM memorija, Procesor, Kamera, Ekran. 
3.	Sva polja za unos parametara pretrage treba realizovati kao padajuće liste sa odgovarajućom labelom (DropDownList) i predefinisanim vrednostima (npr.polje za izbor proizvođača napuniti svim različitim proizvođačima koja se javljaju u tekstualnoj datoteci sa podacima, polje za izbor RAM memorije napuniti sledećim vrednostima: 3GB, 4GB, 6GB, 8GB i 12GB). 
4.	Implementirati mehanizam za pretragu koji će prema zadatom kriterijumu prikazati proizvode koji odgovaraju parametrima pretrage. 
5.	Rezultat pretrage predstaviti u obliku tabele (ili odgovarajućih kartica) koja/e sadrži sva polja (kolone) koja su definisana u datoteci sa podacima uključujući i sliku proizvoda prikazanu u prvoj koloni. 
6.	Na stranici „Uputstvo“ napisati kratko uputstvo za korišćenje veb aplikacije i link za prelaz na stranicu veb prodavnice. 
7.	CSS kod izdvojiti u posebnu eksternu datoteku i učitati je na osnovnu stranicu pri startovanju aplikacije. Gotovu aplikaciju postaviti na veb server instaliran na lokalnom računaru. 

Vreme za izradu zadatka: 
Maksimalno vreme za izradu zadatka je 180 minuta. Po isteku maksimalnog vremena zadatak se prekida i boduje se ono što je do tada urađeno.
 
Prilozi: 
-	Popunjena tekstualna datoteka koja predstavlja kolekciju podataka o artiklima
-	Folder sa slikama proizvoda 
