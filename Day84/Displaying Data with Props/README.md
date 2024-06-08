From React to Next.js

So far, we explored how you can get started with React. This is what the final code looked like. If you're starting from here, paste this code into an index.html file in your code editor.
index.html

<html>
  <body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/jsx">
      const app = document.getElementById("app")
 
      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }
 
      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
 
        const [likes, setLikes] = React.useState(0)
 
        function handleClick() {
          setLikes(likes + 1)
        }
 
        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
 
            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }
 
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html>

In the last few chapters, you were introduced to three essential React concepts: components, props, and state. Having a strong foundation in these will help you get started building React applications.

When it comes to learning React, the best way to learn is to build. You can gradually adopt React by using <script> and what you've learned so far to add small components to an existing website. However, many developers have found the user and developer experience React enables valuable enough to dive right in and write their whole frontend application in React