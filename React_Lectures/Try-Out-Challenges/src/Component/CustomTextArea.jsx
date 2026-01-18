
export default function CustomTextArea({context, actionSync}) {
    return <textarea name="cusTextArea" id="cusTextArea" style={{minHeight: "100px", maxWidth: "400px" , maxHeight: "200px" , resize: "vertical"}} value={context} onChange={actionSync}></textarea>
}