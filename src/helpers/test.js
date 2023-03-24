import {checkForHorizontalWinningCombination, checkAtRow } from "./WinnerCheckr";

const testCase1 = [['x', 'x', 'y'], ['s', 's', 's'], ['z', 'z', 'z']]
const testCase2 = [['x', 'x', 'y'], ['s', 's', 's'], ['z', 'z', 'n']]

function runTest(){
    //checkAtRow(testCase1[2], 'z')
    checkAtRow(testCase1[0], 's')
}

function runTest2(){
    console.log(`Is there horz comb ${checkForHorizontalWinningCombination(testCase1, {name: 'dddd', type: 'z'})}`)
}

function runTest3(){
    console.log(`Is there horz comb ${checkForHorizontalWinningCombination(testCase2, {name: 'dddd', type: 'z'})}`)
}

export {runTest, runTest2, runTest3}