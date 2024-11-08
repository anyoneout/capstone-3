import { useState } from "react"

export default function MailPage() {
/* create a state variable and setter using the useState Hook. */
  const [user, setUser] = useState("chris");
  const [message, setMessage] = useState("hi!!!!");

  async function sendMail() {
    const result = await fetch(`/api/mail?user=${user}&message=You got mail from ${user}`)
  } 

  function handleClick() {
    sendMail();
  }
  function userChangeHandler (event) {
    const name = event.target.value;
    setUser(name);
  }
  function messageChangeHandler (event) {
    const message = event.target.value
    setMessage(message);
  }
  return (
    <div className="container m-3">
      <h1>Contact Me</h1>
      <form>
       {/* step 1 create an input */}
        
        <input className="px-4 py-3 bg-gray-100 text-sky-400 w-2/3 text-sm outline-none border-b-2 border-blue-500 rounded" type="text" value={user} onChange={userChangeHandler}/>
        <textarea className="border-blue-500 m-2 text-sky-400" value={message} onChange={messageChangeHandler}></textarea>
        <button type="button" onClick={handleClick}> Send Mail </button>
      </form>
    </div>
  );
}