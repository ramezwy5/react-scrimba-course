#setup the environment.


- in cmd type npm create vite@latest  
- set project name (. set the folder name as roject name)  
- set framework (react)  
- choose javaScript(.jsx) or typeScript(.tsx)  
for fast process choose + swc
- after done need to:  
-- cd to project folder    
-- npm install    
-- npm run dev    

delete public, assets folders and .css files
create your style file in src folder
in main.jsx file delete import .css line
in app.jsx replace everything with:
(import "./index.css";

export default function App(){
  return (TYPE YOUR APP CODE HERE)
})

