In this demo, validations are executed on the registration and login forms:

-User validations (blank fields, null characters, password matching) in blur and focus events  through addEventsListener method. 
-DOM validations (Necessary amount of inputs, existence of form, among others)

when all validations passed, the application makes a Fetch to:https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com  


