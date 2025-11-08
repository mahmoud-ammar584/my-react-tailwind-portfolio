#!/bin/bash
# simple-interest.sh - A script to calculate simple interest

# Formula: Simple Interest = (Principal * Rate * Time) / 100

echo "Enter the Principal amount:"
read principal

echo "Enter the Rate of interest (in %):"
read rate

echo "Enter the Time period (in years):"
read time

# Calculate simple interest
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "------------------------------------"
echo "Principal: $principal"
echo "Rate: $rate%"
echo "Time: $time years"
echo "------------------------------------"
echo "Simple Interest = $interest"
echo "------------------------------------"
