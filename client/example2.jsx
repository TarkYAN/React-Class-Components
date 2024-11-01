//npm install --save-dev react react-dom

const React = require('react');
const {useState} = React;
const {createRoot} = require('react-dom/client');

const HelloUser = (props) => {
    const [username, setUserName] = useState(props.username);

    return (
        <div>
            <p>Hello {username}</p>
            <label>Change Name:</label>
            <input type="text" value={username} 
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<HelloUser username="Andrew" />);
};
window.onload = init;

