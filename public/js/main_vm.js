// imports always go first - if we're importing anything
import ChatMessage from "./modules/ChatMessage.js";
import LoginComponent from "./modules/LoginComponent.js";

const socket = io();

(() => {
    let router = new VueRouter({
        //set routes
        routes: [
            { path: '/', redirect: { name: "login"} },
            { path: '/login', name: "login", component: LoginComponent },
            { path: '/chat', name: "chat", component: ChatMessage },

        ]
    });


// this is data deconstucting. go look it up on MDN
function setUserId({sID}) {
    //debugger;
    console.log(sID);
    vm.socketID = sID;
}

function showDisconnectMessage(){
    console.log('a user disconnected');
}

function appendMessage(message) {
    vm.messages.push(message);
}

const vm = new Vue({
    data: {
        socketID: "",
        message: "",
        nickname: "",
        messages: []
    },

    methods: {
        //emit a message event to the server so that it can turn send this to anyone whos connected
        dispatchMessage() {
            console.log('handle emit message');

            //the double pip || is an "or" oporator
            // if the value is set use it, else use
            // whatever comes after the "or" operator
            socket.emit('chat_message', {
                content: this.message,
                name: this.nickname || "anonymous"
            })

            this.message = ""
        }
    },

    components: {
        newmessage: ChatMessage
    }
}).$mount("#app");

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage)
socket.addEventListener('new_message', appendMessage)

})