startServiceWorker = () => {
    if (!navigator.serviceWorker) return;
  
    navigator.serviceWorker.register('/js/sw.js').then(() => {
      console.log('Registration worked');
    }).catch(() => {
      console.log('Registration failed');
    })
  }

  startServiceWorker();
  