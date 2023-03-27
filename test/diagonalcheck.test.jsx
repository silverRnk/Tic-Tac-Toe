import { expect, test } from "vitest";
import { checkForDiagonalWinningCondition } from "../src/helpers/WinnerChecker";

const testCase3 = [[], [], []]
const testCase4 = []
const testCase5 = [['x', 'x', 'x'], ['s', 'x', 's'], ['z', 'z', 'x']]
const testCase6 = [['x', 'x', 'z'], ['s', 'z', 's'], ['z', 's', 'x']]


test('If Empty Array', () => { 
    expect(checkForDiagonalWinningCondition(testCase3, {name: 'foo', type:'x'})).toBe(false)
    expect(checkForDiagonalWinningCondition(testCase4, {name: 'foo', type:'x'})).toBe(false)
 })

 test('If No Winning Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase5, {name: 'foo', type:'s'})).toBe(false)
 })

 test('If Winning Combination is At 1-5-9 Diagonal Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase5, {name: 'foo', type:'x'})).toBe(true)
 })

 test('If Winning Combination is At 1-5-9 Diagonal Combination', () => {
    expect(checkForDiagonalWinningCondition(testCase6, {name: 'foo', type:'z'})).toBe(true)
 })