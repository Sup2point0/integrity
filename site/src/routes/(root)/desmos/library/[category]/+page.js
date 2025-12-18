import { capitalise } from '#scripts/utils';


export function load({ params })
{
  return {
    category: capitalise(params.category),
  };
}
