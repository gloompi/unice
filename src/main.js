document.addEventListener('DOMContentLoaded', () => {
  // Modules needed for certain pages
  const modules = {
    '/auth': 'auth.js',
  }

  const loadModule = async (fileName) => {
    try {
      const module = await import(`/${fileName}`)
      module.run()
    } catch (error) {
      console.log('FAILED TO RUN MODULE', fileName, error)
    }
  }

  Object.entries(modules).forEach(([key, fileName]) => {
    if (location.pathname === '/') {
      loadModule('home.js')
    }

    if (modules[key] === location.pathname || location.pathname.includes(key)) {
      loadModule(fileName)
    }
  })
})
