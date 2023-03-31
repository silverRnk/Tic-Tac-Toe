import { expect, test } from "vitest";
import { checkForDiagonalWinningCondition } from "../src/helpers/WinnerChecker";
import player from "../src/player";
const testCase3 = [[], [], []]
const testCase4 = []
const testCase5 = [['x', 'x', 'x'], ['s', 'x', 's'], ['z', 'z', 'x']]
const testCase6 = [['x', 'x', 'z'], ['s', 'z', 's'], ['z', 's', 'x']]


test('If Empty Array', () => { 
    expect(checkForDiagonalWinningCondition(testCase3, player('foo', {type: 'x', piece: ''}))).toBe(false)
    expect(checkForDiagonalWinningCondition(testCase4, player('foo', {type: 'x', piece: ''}))).toBe(false)
 })

 test('If No Winning Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase5, player('foo', {type: 's', piece: ''}))).toBe(false)
 })

 test('If Winning Combination is At 1-5-9 Diagonal Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase5, player('foo', {type: 'x', piece: ''}))).toBe(true)
 })

 test('If Winning Combination is At 1-5-9 Diagonal Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase6, player('foo', 
    {type: 'z', piece: ''}))).toBe(true)
 })