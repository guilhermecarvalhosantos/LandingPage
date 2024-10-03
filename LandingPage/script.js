document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const resume = document.getElementById('resume').value;
    const position = document.getElementById('position').value;
    const experience = document.getElementById('experience').value;
    const message = document.getElementById('message').value;

    if (validateEmail(email)) {
        document.getElementById('messageBox').innerText = 'Candidatura enviada com sucesso!';

        // Armazenar cookies com segurança
        document.cookie = `name=${encodeURIComponent(name)}; path=/; secure; samesite=strict`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/; secure; samesite=strict`;
        document.cookie = `phone=${encodeURIComponent(phone)}; path=/; secure; samesite=strict`;
        document.cookie = `linkedin=${encodeURIComponent(linkedin)}; path=/; secure; samesite=strict`;
        document.cookie = `resume=${encodeURIComponent(resume)}; path=/; secure; samesite=strict`;
        document.cookie = `position=${encodeURIComponent(position)}; path=/; secure; samesite=strict`;
        document.cookie = `experience=${encodeURIComponent(experience)}; path=/; secure; samesite=strict`;
        document.cookie = `message=${encodeURIComponent(message)}; path=/; secure; samesite=strict`;

        // Limpar o formulário
        document.getElementById('applicationForm').reset();
    } else {
        document.getElementById('messageBox').innerText = 'Por favor, insira um e-mail válido.';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
