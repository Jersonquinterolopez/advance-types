/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s: string) {
  // find characters in string
  let vowels = 'aeiou'
  let consonants = 'bcdfghjklmnpqrstvwxyz'
  let result = ''

  let vowelsOfString = ''
  let consonantsOfString = ''

  for (let character of s) {
    for (let vowel of vowels) {
      if (character.includes(vowel))
        vowelsOfString = vowelsOfString.concat(vowel)
    }
    for (let consonant of consonants) {
      if (character.includes(consonant))
        consonantsOfString = consonantsOfString.concat(consonant)
    }
  }

  result = vowelsOfString + consonantsOfString
  for (let char of result) {
    console.log(char)
  }
}

// or

export function vowelsAndConsonantsWithRegex(s: string) {
  const vowelsOnly = (string: string) => {
    return string.match(/[aeiou]/gi)
  }
  const consonantsOnly = (string: string) => {
    return string.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  }

  let result = [...[vowelsOnly(s)], ...[consonantsOnly(s)]]

  for (let character of result) console.log(character)
}

vowelsAndConsonantsWithRegex('jeropa')

// export {}
