function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  function toggleView(section) {
    const sections = ['courses', 'contact', 'about', 'news'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (id === section) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  
    // Close the sidebar after selection
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
  }
  