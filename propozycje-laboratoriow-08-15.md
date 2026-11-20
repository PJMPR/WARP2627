# Propozycje laboratoriów 08–15

## Założenia organizacyjne

- Laboratorium 07 było prowadzone w formule live coding i dotyczyło GitHub Actions.
- Od laboratorium 08 spotkania prowadzone przeplatają się z pracą samodzielną.
- Każde laboratorium samodzielne wykorzystuje tematykę poprzedniego spotkania.
- Laboratorium 15 jest projektem końcowym.
- W całym cyklu zachowana zostaje przybliżona równowaga między zajęciami prowadzonymi i samodzielnymi.

## Proponowany układ

| Laboratorium | Forma | Temat |
|---|---|---|
| 08 | Praca samodzielna | Rozbudowa workflow GitHub Actions |
| 09 | Live coding | JavaScript, DOM i debugowanie |
| 10 | Praca samodzielna | Interaktywna aplikacja WWW |
| 11 | Live coding | API, JSON i `localStorage` |
| 12 | Praca samodzielna | Aplikacja korzystająca z API |
| 13 | Live coding | Podstawy Dockera |
| 14 | Praca samodzielna | Konteneryzacja i integracja projektu |
| 15 | Projekt końcowy | Projekt zespołowy |

## 08. Rozbudowa GitHub Actions — praca samodzielna

Studenci wykorzystują workflow przygotowany podczas laboratorium 07 i samodzielnie go rozbudowują.

### Zakres

- analiza istniejącego pliku workflow,
- dodanie nowego kroku lub zadania,
- uruchamianie workflow dla `push` i Pull Requesta,
- celowe wywołanie błędu,
- znalezienie przyczyny błędu w logach,
- poprawienie workflow,
- opisanie automatycznych kontroli w README,
- opcjonalne dodanie statusu workflow do README.

### Możliwe poziomy trudności

- podstawowy: uruchomienie prostego skryptu,
- średni: sprawdzenie struktury projektu lub formatowania,
- rozszerzony: przygotowanie artefaktu albo automatyczna publikacja strony.

## 09. JavaScript, DOM i debugowanie — live coding

Prowadzący wspólnie ze studentami buduje prostą aplikację interaktywną.

### Zakres

- wybieranie elementów DOM,
- obsługa zdarzeń,
- formularze i walidacja,
- dynamiczne tworzenie i usuwanie elementów,
- korzystanie z Console i DevTools,
- breakpointy i podgląd wartości zmiennych,
- analizowanie komunikatów błędów,
- dzielenie większego problemu na mniejsze funkcje.

## 10. Interaktywna aplikacja WWW — praca samodzielna

Studenci wykorzystują materiał z laboratorium 09, tworząc niewielką aplikację, np. listę zadań, tracker nawyków, listę wydatków, katalog książek albo formularz zapisów.

### Minimalne wymagania

- formularz wejściowy,
- walidacja danych,
- dodawanie i usuwanie elementów,
- filtrowanie albo wyszukiwanie,
- komunikaty dla użytkownika,
- obsługa przypadków brzegowych,
- praca na osobnym branchu,
- przygotowanie Pull Requesta.

## 11. API, JSON i `localStorage` — live coding

Prowadzący rozbudowuje wcześniejszą aplikację o dane lokalne i zewnętrzne.

### Zakres

- tablice i obiekty w JavaScript,
- format JSON,
- serializacja i deserializacja danych,
- zapis i odczyt z `localStorage`,
- pobieranie danych za pomocą `fetch`,
- `async` i `await`,
- obsługa błędów,
- prezentowanie stanu ładowania,
- wyświetlanie danych pobranych z publicznego API.

## 12. Aplikacja korzystająca z API — praca samodzielna

Studenci przygotowują aplikację korzystającą z wybranego publicznego API, np. wyszukiwarkę państw, katalog książek, przeglądarkę postaci albo aplikację z kursami walut.

### Minimalne wymagania

- pobranie danych z API,
- czytelna prezentacja wyników,
- wyszukiwanie albo filtrowanie,
- obsługa ładowania,
- obsługa błędu i braku wyników,
- zapis wybranych lub ulubionych elementów w `localStorage`,
- instrukcja uruchomienia w README,
- praca na branchu i przygotowanie Pull Requesta.

## 13. Podstawy Dockera — live coding

Laboratorium stanowi praktyczne wprowadzenie do konteneryzacji.

### Zakres

- różnica między obrazem a kontenerem,
- pobranie obrazu poleceniem `docker pull`,
- uruchomienie kontenera za pomocą `docker run`,
- podstawowe użycie `docker ps`, `docker stop` i `docker logs`,
- mapowanie portów,
- uruchomienie gotowego obrazu Nginx,
- przygotowanie prostego `Dockerfile`,
- budowanie własnego obrazu,
- przygotowanie `.dockerignore`,
- krótkie wprowadzenie do Docker Compose.

### Rezultat

Aplikacja WWW wykonana podczas wcześniejszych laboratoriów zostaje uruchomiona w kontenerze.

## 14. Konteneryzacja i integracja projektu — praca samodzielna

Studenci samodzielnie przygotowują aplikację z laboratorium 12 do uruchomienia w Dockerze.

### Minimalne wymagania

1. Przygotowanie pliku `Dockerfile`.
2. Przygotowanie pliku `.dockerignore`.
3. Zbudowanie własnego obrazu.
4. Uruchomienie kontenera z mapowaniem portu.
5. Sprawdzenie działania aplikacji i logów kontenera.
6. Dodanie prostego pliku `compose.yaml`.
7. Opisanie sposobu uruchomienia w README.
8. Wykonanie pracy na osobnym branchu.
9. Przygotowanie Pull Requesta.
10. Przeprowadzenie wzajemnego code review.

### Zadanie dodatkowe

Rozszerzenie GitHub Actions o automatyczne sprawdzenie, czy obraz Dockera poprawnie się buduje. Publikowanie obrazu w rejestrze nie jest wymagane.

## 15. Projekt końcowy

Studenci realizują projekt zespołowy wykorzystujący umiejętności zdobyte podczas całego cyklu laboratoriów.

### Oczekiwane elementy

- opis wymagań za pomocą Issues,
- podział pracy w zespole,
- praca na branchach,
- Pull Requesty i code review,
- interfejs HTML, CSS i JavaScript,
- wykorzystanie danych lokalnych lub API,
- automatyzacja w GitHub Actions,
- konteneryzacja aplikacji,
- dokumentacja w README,
- prezentacja rezultatu i krótka retrospektywa.

## Rytm zajęć

```text
07 GitHub Actions — live coding
        ↓
08 GitHub Actions — praktyka samodzielna

09 JavaScript i debugowanie — live coding
        ↓
10 Interaktywna aplikacja — praktyka samodzielna

11 API i dane — live coding
        ↓
12 Aplikacja z API — praktyka samodzielna

13 Docker — live coding
        ↓
14 Konteneryzacja i integracja — praktyka samodzielna
        ↓
15 Projekt końcowy
```
