# Algorithmic Complexity

**Big O notation** is used in to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
![big_o_notation_graph](https://user-images.githubusercontent.com/44780483/53408265-014a7a00-39b6-11e9-91bd-1b60fb0b2e55.jpeg)


> This repo is designed to only measure the __processing time taken__ of some well known functions.      

## Initial 4 Benchmark Functions:
### The last() Function
![last](https://user-images.githubusercontent.com/44780483/53410240-1ece1280-39bb-11e9-929f-e0aff7919174.png)  
The size of the processing time hardly differs at all when using larger arrays. It simply takes the last item in the array and returns it to the user no matter if there are 2 or 2,000,000 objects in the array.
> this follows an O(1) line, the most efficient algorithm there is. It will always execute in the same amount of time.

### The reversing() Function
![reversing](https://user-images.githubusercontent.com/44780483/53410241-1ece1280-39bb-11e9-83f5-56a18fbccb83.png)  
Anomalies can obviously be seen here, but if we try to follow an average line across our data we can see that when the array length reaches 5mil, the processing time is only 4 milliseconds.

### The shuffle() Function
![shuffle](https://user-images.githubusercontent.com/44780483/53410242-1f66a900-39bb-11e9-954a-6ff0b284fae6.png)  
Approximately 30 times slower than the reversing() function, but with a truer and more even graph.

### The sorting() Function
![sorting](https://user-images.githubusercontent.com/44780483/53410243-1f66a900-39bb-11e9-91b9-6514c33f1bae.png)  
The worst function I tested. This took around 2000 milliseconds for an array size of 5mil. Approximately 16 times slower than the shuffle() function. One main takeaway is the apparent drop in processing time when the array reaches a length of 1mil objects.

## All Functions on One Graph
![allfunctions](https://user-images.githubusercontent.com/44780483/53410987-4d4ced00-39bd-11e9-83bc-692b63b568ad.png)  
When comparing all the functions on the same graph we really see the true scale of how efficient they are, which you don't quite get as much when looking at them on their own. Here I can see the sorting() function clearly comes out as the worst performing. If I was to approximately rate the functions based on my array sizes against the Big O Complexity Chart they would be as follows:
* last() - **O(1)**
* reversing() - **O(log n)**
* sorting() - **O(n log n)**
* shuffle() - **O(log n) / O(n)**
