#!/usr/bin/env python3
from pathlib import Path
import shutil
ROOT = Path(__file__).resolve().parents[1]
src = ROOT / 'docs'
dst = ROOT / 'website' / 'docs'
if dst.exists():
    shutil.rmtree(dst)
shutil.copytree(src, dst)
print(f'Synced {src} -> {dst}')
