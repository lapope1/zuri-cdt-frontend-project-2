# Card Payment Page

Welcome to the Card Payment Page implementation task, a **Zuri Team Continous Development Training Task.**  In this task, I will be creating a card payment page using pure vanilla HTML, CSS, and JavaScript. The goal of this task is to demonstrate my ability to write clean, efficient, and functional front-end code without relying on external libraries, except for the one you will create myself.

## Instructions

### Interface
![Alt text](<ZURI PROJECT SCREENSHOT.png>)
- The card payment page should resemble the attached image.
- While I can change the colors for aesthetic purposes, I'm to make sure to maintain the overall structure and design elements as depicted in the screenshot.

### Fields and Card

- The page will include the following fields:
  - Four individual fields for the card number
  - One field for Card Holder
  - Two fields for the expiration date (month and year)
  - One field for CVV
- The card will be displayed above the fields, consistent with the provided image.
- Both the fields and the card will have a distinct background color, separate from the card and the boxes.
- A submit button will be included.

### Input Validation

- Implement input validation for the following fields:
  - Card Number: Must be numeric and exactly 16 digits.
  - Card Holder: At least a first name and a last name.
  - Expiration Date: Month and year must be selected from dropdowns. The selected date must be in the future.
  - CVV: Must be numeric, between three and four digits.
  
### Functionalities

1. **Card Number Entry:**
   - As the user enters the card number, after the first four digits, the fifth digit should automatically appear in the next box. Users should be able to continue entering numbers without using the tab button or clicking to focus on the next box.
   - Based on the entered card number, dynamically change the card logo to Visa, MasterCard, or American Express.

2. **Card Holder's Name:**
   - Display the cardholder's name above the input fields for the cardholder.
   - If the user deletes any aspect of their input, update the displayed cardholder's name accordingly.

3. **Card Expiration Date:**
   - Show the card's expiration date on the card above the expiration date input fields.

4. **Submission and Validation:**
   - When the user clicks the submit button, validate all input fields according to the provided instructions.
   - If all items are valid, display an alert: "Your payment was successful."

## Getting Started

To begin this task, the necessary HTML, CSS, and JavaScript files will be created. 

### Project Structure

```
- index.html
- styles.css
- script.js
```
## Disclaimer

**This project is solely for educational purposes and aims to showcase frontend web development skills.**

## Author
- Ayomiposi Popoola [https://github.com/lapope1] [ayomiposi4joy@gmail.com]

