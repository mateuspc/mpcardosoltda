const form = document.querySelector('#support-form')
const status = document.querySelector('#form-status')
const appSelect = document.querySelector('#app-name')
const privacyLink = document.querySelector('#support-privacy-link')
const termsLink = document.querySelector('#support-terms-link')
const documentCopy = document.querySelector('#support-document-copy')

const appDocuments = {
  PitchPro: {
    slug: 'pitchpro',
    query: 'pitchpro',
  },
  'Delay & Reverb Pro': {
    slug: 'delay-reverb',
    query: 'delay-reverb',
  },
  'Car Audio Box & Tuning Pro': {
    slug: 'car-audio-box',
    query: 'car-audio-box',
  },
  'ClearWave Pro': {
    slug: 'clearwave',
    query: 'clearwave',
  },
}

const updateDocumentLinks = () => {
  const appName = appSelect?.value ?? ''
  const documents = appDocuments[appName]
  if (privacyLink) {
    privacyLink.href = documents ? `/privacy/${documents.slug}/` : '/privacy/'
    privacyLink.textContent = documents
      ? `Política de Privacidade do ${appName}`
      : 'Política de Privacidade geral'
  }
  if (termsLink) {
    termsLink.href = documents ? `/terms/${documents.slug}/` : '/terms/'
    termsLink.textContent = documents ? `Termos de Uso do ${appName}` : 'Termos de Uso gerais'
  }
  if (documentCopy) {
    documentCopy.textContent = documents
      ? `Consulte os documentos específicos que regem o uso e o tratamento de dados do ${appName}.`
      : 'Selecione um aplicativo para acessar seus documentos específicos, quando disponíveis.'
  }
}

const requestedApp = new URLSearchParams(window.location.search).get('app')
const requestedEntry = Object.entries(appDocuments).find(
  ([, documents]) => documents.query === requestedApp?.toLowerCase(),
)
if (requestedEntry && appSelect) {
  appSelect.value = requestedEntry[0]
}
updateDocumentLinks()
appSelect?.addEventListener('change', updateDocumentLinks)

form?.addEventListener('submit', async (event) => {
  event.preventDefault()
  const button = form.querySelector('button[type="submit"]')
  button.disabled = true
  status.className = 'form-status'
  status.textContent = 'Enviando sua solicitação…'

  const payload = Object.fromEntries(new FormData(form).entries())
  payload.consent = Boolean(payload.consent)

  try {
    const response = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.message || 'Não foi possível enviar.')
    form.reset()
    updateDocumentLinks()
    status.className = 'form-status success'
    status.textContent = 'Solicitação enviada. A resposta será encaminhada ao e-mail informado.'
  } catch (error) {
    status.className = 'form-status error'
    status.textContent =
      error instanceof Error ? error.message : 'Não foi possível enviar. Tente novamente.'
  } finally {
    button.disabled = false
  }
})
