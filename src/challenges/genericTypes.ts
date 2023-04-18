function select<TObject, TKey extends keyof TObject>(
  object: TObject,
  key: TKey
) {
  return object[key]
}

const sample = {
  name: 'jerson',
  age: 23,
  status: true,
}

select(sample, 'status')

const methods = {
  play: <TObject, Tkey extends keyof TObject>(object: TObject, key: Tkey) =>
    object[key],
}

methods.play(sample, 'name')
