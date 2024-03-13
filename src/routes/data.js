const testimonals = {
  text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”',
  image: '/images/person-placeholder.jpg',
  name: 'Jane Doe · jane-doe.org'
};

const faqs = `
  <h2>Domanda 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi lectus, pellentesque nec urna eget, pretium dictum arcu. In rutrum pretium leo, id efficitur nisl ullamcorper sit amet.</p>
  <h2>Domanda 2</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi lectus, pellentesque nec urna eget, pretium dictum arcu. In rutrum pretium leo, id efficitur nisl ullamcorper sit amet.</p>
`;

const placeholder = `
		<p>Modern tools, such as Svelte and Tailwind allow you to easily hand-craft fast and beautiful websites. What’s missing is the ability to <strong>make edits without changing the source code</strong>.</p>
		<p>With this <a href="https://github.com/michael/editable-website">open-source website template</a>, I want to fill that gap.</p>
    <p>If you have questions or need any help, contact me.</p>
	`;

const title = 'Francesco Bernini';

export let dati = { testimonals, faqs, placeholder, title };
