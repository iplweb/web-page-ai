# Makefile for Next.js Personal Website
.PHONY: help install dev build start lint clean test type-check format preview deploy

# Default target - show help
help:
	@echo "Available commands:"
	@echo "  make install     - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make start      - Start production server"
	@echo "  make lint       - Run linter"
	@echo "  make type-check - Run TypeScript type checking"
	@echo "  make format     - Format code with Prettier"
	@echo "  make clean      - Clean build artifacts and caches"
	@echo "  make preview    - Build and start production preview"
	@echo "  make deploy     - Build for deployment (runs build and type-check)"

# Install dependencies
install:
	pnpm install

# Development
dev:
	pnpm dev

# Build for production
build:
	pnpm build

# Start production server
start:
	pnpm start

# Linting
lint:
	pnpm lint

# Type checking
type-check:
	pnpm tsc --noEmit

# Format code with Prettier (if configured)
format:
	pnpm prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}"

# Clean build artifacts and caches
clean:
	rm -rf .next
	rm -rf node_modules/.cache
	rm -rf .turbo
	rm -rf out

# Build and preview production build locally
preview: build
	pnpm start

# Full deployment build (type-check, lint, then build)
deploy: type-check lint build
	@echo "✅ Ready for deployment!"

# Development with clean build
dev-clean: clean
	make dev

# Fresh install and development
fresh: clean
	rm -rf node_modules
	pnpm install
	make dev

# Check everything before committing
pre-commit: type-check lint
	@echo "✅ All checks passed!"