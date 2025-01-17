# Key Takeaways

A lot was covered this module and it probably feels a bit overwhelming at the moment. Bearing that in mind, let's take a look at the MOST important things to focus on for now. While these aren't the only things you need to retain, if you get these concepts down, then you'll have a much easier time grasping the rest of the topics in React as well as the other topics from this week. We'll go through and give an explanation of these together, but the key topics are:

1. What is React?
    - A framework for normalizing JS for getting past some of the problems
    - Speeds things up
    - Library/framework (technically a library... I guess)
    - Heavy emphasis on componentization

2. Creating a React Application and Folder Structure:
    - You need to run command
    - import things
    - There's a lot of solutions out there, use one of the pre-built ones like create-react-app or vite

3. What is the Virtual DOM?
    - It's a copy of the real DOM
    - It's a copy so React can re-render components quickly without refreshing the entire application

4. What is wrong with this return statement?
    ```javascript
        return (
            <>
                <div>
                    Hello!
                </div>
                <div>
                    Goodbye!
                </div>
            </>
        )
    ```
    - Absolutely nothing

5. What does `<></>` mean in JSX? 
    - Fragment
    - It helps get around the "only one child" restriction for components
    - Doesn't show in the real DOM

6. What are Components?
    - Building blocks that work together to build an app
    - have a return statement that can return JSX
        - What is JSX?
            - The fake html/JS that we insert instead.
    - Have state
    - Can be functional or class type components
    - They run when React tells them to
    - They should be pure in the sense that it doesn't matter how many times you call the function, so long as you're giving it the same props and context, it will return the exact same thiing


7. What are the two main ways to declare components and what are the differences?
    - Function and class, we don't use class

8. What Triggers a Component to Re-Render in React?
    - Changing it's state
    - Rerendering the parent*

9. Handling Events and User Interaction:
    - That's how you do things like hover and onClick. It's how a user interact with the page
    - Those event handlers are props

10. What are Props?
    - properties!
    - properties of components

11. What Is State?
    - A snapshot of what is happening in the component at the time
    - The "Save file" of it all

12. Handling State in class or functional components?
    - Handle with care, and not in class components

13. Atomic Design principles:
    - Make things small

14. Styled components:
    - emotion-specific syntax to accomplish this idea
    - MUI does some default styling for you, and has a whole style system if you really want it.