## Newton Square root

The newtonSqrt algorithm approximates the square root of a given number n using the Newton-Raphson method with a specified tolerance and maximum number of iterations. It starts with an initial upper bound and lower bound for the square root (where the upper bound is set to n and the lower bound is set to 0).

It then iteratively calculates the midpoint between the upper and lower bounds, and checks if the square of the midpoint is closer to n than the original bounds. The process continues until the difference between the square of the midpoint and n is within the specified tolerance or the maximum number of iterations is reached.

If the result is a perfect square, the algorithm returns the exact square root; otherwise, it returns an approximation within the specified tolerance.