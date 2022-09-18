Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: seperator(optional): specifies a string to seperate each pair of
     adjacent elements of the array.
   - Return: A string with all array elements joined.
   - Example:

   ```js
   let name = "Not a Name";
   name = name.split(" ");
   console.log(name.join()); // NotaName
   console.log(name.join("*")); // Not*a*Name
   ```

3. `flat`
4. `push`
5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`

- Parameter:
  - start(optional): zero-based index at which extraction starts
  - end(optional): index where the extraction finishes(not included).
- Return: A shallow copy of the extracted array;
- Examples:
  ```js
  let name = "Not a Name".split(" ");
  console.log(name.slice(0, 2)); // ["Not", "a"]
  ```

22. `some`

- Parameter:
  - callbackFn: A function to be applied to each elements.
    - element: the current element being processed
    - index: the index of the current element
    - array: the array calling the some function.
- Return: true, of the callback function returns a truthy value for at
  least one element in the array, else false.
- Example:

```js
let arr = [1, 2, 3, 4, 5, 6, 7];
const checkEven = (num) => num % 2 == 0;
console.log(arr.some(checkEven)); //true
```
