## Advanced JavaScript Dashboard Assignment

## Navigator

return a function that gives a programming link

## Adding The AuthStateChange Observer

Inside the DashBoardPage function start by creating a piece of state called isUser.. The default state for a firebase user is false. Nobody should be allowed to access the page unless they are logged in. Next use the useNavigate method from the react router dom package. We will use this to return unauthorized users back to the login screen.
Create the onAuthStateChange() to check to see if there is a current logged in user. If there is then we can change the state to true.


  function DashBoardPage  (props){
    const [isUser, setIsUser]= useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
   
        if (user) {
            setIsUser(true)
     
        } else {
            // error shouldn't get access return to the login page
            setIsUser(false)
            navigator('/')
        }
      });
<br/>
