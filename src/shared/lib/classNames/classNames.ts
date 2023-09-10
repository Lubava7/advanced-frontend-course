type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods, //  вместо знака вопрроса можно сделать дефолтну инифиализацию , например пустой объект и таким обзом они станут необзятаельными
  additional?: string[]
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
