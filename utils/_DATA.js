export const words = {
    nouns: [
        'man',
        'dog'
    ],
    verbs: [
        'walks',
        'eats'
    ],
    determiners: [
        'the',
        'a',
        'an'
    ]
}

const get_random_noun = (words) => (
    words['nouns'][Math.floor(Math.random() * words['nouns'].length)]
)

const get_random_verb = (words) => (
    words['verbs'][Math.floor(Math.random() * words['verbs'].length)]
)

const get_random_determiner = (words) => (
    words['determiners'][Math.floor(Math.random() * words['determiners'].length)]
)

export const create_simple_sentence = (words) => (
    Array(get_random_determiner(words), get_random_noun(words), get_random_verb(words)).join(" ")
)