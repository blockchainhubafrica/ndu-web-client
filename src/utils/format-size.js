function formatSize(size) {
  if (size < 1000) return `${size}`;
  if (size >= 1000 && size < 1000000) return `${size / 1000}K`;
  if (size >= 1000000) return `${size / 1000000}M`;
}

export { formatSize };
