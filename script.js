async function generateOutfit() {
  const skinTone = document.getElementById('skin-tone').value;
  const prompt = document.getElementById('prompt').value;
  const suggestionDiv = document.getElementById('suggestion');
  suggestionDiv.innerHTML = "Thinking...";

  // Fake API simulation for demo purposes
  setTimeout(() => {
    suggestionDiv.innerHTML = `Outfit suggestion for ${skinTone} skin tone: Smart casual with a neutral beige blazer, white shirt, slim black trousers. Check Zara or ASOS for similar pieces.`;
  }, 1000);
}