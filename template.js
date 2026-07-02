function loadTemplate(title, content) {
    document.title = title;
    document.body.innerHTML = `
        <header>
            <h1>AYAN-YUE GUPTA</h1>
	</header>

	<!-- navigation-->
	<div class="links">
	    <a href="/index.html">Home</a>
	    <a href="/research.html">Research</a>
	    <a href="/teaching.html">Teaching</a>
	    <a href="/contact.html">Contact</a>
	    <a href="/assets/CV.pdf">C.V.</a>
	    <a href="/art.html">Art</a>
	</div>
        
	<main>
	    ${content}
        </main>

        <!-- links -->
	<div class="links">
	    <a href="https://github.com/ayanyuegupta">github</a>
	    <a href="https://www.instagram.com/ayanyuegupta/">instagram</a>
	    <a href="https://www.youtube.com/channel/UClNL5hp3ENN-B0owGvb4dpw">youtube</a>
	</div>

    `;
}
	
