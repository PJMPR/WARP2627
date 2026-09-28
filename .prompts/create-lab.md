---
name: Nowe laboratorium kursu
description: Tworzenie materiałów dla kolejnych laboratoriów Warsztatu Programisty
category: Teaching Materials
applyTo:
  - "**/.prompts/create-lab.md"
keywords:
  - laboratoria
  - dydaktyka
  - HTML
---

# Nowe laboratorium kursu Warsztat Programisty

Twórz materiały dla kolejnych laboratoriów kursu `Warsztat Programisty` w strukturze `site/laboratoria/lab-NN.html`, zgodnie z szablonem i stylami z lab-01.

## Argumenty wejściowe

Prompt wymaga określenia:

- **Numer**: dwie cyfry (02, 03, 04, ...). Stanowi nazwę pliku i etykietę na stronie.
- **Tytuł główny**: krótki tytuł sekcji, np. "Typy i Kolekcje", "Dziedziczenie" (wyświetlany w `<h1>`).
- **Temat/tag**: jedno–dwa słowa opisujące obszar techniczny, np. ".NET Core · Generics" (pojawia się w kawałku informacyjnym `lab-readout`).
- **Cele nauczania**: lista 3–4 zdań rozpoczynających się od czasownika, np. "Zrozumieć strukturę typów wartościowych", "Porównać wydajność kolekcji".

Wszystkie argumenty są obowiązkowe.

## Struktura laboratorium

Każde laboratorium dziedziczy spójną strukturę HTML:

1. **Lab hero** — numer, tytuł, krótka lede, zakres i platforma.
2. **Cele** — lista w `.outcome-list` (auto-generator: znacznik `+` przed każdym punktem).
3. **Przygotowanie** — trzy kolumny `.prep-grid` z wymaganiami (SDK, narzędzia, konfiguracja).
4. **Ćwiczenia krok po kroku** — bloki `.lesson-step`, każdy z numerem, tematem i treścią.
5. **Ściąga** — słownik komend/pojęć w `.git-glossary` (lub `.quick-ref`, zależnie od tematu).
6. **Zadanie do wykonania** — checklist w `.checklist` + opcja `.extension-task`.
7. **Diagnostyka** — dropdown `.troubleshooting` z rozwiązaniami typowych problemów.
8. **Podsumowanie** — sekcja `.next-step` z linkiem do indeksu.

Każda sekcja jest elementem `<section class="section-block">` z numerem, kategorią i nagłówkiem.

## Wskazówki redakcyjne

- **Ćwiczenia**: każde ćwiczenie to `<article class="lesson-step">` z pięciocyfrowym numerem kroku. Zilustruj każdy krok treścią w `.code-block`, oczekiwanym rezultatem w `.expected-result`, oraz linkami do dokumentacji.
- **Przygotowanie**: jeśli trzeba wielu SDK, narzędzi lub konfiguracji, podziel na kolumny. Każda kolumna to `.prep-item`.
- **Zadanie**: automatycznie generuj checklistę — do każdego warunku dodaj `.check-box` jako pusty kwadrat, który student może odznaczyć ręcznie.
- **Zadanie rozszerzające**: sugeruj, jak mogą pójść dalej; wstaw do `.extension-task`.
- **Diagnostyka**: lista najczęstszych problemów i krótkich rozwiązań w `<details>`.

## Ścieżka i nazewnictwo

Nowe pliki trafiają do katalogu `site/laboratoria/` z nazwą `lab-NN.html`, gdzie NN to numer laboratorium.

Zaktualizuj również indeks `site/index.html`:
- Dodaj nowy wiersz `.lab-row` do sekcji `.lab-index` dla poprzedniego laboratorium (zmień `-current` na bieżący lab).
- Jeśli laboratorium nie jest jeszcze gotowe, zaznacz je jako `.lab-row.is-pending`.

## Sprawdzenie jakości

Zanim opublikujesz (commit + push):

1. Otwórz `site/laboratoria/lab-NN.html` lokalnie i sprawdź:
   - Wszystkie linki w menuzie (`../index.html`, `lab-NN.html`) działają.
   - Odnośniki do dokumentacji (https://...) są aktualne.
   - Kod w `.code-block` jest cztelny i poprawnie formatowany.
2. Sprawdź responsywność: obejrzyj na telefonie (≤520px) i komputerze (≥760px).
3. Potwierdź, że wszystkie `<details>` mogą się rozwijać i zwijać.
4. Zaktualizuj w `site/index.html` nawigację: zmień `.is-pending` na zwykły `.lab-row` dla bieżącego, a następny zostaw w `.is-pending`.

## Przykład użycia

Prompt: "Stwórz laboratorium 02 o typach wartościowych, ze zrozumieniem struktur i enumeracji, porównaniem wydajności, zadaniem z praktycznym projektem i rozszerzeniem na generyki."

Wówczas agent:
1. Tworzy `site/laboratoria/lab-02.html` z numerem `02`.
2. Wstawi tytuł "Typy<br><span>wartościowe</span>" do sekcji `.lab-hero`.
3. Doda temat ".NET · Structs · Enums" do `.lab-readout`.
4. Włoży cele: zrozumienie, porównanie, praktyka.
5. Przygotuje sekcje: przygotowanie (SDK, debuger), ćwiczenia (5–7 kroków), ściąga (słownik), zadanie (checklist), diagnostyka (rozwiązania).

Po stworzeniu zaktualizuj `site/index.html`:
- Lab 01 zostaje w `.lab-row` ze stanem "MATERIAŁY GOTOWE".
- Lab 02 pojawia się poniżej jako nowy `.lab-row` ze stanem "MATERIAŁY GOTOWE".
- Lab 03+ zostają w `.lab-row.is-pending`.

---

**Związane:** Jeśli chcesz modyfikować styl, edytuj `site/assets/css/styles.css` (zmienia wszystkie laboratoria). Aby zmienić publiczną strukturę, zaktualizuj `site/index.html` i zacommit.

**Publikacja:** Każdy commit na gałęzi `main` wyzwala workflow `.github/workflows/deploy.yml`, który publikuje zawartość `site/` na GitHub Pages.
