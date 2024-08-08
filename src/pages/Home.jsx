import Markdown from "markdown-to-jsx"
 import AboutMDPath from '../markdown/About.md'

export default function Home(){
    return(
        <>
         
         <h2>About Me</h2>

         <div className="about-paragraph-container">
         <p>My journey into the tech field began when I enrolled in the University of Minnesota&apos;s full-stack web development bootcamp. Through this bootcamp, I mastered the ability to break large tasks down into small manageable pieces.</p>

        <p>Before entering the technology field, I worked as an English tutor and an adjuct English professor at SUNY Orange. There, I learned how to explain complicated concepts to non-technical audiences.</p>

         <p>I received my Master&apos;s in English from SUNY New Paltz. I also hold a Bachelor&apos;s in Creative Writing from the same institution.</p>
         
         <Markdown>
            ## Hello
            {AboutMDPath}
         </Markdown>
         </div>

        
        </>
       
    )
}

