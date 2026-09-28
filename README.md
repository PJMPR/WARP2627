# Warsztat Programisty

Materiały dydaktyczne do przedmiotu Warsztat Programisty dla studentów PJATK w Gdańsku.

## Podgląd lokalny

Otwórz `site/index.html` w przeglądarce albo uruchom w katalogu repozytorium prosty serwer statyczny:

```powershell
py -m http.server 8000 --directory site
```

Następnie przejdź pod adres `http://localhost:8000`.

## Publikacja

Workflow GitHub Actions z pliku `.github/workflows/deploy.yml` publikuje zawartość `site/` na GitHub Pages po każdym pushu do gałęzi `main`.

Przy pierwszym wdrożeniu w ustawieniach repozytorium wybierz **Settings → Pages → Build and deployment → Source: GitHub Actions**. Adres strony pojawi się w podsumowaniu workflow oraz w ustawieniach Pages.