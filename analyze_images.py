#!/usr/bin/env python3
"""
Image analysis script to extract information from assets folder
"""
import os
from PIL import Image
import json

assets_path = "/Users/randhirkumar/Desktop/moterviw/src/assets"
image_files = [
    "1.jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.12.jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.13.jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.14.jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.14 (1).jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.15.jpeg",
    "WhatsApp Image 2026-06-30 at 19.37.15 (1).jpeg",
    "logo.jpeg"
]

results = {}

for img_file in image_files:
    img_path = os.path.join(assets_path, img_file)
    try:
        with Image.open(img_path) as img:
            results[img_file] = {
                "size": img.size,
                "mode": img.mode,
                "format": img.format,
                "exists": True
            }
            print(f"✓ {img_file}: {img.size[0]}x{img.size[1]} - {img.mode}")
    except Exception as e:
        results[img_file] = {"exists": False, "error": str(e)}
        print(f"✗ {img_file}: {str(e)}")

print(f"\n📊 Total images analyzed: {len(results)}")
print(json.dumps(results, indent=2))
