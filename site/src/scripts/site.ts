import { data } from "./data";
import type { Integral } from "#scripts/types";


interface SiteData {
  integrals: Integral[];
}

const Site: SiteData = {
  integrals: data,
};

export default Site;
