import { expect, test } from "vitest";
import { checkForVerticalWinningCombination, checkForHorizontalWinningCombination } from "../src/helpers/WinnerChecker";
import player from "../src/player";

const testCase1 = [['x', 'x', 'x'], ['s', 's', 's'], ['z', 'z', 'z']]
const testCase2 = [['x', 'y', 'z'], ['x', 'y', 'z'], ['x', 'y', 'z']]
const testCase3 = [[], [], []]
const testCase4 = []


test('If empty array', () => {
    expect(checkForHorizontalWinningCombination(testCase4, player('foo', {type: 's', piece: ''}))).toBe(false)
})

test('If there is no winning combination', () => {
    
    expect(checkForHorizontalWinningCombination(testCase1, player('foo', {type: 'f', piece: ''}))).toBe(false)
})

test('If winning combination is a first row', () => {
    
    expect(checkForHorizontalWinningCombination(testCase1, player('foo', {type: 'x', piece: ''}))).toBe(true)
})

test('If winning combination is a second row', () => {
    
    expect(checkForHorizontalWinningCombination(testCase1, player('foo', {type: 's', piece: ''}))).toBe(true)
})

test('If winning combination is a Third row', () => {
    
    expect(checkForHorizontalWinningCombination(testCase1, player('foo', {type: 'z', piece: ''}))).toBe(true)
})

test('If empty array', () => {
    expect(checkForVerticalWinningCombination(testCase3, player('foo', {type: 'q', piece: ''}), 0)).toBe(false)
})

test('If no vertical winning condition', () => {
    expect(checkForVerticalWinningCombination(testCase2, player('foo', {type: 'q', piece: ''}), 0)).toBe(false)
})

test('If vertical winning condition is at first column', () => {
    expect(checkForVerticalWinningCombination(testCase2, player('foo', {type: 'x', piece: ''}), 0)).toBe(true)
})

test('If vertical winning condition is at second column', () => {
    expect(checkForVerticalWinningCombination(testCase2, player('foo', {type: 'y', piece: ''}), 0)).toBe(true)
})

test('If vertical winning condition is at third column', () => {
    expect(checkForVerticalWinningCombination(testCase2, player('foo', {type: 'z', piece: ''}), 0)).toBe(true)
})

