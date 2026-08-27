# Which Language

## 1. The language

**TypeScript.**

Commit to it for the next 12 months. Default to extending that commitment to 18 months.

## 2. Why TypeScript fits you specifically

Your target identity is not “functional-language specialist.” It is **a product and backend engineer who applies functional design discipline to real systems**. TypeScript is the best total bet for that identity.

### It preserves the work that should now compound

Pesisir already contains meaningful domain slices for shipments, HS classification, LARTAS checking, bill-of-lading extraction, document ingestion, AI integration, and a PWA surface. You have also separated core logic, infrastructure, and application adapters and added an architecture check.

Changing languages now would turn an active product into a migration project. With two hours per day, that opportunity cost is decisive. Your next year should produce users, operational experience, deeper domain models, and credible hiring evidence—not another beginner period.

### It can express the way you think

TypeScript supports your preferred design style well enough:

- Discriminated unions for commands, events, states, and failures.
- `readonly` domain values and immutable updates.
- Pure functions for state transitions and business rules.
- Exhaustive `switch` statements with `never`.
- Explicit ports between the domain and external systems.
- `unknown` at untrusted boundaries, followed by parsing into domain data.
- Small modules built from data and functions rather than framework classes.

Your ideal architecture is a functional core surrounded by an imperative shell. TypeScript can implement that directly. Your current Pesisir structure already proves this is not theoretical.

Do not compensate for TypeScript’s imperfections by importing an elaborate effect system or architecture framework. Plain data, plain functions, explicit boundaries, and boring infrastructure first.

### It covers the whole project without a second production language

Pesisir needs browser UI, APIs, document handling, scheduled work, integrations, AI orchestration, and possibly local-first behavior. TypeScript can operate across all of those surfaces. That matters because you have asked for one language: every language boundary consumes time in serialization, tooling, deployment, debugging, and duplicated knowledge.

AI agents are mainly state, tools, durable workflows, permissions, retries, and evaluation. Those are software-engineering problems, not reasons to restart in a model-training language. Distributed-systems fundamentals—idempotency, queues, leases, transactions, delivery semantics, backpressure, and failure recovery—can also be learned and implemented without changing languages.

### It gives your self-taught path enough market surface

Your strongest hiring story is not “I completed another language course.” It is:

> I designed, shipped, and operated software for a real Indonesian business domain, with explicit domain models, document automation, AI-assisted workflows, tests, deployment, and users.

TypeScript lets you produce that story fastest while remaining eligible for frontend, backend, full-stack, product-engineering, automation, and AI-application roles. [GitHub’s 2025 Octoverse](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) found that TypeScript had become its most-used language. That is not a job count, but it is strong evidence of ecosystem depth and employer familiarity.

At 38, your advantage is judgment, domain knowledge, and the ability to finish consequential work. Staying with TypeScript lets those advantages accumulate instead of repeatedly presenting yourself as a language beginner.

### Next.js is not TypeScript

Do not mistake framework fatigue for language mismatch. Next.js is an adapter around your application, not your programming model. If it creates unacceptable complexity, change the adapter when evidence justifies it—but keep the domain and the language. Your framework-independent core already gives you that option.

## 3. Why you should reject the strongest alternative

The strongest alternative is **Elixir**.

It matches your aesthetic preferences more closely: immutable data, pattern matching, pipelines, lightweight processes, supervision, and explicit message passing. That is exactly why it is dangerous for you now. It offers a compelling new-language honeymoon at the moment when your actual need is sustained depth.

Three facts outweigh the attraction:

