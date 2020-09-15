# This is a react project. follow the guide to get started.

## Setup
1. Download the respo.
2. Install node.js [here](https://nodejs.org/en/) . 
3. open command prompt in the file (type cmd in the address bar of the folder)
4. type in as follow:
  ```
  npm install react-dom --save
  npm install react --save
  npm install react-icons --save
  ```
5. You should be able to use the application

## Using the application.

1. Go to [here](https://react-icons.github.io/react-icons/) and search the icon that you want. Copy it's name.
2. Type code as follow at the start of the code in `src/data.js`:

```javascript
import { "the name of icon" } from 'react-icons/(the start two words of the icon eg: si, fa or ai)'
```
3. type this inside `const datas = [...]`

```javascript
    {
        name: "Users-list", //name of the label
        icon: <FaUserFriends />, // icon name 
        color: "#a5682f" // icon color
    }
```

## Footer
Any question, feel free to contact me at [here](mailto:j_kaixuan@live.com)
