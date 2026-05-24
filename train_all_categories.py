#!/usr/bin/env python3
"""
Train all category classifiers with 10 epochs (quick mode).
Run this to complete the model training.
"""
import os
import subprocess
import sys

def train_category_models():
    """Train all 5 category classifiers."""
    categories = [
        ("metal", "Metal"),
        ("organic", "Organic"),
        ("paper", "Paper"),
        ("plastic", "Plastic"),
        ("non_organic", "Non_Organic"),
    ]
    
    base_cmd = "yolo classify train model=yolov8n-cls.pt data='data/category_{}_split' epochs=10 imgsz=320 device=mps name=category_{} batch=32"
    
    for cat_lower, cat_title in categories:
        model_path = f"models/category_{cat_lower}.pt"
        
        # Skip if already trained
        if os.path.exists(model_path):
            print(f"✅ {cat_title} classifier already exists at {model_path}")
            continue
        
        print(f"\n{'='*60}")
        print(f"Training {cat_title} Classifier ({cat_lower.upper()})")
        print(f"{'='*60}")
        
        cmd = base_cmd.format(cat_lower, cat_lower)
        result = subprocess.run(cmd, shell=True, cwd="/Users/ayenyeinsan/Documents/trash-classification")
        
        if result.returncode == 0:
            # Copy to models
            src = f"runs/classify/category_{cat_lower}/weights/best.pt"
            dst = model_path
            if os.path.exists(src):
                subprocess.run(f"cp {src} {dst}", shell=True)
                print(f"✅ Copied {cat_lower} model to {dst}")
        else:
            print(f"⚠️  {cat_title} training failed with code {result.returncode}")
    
    print(f"\n{'='*60}")
    print("Training Complete!")
    print(f"{'='*60}")
    print("\nModels available in models/:")
    for f in sorted(os.listdir("models")):
        if f.endswith(".pt"):
            size_mb = os.path.getsize(f"models/{f}") / (1024*1024)
            print(f"  ✅ {f} ({size_mb:.1f} MB)")

if __name__ == "__main__":
    os.chdir("/Users/ayenyeinsan/Documents/trash-classification")
    train_category_models()
