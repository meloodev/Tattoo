import './messageBox.css';

const MessageBox = () => {
    const arrow = 'top';

    return (
        <div className={`message__box ${arrow}`}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tempore in porro nesciunt repellendus rerum dolore mollitia eaque inventore laudantium ut neque, ab illo officiis omnis, repellat culpa accusamus minima.</p>
        </div>
    )
}

export default MessageBox;