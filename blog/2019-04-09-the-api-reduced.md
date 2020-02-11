---
title: "The API Reduced"
path: the-api-reduced
summary: "An API doesn't need to be as complex (in theory or practice) as it sounds - in fact it shouldn't take a ton of computer fu to operate it all."
date: 2019-04-09
author: Volley Team
tags: ['APIs','intros']
---

An API doesn't need to be as complex (in theory or practice) as it sounds - in fact it shouldn't take a ton of computer fu to operate it all. What's more, you already use them daily anyway, whether you realize it or not. It's not impossible to begin directing and willing them to do your bidding.

### AP Wha?

"Application Programming Interface" is in truth a quite broad term referring to methods for interacting with computers (or making other computers do it) in a variety of ways. We'll really be focusing on Web APIs, which you can think of like this:

When your browser requests a web address, the web server's response is typically going to be an html document, some images and scripts that this document references, and some stylesheets that dictate to the browser where to put everything, what color it should be, what font, and so forth. Lucky for you your browser knows what do with all that junk, because it's pretty complex, really.

A Web API kind of works the same way, except that the response from the server is typically a single \~raw document, has virtually no foresight or even concern with how it will be represented visually, and is therefore only provided by the server so that *you* (your code or your program or application) can do something else with it. Let's start with just about the simplest possible example:

There's an API at [placepuppy.com](http://place-puppy.com) that -- don't laugh, there are plenty of legit reasons for this -- delivers images of puppies at whatever size you request. So just e.g...

Point your code at this url: http://place-puppy.com/200x200
	...and you get a cute little 200x200:
![200x](http://place-puppy.com/200x200)

Same for http://place-puppy.com/400x400:
![400x](http://place-puppy.com/400x400)

Do that in your browser and you'll see the dogs: your browser is pre-programmed, as it were, to display images when given them.

### API Examples
Now, obviously drawing an image into a browser or piping it into a web page for render there isn't high-order stuff. The point is only that the size directive -- the "200x200" and "400x400" -- is a parameter that we're sending to an API and the API is responding with a raw document that fulfills that very specific request. In this case, ok, the raw document is a single image and most of the time all we're going to do with this is display it. But what if the thing we were doing was training an algorithm to recognize dog faces at different resolutions? Why, the 200x200, 400x400, 2048x2048 parameters become quite important indeed! And our source data that look like this:

```js
ID,SIZE
001,"200x200"
002,"400x400"
003,"2048x2048"
```
...might become something like this after the rows have been iterated over, sent to placepuppy's API, and the responded image examined (by our code):

```js
ID,SIZE,RECOGNIZED_CONFIDENCE
001,"200x200",8%
002,"400x400",88%
003,"2048x2048",92%
```
We can see here how the "SIZE" field in our data was appended to the placepuppy API root uri in order to A) pull back the thing we needed, B) do something *we* programmed with that result, and then finally, C) store the result, augmenting our original data.

This /\ is a basic version of a pattern that can repeat over and over again when working with APIs - you take one or more elements of your dataset and shop it against something of value with which an API can respond. Then you (your code, your application) parse that response, pick out the relevant data/datum in that response and, ultimately, augment and enrich your original with it. Another (admittedly rudimentary) example that should be easy to follow:

This...
```js
CUSTOMER_ID,CUSTOMER_NAME,CUSTOMER_ADDRESS
001,"Louis del Mar","44 Marigold Dr, Waltham, MA"
002,"Canadio Vespucci","9830 Peacemeal St, New Haven, CT"
003,"JoJo Cambria","1212 Watertown St, Cambridge, MA"
```
...plus a US Census API, becomes:

```js
CUSTOMER_ID,CUSTOMER_NAME,CUSTOMER_ADDRESS,MEDIAN_HOME_VALUE_USD,MEDIAN_HOUSEHOLD_INCOME_2018_USD
001,"Louis del Mar","44 Marigold Dr, Waltham, MA",381400,88232
002,"Canadio Vespucci","9830 Peacemeal St, New Haven, CT",262000,35200
003,"JoJo Cambria","1212 Watertown St, Cambridge, MA",414714,34800,101450
```

In this case /\ we shopped the customer address to a geocoder (of sorts) to look up the Census Block Group to which it belongs, then looked up some data-based attributes of that Block Group. Two APIs this time! And the point isn't whether Census data are a valuable enricher of your data, it's that there are almost endless possibilities out there for improving data in this way.

### Following Up
To explore even slightly more advanced examples in an easy, curated environment ([OpenRefine](https://openrefine.org/)) -- which is, how do we describe this, a \"flaming core of API and data tools presented like a plain ol' spreadsheet\"? -- there's a [great list of tutorials and resources](https://github.com/OpenRefine/OpenRefine/wiki/External-Resources) maintained by the OpenRefine project itself. Not all of them are APIcentric, but they are useful nonetheless for witnessing how one operation can improve data once, then how that opens up additional possibilties and so on. Stepping through even a handful of these should give you a much much better idea of how (and why!) one might take extant data and associate it with a second source via API. If you're just bootstrapping yourself, and especially wrt API consumption, [Calling REST Services and Parsing JSON](https://github.com/DruidSmith/OpenRefine-Recipes/blob/master/URLs_and_JSON.md) is a great start.
