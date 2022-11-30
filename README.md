# UX
## Contents

---

- [UX](#ux)
  - [User Requirements and Expectations](#user-requirements)
  - [Design Choices](#design-choices)
    - Fonts
    - Icons
    - Colours 
- [Wireframes](#wireframes)
- [Technologies](#technologies)
- [Testing](#testing)
- [Known errors](#errors)
- [Clone project](#clone)

## <a name="ux">UX</a>

## <a name="user-requirements">User Requirements and Expectations</a>

---

1. The user should be able to add a number in a text field and also should be able to add and remove extra text fields.
2. When the user should have a button to calculate the numbers from the text fields.
3. When the user clicks the button to calculate the numbers a table should appear with the list of numbers, minimum, maximum and average number displayed.
4. The user should be able to add another set of numbers after they calculate the first set.
5. The text fields should be cleared each time numbers are calculated.
6. The user should be able to view all previous calculations on a table.

## <a name="design-choices">Design Choices</a>

---

### Fonts
- I decided to use Open Sans as the font as it is used throughout Unum's website as the main font.

### Colours
- I decided to use the same blue (#015294) that Unum use on their website for the background of the navbar and white (#fff) for the font.
- I used the same blue as the navbar for the calculate button.
- The plus and minus buttons are black, to contrast the white background.
- The text inside the table is black.
- The main background of the website is white which is the same as Unum's website. 

### Icons
- I used font awesome for the icons used on this site.

## <a name="wireframes">Wireframes</a>

---

The wireframe for this website can be found at the following link:
- [Wireframes](https://github.com/farrelleoin93/unum-challenge/blob/master/src/assets/images/unum-challenge-wireframes.pdf)

### Changes to wireframes
- After viewing and testing the website on different devices I decided to change the layout on tablet devices to be the same as mobile devices. I felt that this was more visually appealing.

## <a name="technologies">Technologies</a>

---

### Languages and frameworks

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS3)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)

### Other

1. [Font Awesome](https://fontawesome.com/)
   - The icons used were found at Font Awesome.
2. [Google Fonts](https://fonts.google.com/)
   - The fonts used for this website were found at Google Fonts.
3. [Balsamiq](https://balsamiq.com/)
   - The wireframes were made using Balsamiq.
4. [Github](https://github.com/)
   - This project was stored on Github.
5. [VSCode](https://code.visualstudio.com/)
    - VSCode was used to write the code used for this website.
6. [Git](https://en.wikipedia.org/wiki/Git)
    - The version control system used for this project was Git.
7. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
    - Chrome DevTools was used throughout the building of this website.
8. [Python Tester](https://extendsclass.com/python-tester.html)
    - Used to test python code.
9. [Ucraft](https://www.ucraft.com/?tap_cid=2625be00-6f83-11ed-a814-e9f0884ff5f3)
    - Used to create the favicon

## <a name="testing">Testing</a>

## <a name="manual-testing">Manual Testing</a>

The following tests have been carried out without issue:

**Form**
- Confirm that if a user enters invalid details to the form that the form will not post to the API and the user will get an alert message.
    - CHECK

- Confirm if the plus button is clicked a new input field is added.
    - CHECK

- Confirm if the minus button is clicked a input field is removed.
    - CHECK

- Confirm if the calculate button is clicked with valid numbers the form will be posted to a backend API.
    - CHECK


**Table**
- Confirm that the table only appears when valid data is returned from the API.
    - CHECK

- Confirm that the table displays all data from past calculations.
    - CHECK

- Confirm that unvalid data is not displayed in the table.
    - CHECK


**Responsiveness**
- Confirm that all pages are visually appealling on phone, tablet and dektop screensizes.
    - CHECK

- Confirm that the form and table work on mobile, tablet and desktop devices.
    - CHECK

### Browsers

Tested on:

- Chrome
    - no issues
- Edge
    - no issues
- Firefox
    - no issues

### Screen sizes

Tested with Chrome DevTools using profiles for the following devices, accounting for minimum screen widths of 320px:

- Galaxy S5
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro

... and also using the responsive profiles of:

- Mobile S (320px)
- Mobile M (375px)
- Mobile L (425px)
- Tablet (768px)
- Laptop (1024px)
- Laptop L (1440px)

## <a name="errors">Known errors</a>

- Unchecked runtime.lastError: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
- Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

    - After some research I discovered that these errors are most likely as a result of certain extensions installed on Chrome and do not have any effect on the app.

---

## <a name="clone">Clone project</a>
### How to clone the project

To clone this project from its [GitHub repository](https://github.com/farrelleoin93/unum-challenge):
1. From the repository, click **Code**
2. In the **Clone >> HTTPS** section, copy the clone URL for the repository
3. In your local IDE open Git Bash
4. Change the current working directory to the location where you want the cloned directory to be made
5. Type `git clone`, and then paste the URL you copied in Step 2
```console
git clone https://github.com/farrelleoin93/unum-challenge.git
```
6. Press Enter. Your local clone will be created

7. Then run the following

```console
git clone <paste url>.
```

```console
npm install
```

```console
npm start
```
#### On windows
8. Open another terminal and navigate to backend folder by running 

```console
cd backend
```
9. Activate virtual environment by running 

```console
venv\Scripts\activate
```


#### Or if on mac/linux

```console
. venv/bin/activate
```

10. Install flask and flask cors by running the following commands:
```console
pip install flask
pip install flask-cors
```

11. Run the app
#### On windows
```console
python app.py
```

#### On Mac/Linux
```console
python3 app.py
```

The app should be running
