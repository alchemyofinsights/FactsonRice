const riceFacts = [
    "Rice is a staple food for more than half of the world's population, particularly in Asia.",
    "There are over 40,000 varieties of rice grown worldwide, with the most common being white, brown, jasmine, and basmati.",
    "Brown rice is considered healthier than white rice because it retains the bran and germ, providing more fiber and nutrients.",
    "Rice is a water-intensive crop, requiring about 2,500 liters of water to produce just 1 kilogram of rice.",
    "Rice is typically grown in flooded fields, known as paddies, which help control weeds and pests.",
    "The domestication of rice is believed to have occurred around 10,000 years ago in the Yangtze River valley in China.",
    "In many cultures, rice is associated with prosperity and fertility, often used in rituals and celebrations.",
    "White rice generally cooks faster than brown rice, taking about 15-20 minutes compared to 40-50 minutes for brown rice.",
    "China and India are the two largest producers of rice, accounting for nearly half of the world's total production.",
    "Properly stored, white rice can last indefinitely, while brown rice has a shelf life of about 6 months due to its higher oil content.",
    "Rice cultivation is sensitive to climate change, with rising temperatures and changing rainfall patterns affecting yields.",
    "Rice is a key ingredient in many dishes worldwide, including sushi in Japan, paella in Spain, and risotto in Italy.",
    "Some studies suggest that consuming too much white rice may be linked to an increased risk of type 2 diabetes.",
    "Rice bran, a byproduct of rice milling, is used to produce rice bran oil, which is popular for cooking due to its high smoke point.",
    "Wild rice is not true rice but rather a type of aquatic grass. It is native to North America and has a nutty flavor.",
    "Traditional rice farming practices promote biodiversity, with many farmers growing multiple varieties in the same field.",
    "Rice has been grown in space as part of experiments to study plant growth in microgravity.",
    "Flooded rice paddies can help sequester carbon dioxide, potentially mitigating climate change.",
    "Many cultures celebrate rice harvests with festivals, such as the 'Paddy Festival' in the Philippines.",
    "In many developing countries, rice farming is a crucial part of the economy, providing livelihoods for millions of people."
];

document.getElementById('randomFactButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * riceFacts.length);
    const randomFact = riceFacts[randomIndex];
    document.getElementById('factContainer').innerHTML = `<p>${randomFact}</p>`;
});
