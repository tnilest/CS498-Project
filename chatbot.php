// <?php
// $page = 'participants-index';
// include_once __DIR__ . '/../_header.php';
// ?>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chatbot</title>
</head>
<body>
    <div id="container" class="container">
  <img src="https://cdn.pixabay.com/photo/2020/01/02/16/38/chatbot-4736275_960_720.png" height="400vh" alt="Chatbot clipart">
   <div id="chat" class="chat">
    <div id="messages" class="messages"></div>
    <input id="input" type="text" placeholder="Write something..." autocomplete="off" autofocus="true" />
  </div>
</div>
</body>

    <script type="text/javascript">
        const inputField = document.getElementById("input");
        inputField.addEventListener("keydown", (e) => {
          if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
          }
        });

        function output(input) {
          let product;
          let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
          text = text
            .replace(/ a /g, " ")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/r u/g, "are you");

          if (compare(utterances, answers, text)) {
            // Search for exact match in triggers
            product = compare(utterances, answers, text);
          }
          else {
            product = alternatives[Math.floor(Math.random() * alternatives.length)];
          }

          addChatEntry(input, product);
        }

        function compare(utterancesArray, answersArray, string) {
          let reply;
          let replyFound = false;
          for (let x = 0; x < utterancesArray.length; x++) {
            for (let y = 0; y < utterancesArray[x].length; y++) {
              if (utterancesArray[x][y] === string) {
                let replies = answersArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
              }
            }
            if (replyFound) {
              break;
            }
          }
          return reply;
        }

        function addChatEntry(input, product) {
          const messagesContainer = document.getElementById("messages");
          let userDiv = document.createElement("div");
          userDiv.id = "user";
          userDiv.className = "user response";
          userDiv.innerHTML = `<span>${input}</span>`;
          messagesContainer.appendChild(userDiv);

          let botDiv = document.createElement("div");
          let botText = document.createElement("span");
          botDiv.id = "bot";
          botDiv.className = "bot response";
          botText.innerText = "Typing...";
          botDiv.appendChild(botText);
          messagesContainer.appendChild(botDiv);

          messagesContainer.scrollTop =
            messagesContainer.scrollHeight - messagesContainer.clientHeight;

          setTimeout(() => {
            botText.innerText = `${product}`;
          }, 2000);
        }
    </script>
<?php
include_once __DIR__ . '/../_footer.php';