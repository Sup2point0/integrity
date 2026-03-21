# *Integrity* has 2 Markdown renderers
<!-- #SQUARK live!
| dest = docs/integrity/markdown
| title = Integrity has 2 Markdown renderers
| capt = Exploring why Integrity uses both compile-time and runtime Markdown and $\LaTeX$ renderering chains
| desc = Exploring why Integrity uses both compile-time and runtime Markdown renderering chains
| index = docs / integrating-integrity
| date = 2026 February 23
| update = 2026 March 21
-->

Today in *Integrating Integrity*, I’ll explain why *Integrity* uses 2 entirely separate pipelines to process, render and display Markdown, instead of just 1.

If you’re unfamiliar, [Markdown]() is a super-simple, super-lightweight, super-*intuitive* markup syntax. In fact, even if you’re not a developer there’s a good chance you’ve used it before – many ‘text posting’ platforms (e.g. Discord, reddit) support or partially support it. For instance, to italicise text, you just wrap it in \*single asterisks* to get *single asterisks*.

Almost all of Integrity’s content is written in Markdown. This includes this page you’re currently reading, as well as the scriptures, docs, all the other articles, and even the questions themselves.

> If you’re wondering how the maths is written, that’s using $\LaTeX$, which can be interpolated into Markdown. Whenever I say “Markdown”, you can assume it includes $\LaTeX$ too.

This makes writing the content really fast – no manually writing HTML, formatting a Word document, or whatever other horrible workflow you could imagine. All the formatting I need in Markdown, all processed, rendered, displayed and stylised automatically.

Just one problem though – not all Markdown content on *Integrity* is of the same purpose.

See, there’s the ‘bulky’ content, like an entire page or article (such as this one you’re reading right now), which is a single really large dump of Markdown. But there’s also the ‘fine’ content, like a question’s multiple hints, or the many subsections in its solution, or the steps in a dynamic scripture. These are a much larger amount of really small pieces of Markdown. So the former is ‘single / large’, while the latter is ‘many / small’.

To illustrate how this impacts rendering, I’ll first explain how the large content is handled. These long pages are sourced from Markdown files in the GitHub repo (e.g. this page lives [here](https://github.com/Sup2point0/integrity/blob/main/docs/integrity/markdown.md)). Each page is one file, and it gets preprocessed via [Squarkdown](https://sup2point0.github.io/integrity/info/synopsis#scriptures) into an `.svx` file (a Svelte-Markdown hybrid format used by MDsveX). The entire contents of that `.svx` file can then be imported and displayed as a Svelte component in a page. This all happens at compile-time, meaning minimal runtime impact, and it’s great.

The fine content also comes from Markdown files, except now a single Markdown file supplies many *separate* bits of content. For instance, every integral is written in its own Markdown file, with headings indicating the question, hints, answers, solution, etc. There’s no way to ‘split up’ that content from the `.svx` file, since it acts as a single component rendering the entire file. And even if there were, it’d take a lot of effort to correctly partition the different parts, store them, and retrieve them as needed.

So instead, I opted to write my own parsing engine (maybe a strong description, it’s more of a ‘partitioner’) which scans these Markdown files containing fine content, isolates each block, determines what kind of block they are (text/code/LaTeX/desmos), and produces an object representation of that. This object representation is stored in the site data, which is retrieved and processed at runtime.

But horror! MDsveX, as awesome as it is, only works at compile time by processing `.svx` files.[^mdsvex-compile] So we can't rely on it for runtime rendering.

[^mdsvex-compile]: At least, from what I could glean. Apparently’s there’s a `compile()` runtime function, but I couldn’t get it to work.

At this point, one solution is to move away completely from MDsveX, and use another Markdown renderer that supports runtime rendering. But MDsveX works *fantastically* for compile-time rendering, so it felt a bit stupid throwing that away.

So, as a temporary workaround, I threw together a lightweight RegEx-based custom Markdown renderer which I fed everything through.[^regex-renderer] Since the fine content tended to be pretty simple anyway, I only needed the very basics – *italic*, **bold**, `code` and [links](https://youtube.com/watch?v=yPYZpwSpKmA) – which was pretty chill (...at first) to emulate with RegEx.

[^regex-renderer]: like, literally just a `render_to_markdown()` function which did a bunch of `.replaceAll()`. Very simple, very unsustainable!

But of course, things quickly grew out of hand. There were so many edge cases with the delimiters that I kept having to add in, and each one got tougher to handle (plus, the RegEx patterns were becoming real demons).

> I mean, think about how you'd go about this. You want to replace text that `looks like *this*` with `looks like <em>this</em>`. So the most basic RegEx would check for a starting `*`, anything not a `*` in between, and then a terminating `*`. That gives you `/\*[^\*]*\*/`. Remember that should be non-greedy as well, so it's actually `/\*[^\*]*?\*/`.
> 
> But wait, what about escaped `*`, like when I want to demonstrate to you \*this\*? Or `*` inside a $\LaTeX$ block as in `\begin{align}`? Yeah, it's evidently unsustainable lmao. I knew from the start, but it was satisfactory for a while at least.

This became really apparent once I started writing the [Gamedev in Desmos](https://sup2point0.github.io/integrity/desmos/gamedev) dynamic scriptures, where I was starting to need all sorts of formatting like lists and tables. At this point, a simple RegEx Markdown really wasn't cutting it.

In February 2026, I finally bit the bullet and decided to use a proper Markdown renderer. The best option I found was `svelte-exmarkdown`, which met all my needs for runtime rendering and plugin extensibility. Now, all of the fine content across *Integrity* – even stuff like headers, captions, article links – can hook into the full rendering chain and take advantage of all the available formatting (this is why we could get $\LaTeX$ in this page's caption ;)

Hopefully, you shouldn't even be able to tell the difference between the 2 renderers! Capability-wise, the plugin chain is basically identical, so I can use whichever is more suitable without worrying about rendering (edit as of 2026/03/21: the static renderer now has *more* capability, it can now embed Desmos blocks!).

So, *Integrity* gets the best of both worlds. Static compile-time preprocessing for the large dumps of Markdown so that your browser doesn't have to bear that load, and dynamic runtime rendering for the small bits of content that change a lot.

> Fun fact, Integrity's Markdown rendering pipeline is so smooth that I've often used it just to render Markdown nicely for printing! (with `ctrl`+`P` and “Print to PDF”) Maybe I should make a Markdown editor with the same toolchain just for this...
