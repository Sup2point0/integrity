import { Question } from "#scripts/types";


export function inject_question(desmos: any, question: Question)
{
  switch (question.topic) {
    case "integrals":
      let content = Question.sanitise(question.question.content) ?? "error";

      if (question.tags.includes("definite")) {
        let integral = (content
          .replace("\\infin", "\\infty")
        );

        desmos.setExpression({
          id: "integrals-latex-integral",
          latex: integral,
        })
      }
      else {
        let integral = (content
          .replace("\\int", "")
          .replace("dx", "")
        );
        
        desmos.setExpression({
          id: "integrals-latex-integral",
          latex: String.raw`g\left(x\right) = ${integral}`
        });
      }
  }
}

export const presets: Record<string, object[]> =
{
  "integrals": [
    { id: "integrals-title-1", type: "text",
      text: "== Integrity Integral Checker =="
    },
    { id: "integrals-text-filler-1",
      latex: " "
    },
    { id: "integrals-text-antideriv", type: "text",
      text: "Type your antiderivative (answer) here:"
    },
    { id: "integrals-latex-antideriv",
      hidden: true,
      latex: String.raw`f\left(x\right) = `
    },
    { id: "integrals-text-integral", type: "text",
      text: "Type your integral (question) here:"
    },
    { id: "integrals-latex-integral",
      latex: String.raw`g\left(x\right) = `
    },
    { id: "integrals-text-integral-2", type: "text",
      text: "(This should be the expression between ∫ and dx)"
    },
    { id: "integrals-text-filler-2",
      latex: " "
    },
    { id: "integrals-text-antideriv-deriv",
      latex: String.raw`f'\left(x\right)`
    },
    { id: "integrals-text-guide", type: "text",
      text: "If the graphs of f'(x) and g(x) match, then your antiderivative is correct!"
    },
    { id: "integrals-text-filler-3",
      latex: " "
    },
    { id: "integrals-latex-c",
      latex: "c = 0"
    },
  ],
  "complete-square": [
    { id: "complete-square-title-1", type: "text",
      text: "== Integrity Completing the Square Checker ==",
    },
    { id: "complete-square-text-filler-1",
      latex: " "
    },
    { id: "complete-square-text-quad", type: "text",
      text: "Type your original quadratic here:"
    },
    { id: "complete-square-latex-quad",
      latex: String.raw`f\left(x\right) = x^{2} + x + 1`
    },
    { id: "complete-square-text-complete", type: "text",
      text: "Type your quadratic in completed square form here:"
    },
    { id: "complete-square-latex-complete",
      latex: String.raw`g\left(x\right) = \left(x - p\right)^{2} + q`
    },
    { id: "complete-square-text-filler-2",
      latex: " "
    },
    { id: "complete-square-text-guide", type: "text",
      text: "If the graphs of f(x) and g(x) match, then your solution is correct!"
    },
  ],
}
