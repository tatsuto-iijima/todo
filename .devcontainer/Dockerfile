FROM mcr.microsoft.com/devcontainers/javascript-node:22-bookworm

# Install basic development tools and iptables/ipset
RUN apt-get update && apt-get install -y --no-install-recommends \
  gh \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

  # Install Claude Code
RUN npm install -g @anthropic-ai/claude-code
