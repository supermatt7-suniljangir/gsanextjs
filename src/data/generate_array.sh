#!/bin/bash

# Check for correct number of arguments
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <category-folder> <output-filename> <number-of-items>"
    exit 1
fi

CATEGORY=$1            # e.g., marble-urli
OUTPUT_FILE=$2         # e.g., marble_urli.js
NUM_ITEMS=$3           # e.g., 44

# Extract base name from output file (remove extension)
BASENAME="${OUTPUT_FILE%.*}"

# Start the array definition
ARRAY="const $BASENAME = ["

# Generate items
for i in $(seq 1 "$NUM_ITEMS"); do
  INDEX=$(printf "%02d" "$i")  # Keep leading zeros for 1-9
  ARRAY+="
  {
    id: $i,
    name: \"Item $i\",
    image: \"/assets/$CATEGORY/$CATEGORY-$INDEX.webp\",
    range: \"₹5000 - ₹10,000\"
  },"
done

# Close the array and add export statement
ARRAY+="
];
export default $BASENAME;"

# Write to file
echo "$ARRAY" > "$OUTPUT_FILE"

echo "✅ Generated $NUM_ITEMS items in $OUTPUT_FILE"
