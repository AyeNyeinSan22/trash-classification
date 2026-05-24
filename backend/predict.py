from ultralytics import YOLO
import sys

model = YOLO("models/metal_classifier.pt")

results = model.predict(sys.argv[1])

top = results[0].probs.top1
name = results[0].names[top]

print(name)