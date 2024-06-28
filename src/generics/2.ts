type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

interface CompareParams {
  top: Pick<AllType, 'name' | 'color'>;
  bottom: Pick<AllType, 'position' | 'weight'>;
}

function compare({ top, bottom }: CompareParams): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
