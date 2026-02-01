# Synopsis
<!-- #SQUARK live!
| dest = info/synopsis
| capt = All about <em>Integrity</em>
| desc = Integrity is a collection of maths questions, guides and adventures by Sup#2.0
| index = info
| clean = line-breaks
-->

In late 2024, I came to really enjoy writing my own maths questions,[^write-questions] particularly integrals. So, *Integrity* started out as a place to collect all my maths questions, much like [*Assort*](https://github.com/Sup2point0/Assort) is a repository of all my creations.

[^write-questions]: I started writing these for maths competitions I was helping run at school, but now I just write them for fun!

Well, *Integrity*’s grown quite a bit, as you might be able to see. You’ll now also find here:

- [*scriptures*](https://sup2point0.github.io/integrity/scriptures): hand-written guides, walkthroughs and commentaries on maths and related things
- [Desmos](https://desmos.com)-related explorations like [Gamedev in Desmos](https://sup2point0.github.io/integrity/desmos/gamedev) and the [Desmos library](https://sup2point0.github.io/integrity/desmos/library)
- tools for practising maths, like [Speedrun](https://sup2point0.github.io/integrity/speedrun) and [Workspace](https://sup2point0.github.io/integrity/workspace)

I’m sure your curiosity can take care of the rest! Enjoy *Integrity* o7


<br>


## Site

- Built with [Svelte 5](https://svelte.dev) + [SvelteKit](https://svelte.dev/docs/kit)
- Hosted on [GitHub Pages](https://pages.github.com/)

The entire site is static, with all interactivity running client-side!

### Tech
- [SCSS](https://sass-lang.com) for styling
- [KaTeX](https://katex.org) for LaTeX maths rendering
- [MDsveX](https://mdsvex.pngwn.io) for Markdown
- [Desmos API](https://www.desmos.com) for Desmos, used with permission kindly provided by Desmos Studio PBC
- My [*StrangerQuarkdown*](https://github.com/Sup2point0/stranger-quarkdown) framework for preprocessing content

### Fonts
Fonts from [Google Fonts](https://fonts.google.com).

- [Geologica](https://fonts.google.com/specimen/Geologica) (sans serif)
- [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) (serif)


<br>


## Questions

I write the questions in Markdown files using LaTeX (you can find their source on [GitHub](https://github.com/Sup2point0/integrity/tree/main/questions)). They’re preprocessed by a [Ruby](https://www.ruby-lang.org) script I wrote for integration (heh) with the site, which parses the files and extracts the content.


<br>


## Scriptures

Same as the questions! I write the scriptures in Markdown files using LaTeX. The files are preprocessed by [*StrangerQuarkdown*](https://github.com/Sup2point0/stranger-quarkdown) (a content preprocessing framework I made, also in Ruby, funnily enough).


<br>


## Dynamic Scriptures

The interactive step-by-step scriptures you’ll find in places like [Gamedev in Desmos](https://sup2point0.github.io/integrity/desmos/gamedev) are ...still written in Markdown with LaTeX! The files are preprocessed by the same Ruby script as the questions are. I also made my own LaTeX-like command syntax which I use to configure the Desmos embed.


<br>
