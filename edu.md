# *decoded* – integrity

> [!Note]
> This is part of my [*decoded*](https://github.com/Sup2point0/Assort/blob/origin/~dev/decoded.md) series, a collection of lessons learnt from each major project I’ve undertaken.


<br>


## Learnings

- Doing questions on a topic every day *really* makes you better at it.
  - *Writing* questions on a topic *REALLY* makes you better at it.
- You genuinely develop quite an insane intuition for topics when you immerse yourself in them for a prolonged period.
- Development is a blast when you have the right tooling all available in advance.


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
