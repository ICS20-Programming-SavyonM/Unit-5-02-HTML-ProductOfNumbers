// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calculateProduct() {
  	// initialize the sum to 0
	let sum = 0
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userNum1 = parseInt(document.getElementById('userNum1').value)
	let userNum2 = parseInt(document.getElementById('userNum2').value)

	// use a for loop to calculate the sum of numbers
	for (let counter = 0; counter < userNum2; counter++) {
		sum = sum + userNum1				
	}
	
  	// return the string of numbers back to html	
  	document.getElementById('display-results').innerHTML = userNum1 + "x" + userNum2 + "=" + sum
}
