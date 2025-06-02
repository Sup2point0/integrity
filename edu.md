# *decoded*: Integrity
<!-- #SQUARK live!
| dest = info/decoded
| title = decoded: Integrity
| head = <em>decoded</em>: Integrity
| capt = Learnings, challenges and discoveries from writing my own maths questions
| index = info
-->

> [!Note]
> This is part of my [*decoded*](https://github.com/Sup2point0/Assort/blob/origin/~dev/decoded.md) series, a collection of lessons learnt from each major project I’ve undertaken.


<br>


## Learnings

- Doing questions on a topic every day *really* makes you better at it.
  - *Writing* questions on a topic *REALLY* makes you better at it.
- You genuinely develop quite an insane intuition for topics when you immerse yourself in them for a prolonged period.
- Development is a blast when you have the right tooling all available in advance.
- Nice UIs aren’t *that* difficult to build if you prototype and think through things properly.
- A lot of projects can end up wayyy larger than you expected or intended.
  - Yes, this happened with *Integrity*.
- Fuzzy string matching for searching is incomparably better than raw string matching.[^fuzzy]

[^fuszy]: tbf, this is kind of a given. Also I’m talking purely results here, not speed.


<br>


## Difficulties

- I wasn’t sure how to go about storing the questions.
  - Originally, I considered writing JSON manually, but this was clearly unideal (as much as I love manually writing JSON).
  - I settled on writing each question in its Markdown file, using YAML frontmatter for metadata and then writing a small parsing engine in Ruby to extract the text blocks.
  - Organising by files is pretty nice, since it makes finding a particular question and tracking its version history much easier.
  - I decided against using Squarkdown to export to `.svx` files, since questions needed more fine-tuned formatting and different treatment depending on their topic.
- Writing LaTeX manually is *long*. Luckily, we can type mathematical expressions in Desmos and ctrl+CV, which directly copies the raw LaTeX!


<br>


## Discoveries

- Writing maths questions is sooooo fun!
