
import sys

file_path = r'd:\Haroon\local-work-boats\Starboard-Choice-Marine\assets\css\style.css'

with open(file_path, 'rb') as f:
    content = f.read()

# Check for UTF-16 with BOM or similar encoding issues
# If it's garbled as "c o m m o n", it's likely UTF-16 interpreted as ASCII or vice versa.
# But looking at the output, it seems like literal spaces were inserted?
# Actually, if it's UTF-16, every second byte is a null.

# Let's try to decode as utf-16 if it looks like it
try:
    decoded = content.decode('utf-16')
    # If successful, we might have a double-byte issue.
    # But usually echo >> appends in whatever the shell default is.
    
    # Let's just look for the first line of the garbled section and delete everything after it.
    lines = content.splitlines()
    # It's hard to work with raw bytes.
except:
    pass

# Simplified approach: use replacement tool with the garbled content if I can match it.
# Or just use Python to find the line that starts with '/* Generic Hero Section' but garbled.
