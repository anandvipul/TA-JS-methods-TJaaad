Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:

     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```

   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter:
- Return: A New String prepresenting the calling string converted to upper case.
- Example:

  ```js
  let name = "Not a Name";
  console.log(name.toUpperCase());
  ```

  3.`toLowerCase`

- Parameter:
- Return: A New String representing the calling string converted to lower case.
- Example:

  ```js
  let name = "Not a Name";
  console.log(name.toLowerCase());
  ```

4. `trim`

- Return: A new String with trimmed whitespaces along its edges.
- Parameter:
- Example:

  ```js
  let name = " Not a Name   ";
  console.log(name.trim());
  ```

5. `trimEnd`

- Return: It Returns a new string with whitespace trimmed end.
- Parameter:
- Example:

  ```js
  let name = "Not a Name";
  console.log(name.trimEnd());
  ```

6. `trimStart`

- Return: It Returns a new string with whitespace trimmed begining.
- Parameter:
- Example:

  ```js
  let name = "Not a Name";
  console.log(name.trimStart());
  ```

7. `concat`

- Return - Concatenated String input as its parameter.
- Parameter: one or more string to concatenate.
- Example:

  ```js
  let name = "Not a name";
  let str = "Suffix";
  console.log(name.concat(" ", str));
  ```

8. `endsWith`

- Return: Boolean if the end containes the character of string.
- Parameter:

  - String: The String to be searched for.
  - endPosition: The end position at which the string is expected to be found.
    defaults to calling strings length.
  - Example:

  ```js
  let name = "not a Name";
  console.log(name.endsWith("Name"));
  ```

9. `includes`

- Return: method performs a case-sensitive search to determine whether one string may be found within another string
- Parameter:

  - string: A string to be searched withing the calling string.
  - position(optional): The position at which to begin searching for the search string, default to 0.
  - Example:

  ```js
  let name = "Not A aname";
  console.log(name.includes("Not"));
  ```

10. `indexOf`

- Return: When given with single argument or the string, it returns the first occurance
  If given the second argument it returns the index greater than or the given index of
  occurance. else -1,
- Parameter:

  - String: the strring to search for\
  - position: Index at which searching begins
  - Example:

  ```js
  let name = "Not a Name";
  console.log(name.indexOf("t"));
  ```

11. `lastIndexOf`

- Return: When given with single argument or the string, it returns the last occurance
  If given the second argument it returns the index lesser than or the given index of
  occurance. else -1,
- Parameter:

  - String: the string to search for
  - position: Index at which searching ends
  - Example:

  ```js
  let name = "Not a Name";
  console.log(name.lastIndexOf("N"));
  ```

12. `padEnd`

- Return: pads the current string with a given string (repeated, if needed)
  so that the resulting string reaches a given length.
- Parameter:
  (targetLength): The length of resulting String
  (padString): The String to pad the current the calling string.
- Example:

```js
let str1 = "Not a Name";
console.log(str1.padEnd(23, "."));
```

13. `padStart`

- Return: pads the current string begining with a given string (repeated, if needed)
  so that the resulting string reaches a given length.
- Parameter:
  (targetLength): The length of resulting String
  (padString): The String to pad the current the calling string.
- Example:

```js
let str1 = "Not a Name";
console.log(str1.padStart(23, "."));
```

14. `repeat`

- Return: constructs and returns a new string which contains the specified
  number of copies of the string on which it was called,
  concatenated together.
- Parameters:
  - count : An integer between 0 and +Infinity, indicating the number
    of times to repeat the string.
- Example:

```js
"name".repeat(6);
```

15. `replace`

- Return: returns a new string with one, some, or all matches of a pattern
  replaced by a replacement.
- Parameters:

  - (pattern): A string or an object to be searched for replacement.
  - (replacement): can be string or a function, will replace the pattern
    if its a function it will be invoked after every match.

- Example:

```js
let name = "Not a Name";
console.log(name.replace("N", "a"));
```

16. `slice`

- Return: extracts a section of a string and returns it as a new string,
  without modifying the original string.
- Parameters:

  - indexStart: the index of the first character to include in the returned
    substring.
  - indexEnd: thge index of the first character to exclude from the excluded
    substring.

- Example:

```js
let name = "Not a Name";
console.log(name.slice(1, 4));
```

17. `split`;

- Return: takes a pattern and divides a String into an ordered list of
  substrings by searching for the pattern, puts these substrings
  into an array, and returns the array.
- Parameters:
  (delemiter): The identifier from where to split the string into array
  (limit): A non-negative integer specifying a limit on the number of
  substrings to be included in the array.
- Example:

```js
let name = "Not a Name";
console.log(name.split(" "));
```

18`substring`;

- Return: method returns the part of the string between the start and end
  indexes, or to the end of the string.
- Parameters:
  (indexStart): Starting index at which substring has to be cut.
  (indexEnd): The index which has to be excluded for sub stringing.

- Example:

```js
let name = "Not a Name";
console.log(name.substring(1, 3));
```
