# makefun-black-friday-deal-finder-20261127

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/dlin02563-web/makefun-black-friday-deal-finder-20261127/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/dlin02563-web/makefun-black-friday-deal-finder-20261127/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

A static Black Friday / Cyber Monday deal finder listing 24 real offers checked on 2026-11-27 across six stores and seven categories. Each deal shows the sale price, the store's usual or reference price, the discount, where the price was read, and a plain-language signal — new low, strong price, or routine/inflated — backed by a short evidence note, including cross-store checks that expose padded “was” prices. Search, category, store, signal, and minimum-discount filters plus four sort orders all run locally in the browser; the site makes no network requests of its own.

## Run it

Build the entry dossier (copies `app/` and `screenshots/` to the output directory and writes `dossier.json`):

```sh
mkdir -p /tmp/bf-out
MAKEFUN_OUTPUT_DIR=/tmp/bf-out node main.ts
```

Serve the site locally:

```sh
cd app
python3 -m http.server 8931
# then open http://127.0.0.1:8931/index.html
```

<sub>Entered on [make.fun](https://make.fun/?ref=xc1qj61w&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
