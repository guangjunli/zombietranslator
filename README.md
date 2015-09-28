*The end is nigh!*
But we can prepare. In this assignment we will begin preparing for the end by creating a simple zombie translator. This can be used by the living for either concealment or bartering and the living impaired will have an easier time asking for brains. 

The translator can be done as a series of regular expressions (Links to an external site.) or you can step through it character by character. You get a string and you transform that string. 

## The Rules

These are the rules implemented:

\#1 lower-case "r" at the end of words replaced with "rh".
\#2 an "a" or "A" will be replaced with "hra".
\#3the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
\#4 "e" or "E" is replaced by "rr"
\#5 "i" or "I" is replaced by "rrRr"
\#6 "o" or "O" is replaced by "rrrRr"
\#7 "u" or "U" is replaced by "rrrrRr"
\#8 "r" or "R" is replaced by "RR"
\#9 "1" is replaced by "2"
\#10 "2" is replaced by "1"
 
*There should be 10 rules total. So make 2 rules up. Each rule should be a separate function. Edited out. Unnecessary*

Make use of 3 different jasmine "expect" methods per rule. http://jasmine.github.io/2.3/introduction.html (Links to an external site.) Zombies are known to be able to repeat the same statements over and over. We want to make sure the rules are not written by the undead and aren't just a list of expect(myFunc('i')).toBe('rrRr');

For example:
```
expect(30).toBe(30);
expect(undefinedVariable).toBeUndefined();
expect('30').toContain('0');
expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
```

### The Jasmine expects used throughout the tests are:
#### toBe
#### toEqual
#### toMatch
#### toThrow
#### not


What really matters is the structure. The last thing the resistance needs is for zombies to write false translators to trick us. We need to make sure a human, professional developer created the zombie translator. We all know zombies don't know how to write modular code, and they never test. 

Each of the rules needs to be modular enough to test separately. There should also be a test for the entire function. 

## Structure of the Program

The program functionality is built gradually on these modules:
#### Replacer
#### Rule
#### ZombieTranslator
#### TenRulesZombieTranslator

The Jasmine tests are also organized around the above modules. Each rule is tested individually with configuring ZombieTranslator with that rule, while the aggregate of the rules are tested against TenRulesZombieTranslator.

## Using the translator

In browser, open index.html, while English text is being typed into the "English" box, Zombie text will be dynamically translated in the "Zombie" box.

On the other hand, if text is typed in the "Zombie" box, then its English translation is dynamically displayed in the "English" box.

## Running the tests with Jasmine in browser

Open js/tests/SpecRunner.html in browser.

## Rnning the tests with Karma

Run ```./node_modules/karma/bin/karma start``` at the root of the project directory.

## Starting point

You can use this repository for a starting point. 

## Submission

Zip up the project when you're done and submit the zip file. 

## Have to use

You have to use RequireJS and Jasmine and Karma. 

Tests need to be run with Karma. Jasmine Tests. On RequireJS modules.

## Extra credit
*20pts*

If you correctly "unzombify" (with tests).
