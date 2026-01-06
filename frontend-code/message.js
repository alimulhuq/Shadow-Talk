// Dropdown toggle
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdown = document.querySelector('.dropdown');
dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Chat selection
const chatItems = document.querySelectorAll('.chat-item');
const chatInbox = document.getElementById('chatInbox');
const chatData = {
    1: {
        name: 'Alice Johnson',
        avatar: 'A',
        messages: [
            { text: 'Hey! How are you?', sent: false, time: '2:30 PM' },
            { text: 'I\'m great! Working on the new design.', sent: true, time: '2:32 PM' },
            { text: 'Looks awesome! Can\'t wait to see it.', sent: false, time: '2:34 PM' }
        ]
    },
    2: {
        name: 'Bob Smith',
        avatar: 'B',
        messages: [
            { text: 'Yo! Long time no talk', sent: false, time: 'Yesterday' },
            { text: 'Yeah man, been busy. Let\'s catch up soon!', sent: true, time: 'Yesterday' }
        ]
    },
    3: {
        name: 'Cyber Team',
        avatar: 'C',
        messages: [
            { text: 'Team, meeting scheduled at 5 PM today.', sent: false, time: 'Monday' },
            { text: 'Got it, I\'ll be there.', sent: true, time: 'Monday' }
        ]
    }
};

chatItems.forEach(item => {
    item.addEventListener('click', () => {
        chatItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const chatId = item.dataset.chat;
        const data = chatData[chatId];
        let inboxHTML = `
            <div class="inbox-header">
                <div class="inbox-avatar">${data.avatar}</div>
                <div class="inbox-name">${data.name}</div>
            </div>
            <div class="messages-area">
        `;
        data.messages.forEach(msg => {
            inboxHTML += `
                <div class="message ${msg.sent ? 'sent' : 'received'}">
                    ${msg.text}
                    <div class="message-time">${msg.time}</div>
                </div>
            `;
        });
        inboxHTML += `
            </div>
            <div class="input-area">
                <input type="text" class="message-input" placeholder="Type your message...">
                <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        chatInbox.innerHTML = inboxHTML;
    });
});