1. **It resets existing leverage.** You would need to learn the language, OTP, Phoenix, Ecto, deployment conventions, and a new ecosystem while either rewriting Pesisir or maintaining two stacks.
2. **Its accessible employment market is much narrower and more senior-biased.** Current Jobstreet snapshots show [233 TypeScript listings in Indonesia](https://id.jobstreet.com/typescript-jobs) versus [one Elixir listing](https://id.jobstreet.com/elixir-jobs), with the Elixir result being senior. The current [Elixir Radar remote board](https://elixir-radar.com/jobs) is also dominated by senior and geographically restricted positions. These counts are noisy snapshots, but their direction is career-relevant.
3. **It is not an unqualified win for your explicit-modeling preference.** Elixir 1.20 now performs useful inferred gradual checking, but its [official release announcement](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/) says user-supplied set-theoretic signatures and typed structs remain future work.

Elixir would be a defensible choice for an established engineer choosing a backend niche. It is the wrong risk for a self-taught candidate seeking a first remote role while already owning a substantial TypeScript product.

Reject it for this commitment. Do not add an Elixir service to Pesisir; that is switching under another name.

## 4. What you lose

This choice has real costs:

- Immutability remains a discipline rather than a runtime default.
- `readonly` is shallow, and TypeScript’s type system is deliberately unsound.
- Types disappear at runtime, so external data must be validated explicitly.
- There is no native algebraic pattern matching or OTP-style supervision.
- The package ecosystem is noisy and rewards unnecessary dependencies.
- Framework churn can consume attention if you let it.
- CPU-heavy native work, model training, and certain distributed-runtime problems are not TypeScript’s strengths.

The trade is deliberate: **you give up a language that automatically reinforces more of your taste in exchange for uninterrupted product leverage, explicit static models, broader employment access, and one mature ecosystem across Pesisir.**

The language will not enforce all your standards. You must.

## 5. The 12-month commitment rule

> For the next 365 days, every elective line of production code, portfolio code, interview code, and algorithm-practice code is TypeScript. Pesisir is the primary vehicle. The language decision is closed.

### Allowed

- Use the language required by a specific HtDP, SICP, CSAPP, or other CS exercise. Complete the exercise, extract the concept, and stop. This is academic notation, not a new ecosystem to explore.
- Write SQL, HTML, CSS, shell configuration, and unavoidable generated or integration files.
- Read papers or source code written in another language.
- Change a TypeScript library, runtime, or framework when a documented Pesisir requirement justifies it.
- Use an external binary or hosted service as infrastructure without beginning a course in its implementation language.
- Use another language when a real paid assessment, contract, or job requires it; that invokes the reconsideration threshold below.

### Not allowed

- New side projects, tutorials, coding challenges, or open-source efforts in another language.
- Rewriting Pesisir to compare architectures.
- Adding another-language microservices for hypothetical scale.
- “Just one weekend” with a new language.
- Language benchmarks, roadmap videos, ecosystem browsing, or repeated career-language comparisons.
- Treating Next.js frustration, a missing package, or a hard feature as evidence against TypeScript.
- Making TypeScript imitate another language through elaborate generic machinery or an unnecessary effect framework.

Keep a dated “after the commitment” parking lot. Record temptations there without researching them. Review your shipped work every quarter; do not review the language decision.

At month 12, the default decision is another six months of TypeScript if Pesisir, your portfolio, or your job search is accumulating useful evidence.

## 6. Threshold for reconsideration

Abandon TypeScript before month 12 only under one of these circumstances:

1. **A signed opportunity:** You receive an acceptable paid remote job or contract of at least six months, and another language is mandatory.
2. **A proven product blocker:** A non-negotiable capability central to Pesisir cannot be delivered in TypeScript or through a stable external tool or service. This must be demonstrated by a representative prototype, measured against explicit requirements, confirmed by two experienced engineers, and expected to constitute at least half of your future engineering work.
3. **A materially different reachable market:** After month nine, you sample 100 unique backend, full-stack, or product-engineering roles over eight consecutive weeks, across at least three sources, all legally remote from Indonesia and appropriate to your experience. Reconsider only if fewer than ten accept TypeScript while at least forty require the same other language—and only after Pesisir is deployed and two experienced hiring engineers have reviewed your résumé and portfolio.

Boredom, elegance, a conference talk, one rejection, one missing library, framework churn, compiler difficulty, or a bad week are not thresholds.

## 7. For the next temptation

When Rust promises rigor, Zig promises control, Clojure or Haskell promises purity, Ruby promises joy, Go promises simplicity, Elixir promises the runtime that finally matches your mind, or a shiny replacement for your TypeScript stack appears, write its name in the parking lot and return to the next Pesisir milestone. The attraction is information, not instruction. You have already explored enough to choose; what you lack is twelve uninterrupted months of shipping, operating, failing, correcting, and improving one substantial system. **Do not reset the clock.**
