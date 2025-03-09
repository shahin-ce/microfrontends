find . -type d -name "node_modules" -prune -exec rm -rf {} +
find . -type d -name ".next" -prune -exec rm -rf {} +
find . -type d -name ".turbo" -prune -exec rm -rf {} +
find . -type f -name "package-lock.json" -delete
find . -type f -name "pnpm-lock.yaml" -delete
