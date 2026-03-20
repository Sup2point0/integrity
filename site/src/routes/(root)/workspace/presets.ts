import { Question } from "#scripts/types";


export function inject_question(desmos: any, question: Question)
{
  switch (question.topic)
  {
    case "integrals":
      let content = Question.sanitise(question.question.content) ?? "error";

      if (!question.flags.includes("definite")) {
        let integral = (content
          .replace("\\int", "")
          .replace("\\ dx", "")
        );
        
        desmos.setExpression({
          id: "int-latex-integrand",
          latex: String.raw `g\left(x\right) = ${integral}`,
        });
      }
      else {
        let integral = (content
          .replace("\\infin", "\\infty")
        );

        desmos.setExpression({
          id: "int-latex-integral",
          latex: String.raw `I = ${integral}`,
        })
      }

    // TODO: Inject completing the square question
  }
}

export const presets: Record<string, object[]> =
{
  "integrals": [
    { id: "integrals-title-1", type: "text",
      text: `== Integrity Indefinite Integral Checker ==`,
    },
    { id: "int-filler-1",
      latex: " ",
    },
    { id: "int-note-antideriv", type: "text",
      text: `Enter your answer (antiderivative) here:`,
    },
    { id: "int-latex-antideriv",
      hidden: true,
      latex: String.raw `f\left(x\right) = `,
    },
    { id: "int-note-integral", type: "text",
      text: `Enter your question (integrand) here:`,
    },
    { id: "int-latex-integrand",
      latex: String.raw `g\left(x\right) = `,
    },
    { id: "int-note-integral-2", type: "text",
      text: `(This is the expression between ∫ and dx)`,
    },
    { id: "int-filler-2",
      latex: " ",
    },
    { id: "int-note-guide", type: "text",
      text: `If the graphs of f’(x) and g(x) match exactly, then your antiderivative is correct!`,
    },
    { id: "int-latex-antideriv-deriv",
      latex: String.raw `f'\left(x\right)`,
    },
    { id: "int-filler-3",
      latex: " ",
    },
    { id: "int-latex-c",
      latex: "c = 0",
    },
  ],
  "integral-definite": [
    { id: "integrals-title-1", type: "text",
      text: `== Integrity Definite Integral Checker ==`,
    },
    { id: "int-filler-1",
      latex: " ",
    },
    { id: "int-note-antideriv", type: "text",
      text: `Enter your answer here:`,
    },
    { id: "int-latex-antideriv",
      latex: "A = ",
    },
    { id: "int-note-integral", type: "text",
      text: `Enter your question (integral) here:`,
    },
    { id: "int-latex-integral",
      latex: "I = \int \ dx",
    },
    { id: "int-note-integral-2", type: "text",
      text: `(This should evaluate to a constant)`,
    },
    { id: "int-filler-2",
      latex: " ",
    },
    { id: "int-latex-answer-diff",
      latex: "I - A",
    },
    { id: "int-note-guide", type: "text",
      text: `If the difference is 0 (or very, very small), your answer is most likely correct!`,
    },
  ],
  "complete-square": [
    { id: "complete-square-title-1", type: "text",
      text: `== Integrity Completing the Square Checker =="`,
    },
    { id: "complete-square-text-filler-1",
      latex: " ",
    },
    { id: "complete-square-text-quad", type: "text",
      text: `Type your original quadratic here:`,
    },
    { id: "complete-square-latex-quad",
      latex: String.raw `f\left(x\right) = x^{2} + x + 1`,
    },
    { id: "complete-square-text-complete", type: "text",
      text: `Type your quadratic in completed square form here:`,
    },
    { id: "complete-square-latex-complete",
      latex: String.raw `g\left(x\right) = \left(x - p\right)^{2} + q`,
    },
    { id: "complete-square-text-filler-2",
      latex: " ",
    },
    { id: "complete-square-text-guide", type: "text",
      text: `If the graphs of f(x) and g(x) match, then your solution is correct!`,
    },
  ],
}
