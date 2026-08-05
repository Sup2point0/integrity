import { userprefs } from "#scripts/stores";

// FIXME
export function sync() {
  userprefs.update(s => {
    s.skipped = s.skipped;
    return s;
  });
}
