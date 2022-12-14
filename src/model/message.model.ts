
const messages: Array<string> = ["apples", "grapes", "oranges"];



export const messageModel = {
    getMessages:()=>{
        return messages;
    },

    saveMessage:(message:string)=>{
        console.log(message)
        messages.push(message)
        const id = messages.findIndex(element => element===message);
        return id;
    }
}