export const CreateMessageP = (message) => {
    const MessageP = document.createElement("p");
    MessageP.textContent = message;
    return MessageP;
}
