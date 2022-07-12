# Laguinda code challenge
## Introduction
Wellcome to Laguinda's code challenge

This repo is a starting point for the code challenge. If you prefer to star with a brand new ionic project, it is fine with us, you just need to make sure to use ionic 6, Angular and Capacitor.

## The Challenge
You should create an app that exploits information from the MET museum. You should make use of their [public API](https://metmuseum.github.io/). There you will get a list of objects and display information about those objects.

You should use the following endpoints:

* [Search](https://metmuseum.github.io/#search)
* [Departments](https://metmuseum.github.io/#departments)
* [Objects](https://metmuseum.github.io/#objects)


Images should be lazy loaded and you should take into account that some objects may not have an image.

## Where should I start

The first step will be to clone this repo in you desired folder:
```
git@github.com:[YOUR_USER]/lg-code-challenge.git
```

If you prefer to develop it locally and send us the code, that is fine too.

Once installed, just run:
```
npm i
```

```
ionic serve
```

The starter project is just a blank page. You are free to rename, delete or reuse this page. You can also start a new ionic project if you wish, as long as it uses Ionic 6 and Angular.

## Exercise

The main idea is to display a list of MET objects within the main page and display the detail of each one. The MET API returns a list of IDs, but does not return information in the array. You will have to figure out a way to exploit that information.

### Home page

The main page should have the following options:
* Header
* Filters
* Main section

The header will contain mainly the title and anything else you may think relevant, like a button to display filters or to search.

The main section will be the container were summary information about MET objects is displayed. This section should display at least 10 objects. Pagination is not required, but can be implemented if you want. You should display the image (if available) and the name of the object within this list.

Filters should be the set of options for the objects we will retrieve. We want a page were we are able to filter by:
* Text (any search query term)
* Department (selecting the department)
* If the object has image


An layout example could be:
```
----------------------------------------
|                HEADER                |
----------------------------------------
|                FILTER                |
----------------------------------------
|                                      |
|        LIST OF POPULAR MOVIES        |
|                                      |
|                                      |
----------------------------------------
|                 FOOTER               |
----------------------------------------
```

### Detail page

When the user clicks in one of the elements in the list, he should go to the detail of that object, were more information should be displayed:

* A larger image
* The object name
* The department
* The artist name

And anything else you find necessary.

## Pieces of advice

You can decide what to use for this simple exercise. Remember, we just want to get to know how you code:

* You can use anything you may like for state management, Ngrx, services, ...
* We like clean coding practices
* Think about the UX a little bit

Let us know if you have any question or feedback.

Hope to see your code soon!

