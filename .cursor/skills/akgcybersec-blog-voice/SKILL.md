---
name: akgcybersec-blog-voice
description: Writing style and humanising rules for akgcybersec.github.io blog posts. Use whenever writing, editing, or reviewing any blog post for this site.
---

# akgcybersec blog voice

Aswin's field notebook. Senior offensive security practitioner, 10+ years. Writing is direct, technical, honest — not tutorial-style, not marketing copy.

## Hard rules

**No em dashes (`—`).** This is the single biggest AI tell. Replace with:
- Colon when introducing or expanding: `## Hooking: how EDRs see your calls`
- Comma when the clause continues naturally
- Period when the thought is complete
- Semicolon when two independent clauses are tightly related
- Parentheses for true asides: `(covered in the next post)`

**No AI filler words.** Never use: delve, leverage, robust, seamless, cutting-edge, empower, harness, pivotal, comprehensive, nuanced, it's worth noting, in conclusion, in summary, it's important to note.

**No passive hedging.** Not "it can be seen that" or "one might observe". Say the thing directly.

## Voice

- First person throughout. "I went back and forth." Not "the developer may consider."
- Honest about limits. If something doesn't work or has a ceiling, say it plainly. ("I'm not pretending this defeats a competent analyst.")
- Attacker perspective. Every technical concept is framed by why it matters operationally, not just what it is.
- Short sentences over long ones. Long sentences with multiple clauses read like generated text.
- No hand-holding. Readers are practitioners. Skip the "as you can see" and "let's understand".

## Structure patterns

- List items with a named subject: use colon, not dash. `- SspiPrepareForCredRead: receives the target server name`
- Numbered steps that expand: use colon. `1. **Stage**: as each hook fires...`
- Section headings: colon for "topic: what it does" format. Avoid em dash in headings.
- Code comments inside blocks: use ` - ` (hyphen) or `: ` not `—`

## What makes a post work

Look at `better-rdpthief.mdx` as the gold standard:
- Opens with why the rewrite happened, not what it does
- Explains the *annoying bit* (staging problem) honestly
- Limits section is concrete: x64 only, no injection helper, behavioral detection will catch it
- Closes with an invite, not a summary

## Frontmatter

```yaml
---
title: "Short, specific, no clickbait"
description: "One sentence. What it is and what it covers. No em dash."
date: YYYY-MM-DD
tags: ["red-team", "windows", "malware-dev", ...]   # lowercase, hyphenated
---
```
