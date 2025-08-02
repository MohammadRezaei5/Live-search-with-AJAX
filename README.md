# live search with ajax

Implementing live search using jQuery and Ajax
--------------------------------------------------------------
CORS Error Resolution
When developing locally, you might encounter a CORS (Cross-Origin Resource Sharing) error if you try to load local files (like data.json) directly from your browser using the file:/// protocol.
This is a security feature built into web browsers to prevent malicious scripts from accessing your local file system.

The Solution:
To fix this, I used a local web server (e.g., Python's http.server, Node.js http-server, or a VS Code extension like Live Server).
Serving the index.html and data.json files from an http:// address (like http://localhost:8000) resolves the CORS issue, allowing the AJAX request to load the data.json file successfully.
--------------------------------------------------------------
Some features:

* css --> transition/flexbox/
* jquery --> ajax/foreach-loop/addClass/if-else/append
--------------------------------------------------------------

Live-Demo ----> [Click Here](https://mohammadrezaei5.github.io/Live-search-with-AJAX/)

--------------------------------------------------------------

GIF:
![live-search-ajax](https://github.com/user-attachments/assets/b62bd479-a6d2-439e-ade8-37197cf4c2b8)
