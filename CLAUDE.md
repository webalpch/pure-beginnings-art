# CLAUDE.md — Routes du Cambodge

Instructions et contexte pour Claude Code sur ce projet.

## Frontend Design

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

### Design Thinking
Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE?

CRITICAL: Choose a clear conceptual direction and execute it with precision.

### Frontend Aesthetics Guidelines
- **Typography**: Avoid generic fonts (Arial, Inter, Roboto). Use distinctive, characterful font choices. Pair a display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables. Dominant colors with sharp accents.
- **Motion**: Animations and micro-interactions. CSS-only for HTML, Motion library for React. Staggered reveals, scroll-triggering, surprising hover states.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, grain overlays.

NEVER use generic AI aesthetics: overused fonts, cliché purple gradients, predictable layouts, cookie-cutter design. Every design should be unique and contextual.

## Context7 Documentation Lookup

Use when looking up library documentation, API references, framework patterns, or code examples for ANY library (React, Next.js, Vue, Django, Laravel, etc.). Fetches current docs via Context7 REST API. Triggers on: how to use library, API docs, framework pattern, import usage, library example.

### When to Use

Use this skill when the user asks about library APIs, framework patterns, or version-specific behavior. Trigger on:

- Library questions: "How do I use [library]?", "[library] API docs", "[library] patterns"
- Import statements: `import`, `require`, `from` followed by a library name
- Framework-specific topics: hooks, routing, middleware, ORM queries, schema definitions

### Core Workflow

1. **Search** for the library ID:
   ```bash
   scripts/context7.sh search "library-name"
   ```

2. **Pick the best result**: Choose the ID with the highest score and most relevant description. Prefer official sources.

3. **Fetch documentation** with a focused topic:
   ```bash
   scripts/context7.sh docs "<library-id>" "<topic>" "<mode>"
   ```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `library-id` | Yes | From search results, format `/vendor/library` |
| `topic` | No | Focus area extracted from user query |
| `mode` | No | `code` (default) for API references; `info` for conceptual guides |

### Examples

```bash
scripts/context7.sh search "react"
scripts/context7.sh docs "/facebook/react" "hooks" "code"
scripts/context7.sh docs "/vercel/next.js" "app router" "info"
```
