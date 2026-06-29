 const chatBody = document.getElementById('chat-body');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');

  // Função para enviar msg do user - só visual
  function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    addUserMessage(text);
    chatInput.value = '';
    chatInput.focus();
  }

  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });
  sendBtn.onclick = sendMessage;

  function addUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('msg', 'user');
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  