const form = document.querySelector('#contact-form')
const status = document.querySelector('#form-status')

form?.addEventListener('submit', async (event) => {
  event.preventDefault()
  const button = form.querySelector('button[type="submit"]')
  button.disabled = true
  status.className = 'form-status'
  status.textContent = 'Enviando sua solicitação…'

  const payload = Object.fromEntries(new FormData(form).entries())
  payload.consent = Boolean(payload.consent)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.message || 'Não foi possível enviar.')
    form.reset()
    status.className = 'form-status success'
    status.textContent = 'Solicitação enviada. Retornaremos pelo e-mail informado.'
  } catch (error) {
    status.className = 'form-status error'
    status.textContent = error instanceof Error ? error.message : 'Não foi possível enviar. Tente novamente.'
  } finally {
    button.disabled = false
  }
})
