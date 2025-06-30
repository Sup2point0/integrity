import { userprefs } from "#scripts/stores";

export function sync() {
  userprefs.update(s => {
    s.skipped = s.skipped;
    return s;
  });
}
