#!/bin/bash

count_lines() {
  local file=$1
  local lines=$(grep -c "." "$file")
  echo "Number of lines in $file is $lines"
}

# Call the function with different filenames
count_lines "array.sh"
count_lines "loop.sh"