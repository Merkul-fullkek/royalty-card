# Loyalty app for coffee places

The app should contain four screens: Login, Registration, and My Places and Details about the place.

Login screen should contain two fields for email and password.
Registration screen should contain four fields: email, full name, password and password confirmation.
My Places (or Home screen if you prefer such name) should contain search field for searching for coffee places, simple search by name should be enough. Once you get the search results you can click on the place and get to the Details page. Under the search field in case there are places you added to "Your places" all "Your Places" should be visible.
Details page should contain details about the place: where it's located and have a button to add to "Your Places". Once added to "Your places" button should disappear and instead the loyalty card should be visible. Loyalty card is a simple unique random EAN-13 barcode, which is generated on the back-end whenever user clicks the "Add to my places" button.

## Entities

Place

Owner

Client

Card

## Technologies

- NodeJS back-end
- PostgreSQL DB
- Any framework for front-end (React is recommended)
