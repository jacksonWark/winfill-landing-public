Winfill.ca is a website landing page built for Winfill Developments, an Edmonton-based 
constuction and design company that specializes in infill housing design and construction. 
They also do all kinds of industrial design and construction project management. Winfill 
Developments was founded by brothers Brendan & Kurt Wiun. 

Brendan & Kurt wanted a custom landing site as they were getting several of their projects 
off the ground and wanted a place for prospective clients to find them, evidence of their work, 
and information about their services.

I set up a simple image gallery, contact information, as well as a company profile delivery 
system. This system consists of a button advertising the company profile, which when pressed 
shows a contact form for clients to fill out. This contact form promises that the profile will 
be sent by email upon reciept of their information. The completed form is then sent via an 
HTTPS POST request to a Google Cloud Function, which writes the data to a Google Sheets document. 
This generates a client list for Winfill, that also uses Google Apps Script to automate sending 
a welcome email with the company profile, then a follow up email 7 days later. 

I used a responsive HTML template by HTML5 UP to get this project started, then customized it. 
The readme for the template is included below.

-------------------

Phantom by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Phantom, a simple design built around a grid of large, colorful, semi-interactive
image tiles (of which you can have as many or as few as you like). Makes use of some
SVG and animation techniques I've been experimenting with on that other project of mine
you may have heard about (https://carrd.co), and includes a handy generic page for whatever.

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)