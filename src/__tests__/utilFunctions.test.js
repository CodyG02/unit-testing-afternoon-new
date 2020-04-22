import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenText should shorten a string if it is greater than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText should cut off extra characters and add three periods at the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should count the number of words', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName should attach a name to the corresponding post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove posts without name', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})