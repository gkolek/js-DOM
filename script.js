function ask() {
  const result = confirm('Czy chcesz odpowiedzieć na pytanie?')

  if (result === true) {
    const name = prompt('Jak masz na imie?')
    alert('Cześć ' + name + '!')
  }
}

ask()

// shorter code is NOT always better!
const shorterAsk = () => {
  if (confirm('Czy chcesz odpowiedzieć na pytanie?')) {
    alert(prompt('Jak masz na imie?'))
  }
}

shorterAsk()