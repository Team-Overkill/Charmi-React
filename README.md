Charmi Dating App Built for Mobile Web - iPhone6 Plus  (www.put site here.com)

Table of Contents


About the Project

The Charmi Dating app is a mobile friendly app designed for iPhone 6 Plus in mind.  Users can browse profile photos and profile info pages to then like or dislike them.  If they are liked back by another user their profile is moved to the matches screen.  Once a match both users can open a chat and chat in real time. </br> 

### Section 1:  Tech Used</br></br>
The JSON file shows the following tech installed and required.  </br>
"axios"</br>
"express-session"</br>
"jquery"</br>
"massive"</br>
"passport-auth0"</br>
"react"</br>
"redux"</br>
"redux-promise-middleware"</br>
"socket.io"</br>


### Section 2:  Team and Responsibilities</br></br>
-Paul Murff - Front end skeleton overall app build with routing and all pages laid out, browse page, profile info section, jQuery</br> 
-Bobby Steed - Overall app design (original artwork and design) with input from team for styling throughout, Redux setup, Auth0 login and built login page with cool video background </br> 
-Jodi Parker - Backend SQL tables creation, server/endpoints/api creation, input for styles, profiles data populated </br>
-Kellen Pugmire - Styling some of pages, chat with sockets.io </br></br>


### Section 3: App Screen Shots and Functionality Description</br></br>
a.Login Screen: ![pasted image at 2017_07_29 02_30 pm](https://user-images.githubusercontent.com/25558342/28748414-9bb5feba-7474-11e7-982b-fce6a5f34619.png) http://imgur.com/vgPFUFP (original design with video in background)</br></br>
b.Auth0 Selection: ![pasted image at 2017_07_29 02_31 pm](https://user-images.githubusercontent.com/25558342/28748417-a7bbe49a-7474-11e7-9029-f5ac846b3f67.png) http://imgur.com/aXUL6Nh  (User profiles are created on login through any of these options)</br></br>
c.Browse Screen: ![pasted image at 2017_07_29 02_32 pm](https://user-images.githubusercontent.com/25558342/28748404-5bbafcfc-7474-11e7-9294-3699481117ca.png) http://imgur.com/7PBxthh  (All profiles available are loaded with map to browse one at a time)</br></br>
d.Profile Info Screen: ![pasted image at 2017_07_29 02_33 pm](https://user-images.githubusercontent.com/25558342/28748428-00e7b4ea-7475-11e7-8412-3971b58b5608.png) http://imgur.com/THMDl4m (User ability to see more info by viewing a profile info page by hitting the small up arrow in between the like(heart) and dislike(X) which is loaded with jQuery and dynamic info with React component map iteration) </br></br>
e.User feedback for 'liked': ![pasted image at 2017_07_29 02_32 pm 1](https://user-images.githubusercontent.com/25558342/28748424-e8ff48ca-7474-11e7-98c0-4bf3061fb9f8.png) http://imgur.com/w4uhA3c (heart seen after selecting the heart button which also takes you directly to another profile after 900 miliseconds)</br></br>
f.Edit Search and User Profile: ![pasted image at 2017_07_29 02_33 pm 1](https://user-images.githubusercontent.com/25558342/28748423-e2c2d436-7474-11e7-99d2-414ddb1a32f8.png)http://imgur.com/fSrzJ7o (not fully functional yet for editing and so forth but wired to do so) </br></br>
g.Matches Screen: ![pasted image at 2017_07_29 02_33 pm 2](https://user-images.githubusercontent.com/25558342/28748434-2bcb5f7c-7475-11e7-9026-5b9daa3be4ef.png) http://imgur.com/x3umhA1 (Lists the people who also liked that specific user)</br></br>
h. Chat/Messages Screen: ![pasted image at 2017_07_29 02_34 pm](https://user-images.githubusercontent.com/25558342/28748435-2f695fc6-7475-11e7-88cc-56a440115802.png) http://imgur.com/LwmxDDm (Functional real-time chat with two matched users using sockets.io) </br>
