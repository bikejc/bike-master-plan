#!/usr/bin/env bash

(for i in `seq 1 168`; do d="$(printf "%03d" "$i")"; echo -n "<a id=\"pg-${i}\"></a>"; echo '![]'"(./imgs/jc%20bike%20master%20plan-${d}.png)"; done) > slides.md
