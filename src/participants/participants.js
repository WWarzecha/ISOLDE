import './participants.css';
import '../components/components-loader.js';
import content from '../content.json';
import componentsLoader from '../components/components-loader.js';

let participantsSubpage = (() => {
    const container = document.createElement("div");

    const reachOutSection = document.createElement("h4");
    reachOutSection.innerHTML = `Don’t wait—join us today!<br>Reach out to your <a href="" target="_blank">regional coordinator</a> and be part of something big.`;
    container.appendChild(reachOutSection);

    componentsLoader(content.participants, container);
    return container;
})();


export default participantsSubpage;