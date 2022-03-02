#!/usr/bin/env bash

(for i in `seq 0 167`; do echo "<a id=\"pg-${i}\"></a>"; echo '![]'"(./jc%20bike%20master%20plan-${i}.png)"; done) > slides.md
