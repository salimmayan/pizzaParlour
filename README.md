  

  

# Pizza Parlor
#### A web application for a Pizza company where a user can choose one or more individual toppings (upto seven : Mushrooms, Kosher, Meat, Onions, Sausage, Bacon, Green Peppers, and Black Peppers) and a size (upto 4: Small, Medium, Large, and Extra Large) to order a pizza and see the final cost.

-   Allows user to choose toppings and size for the pizza they'd like to order.
-   Created a pizza object constructor with properties for toppings and size.
-   Created a prototype method for the cost of a pizza depending on the selections chosen. 
  
##### Date: **2/26/2020**

#### By **Salim Mayan**
  
## Description    
#### Further Exploration
##### Added additional features:

-  Styled site with CSS/image/animation.
-  In summary relist toppings that user chose
-  Provides an `Order Number` which is based of `Epoch Time`
-  Offers a delivery option that requires `Address` information.
-  Provides an `Estimated Delivery Time` (for customer who choose `Delivery` option) which is roughly `Epoch Time` + 30 mins
-   Included a `Refresh` should the user wish to refresh page

_**Example:**_ If a user enters name in Mandatory `Name` field, choose `Choose Your Pizza Size'`as `Small ($8)`from drop down, click on `Kosher Meat` and `Mushrooms` under `Choose Your Toppings ($1 each)`, and `Submit`, the program shall display below content

`# Order #  1582525067832.

## Thank you  Jason Mulig. Your Order details are ...

-   Pizza Cost:  $10

-   Toppings are ...

1.  Mushrooms
2.  Kosher Meat'

_**Example:**_ If a user adds Delivery Address by first clicking on optional checkbox `Enter Delivery Address`, enter name in Mandatory `Name` field, choose `Choose Your Pizza Size'`as `Medium($10)`from drop down, click on `Kosher Meat` and `Onions` under `Choose Your Toppings ($1 each)`, and `Submit`, the program shall display below content

`# Order #  1582525232802.

## Thank you  Frederick Rekjal. Your Order details are ...

-   Pizza Cost:  $12

-   Toppings are ...

1.  Kosher Meat
2.  Onions

-   Delivery Address:  7144 Childs Road, Lake Oswego, OR, 97035
-   Approximate Delivery Time:  22:50:32 PST Sun Feb 23 2020`

### Specs

| Spec | Input | Output |

| :------------- | :------------- | :------------- |

  
| **Homepage** | User accesses localhost:5500 | Homepage with user input form |

| ** Program will not accept empty Input in `Name` form**| User Input: "",  choose `Choose Your Pizza Size'`as `Medium($10)`from drop down, and Checkbox unclicked| Output: `Please fill out this field` |

## Setup/Installation Requirements
1. Clone this repository.
2. To run program, open index.html from browser

## Known Bugs

* No known bugs at this time.

## Technologies Used
* HTML
* CSS
* JQuery
* JS
* Bootstrap

## Support and contact details
_Email no one with any questions, comments, or concerns._

### License
*{This software is licensed under the MIT license}*
Copyright (c) 2020 **_{Salim Mayan}_**