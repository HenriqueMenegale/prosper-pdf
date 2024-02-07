# Prosper PDF test

This is a test app develeped for Prosper. It uses the provided API to create a chat allowing the user to ask questions about a PDF.

## Running the project

Install dependencies

    npm install

Start the app

    npm start

## Improvement list

 - Automated tests 
 - Better error handling 
 - Improved interface
 - Improve PDF viewer

	
## Using preferences

Inside the file usePreferences it is possible to change the behavior of the app.

### sendChatHistory
Defines if the app should send the whole chat history or just the last message sent by the user.

### charLimit
What is the maximum amout of characters the user can send in the question field.